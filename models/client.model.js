const db = require('../config/db.config');

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
            ($1, $2, $3, $4)`, 
            [this.phoneNumber, this.password, this.firstName, this.lastName]
        );
    }

    static async get() {
        console.log('getAll')
        return await db.query (
            `select * 
            from "Clients"`
        );
    }

    static async getOne(id) {
        console.log('getOne')
        return await db.query (
            `select * 
            from "Clients"
            where "id_client" = $1
            limit 1`,
            [id]
        );
    }
}