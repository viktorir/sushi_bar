const db = require(`../config/db.config`);

module.exports = class Client {
    constructor (phoneNumber, password, firstName, lastName) {
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    async create() {
        return await db.query (
            `insert into "Clients" ( "phone_number", "password", "first_name", "last_name") 
            values 
            ($1, $2, $3, $4)
            returning *`, 
            [this.phoneNumber, this.password, this.firstName, this.lastName]
        );
    }

    static async get() {
        return await db.query (
            `select * 
            from "Clients"`
        );
    }

    static async getOne(id) {
        return await db.query (
            `select * 
            from "Clients"
            where "id_client" = $1
            limit 1`,
            [id]
        );
    }

    static async getOneFromPhone(phoneNumber) {
        return await db.query (
            `select * 
            from "Clients"
            where "phone_number" = $1
            limit 1`,
            [phoneNumber]
        );
    }

    async update(id) {
        return await db.query (
            `update "Clients"
            set "first_name" = $2, "last_name" = $3, "phone_number" = $4, "password" = $5
            where "id_client" = $1
            returning *`,
            [id, this.firstName, this.lastName, this.phoneNumber, this.password]
        );
    }

    static async delete(id) {
        return await db.query (
            `delete from "Clients" 
            where "id_client" = $1
            returning *`,
            [id]
        );
    }
}