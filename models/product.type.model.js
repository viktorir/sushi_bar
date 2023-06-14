const db = require(`../config/db.config`);

module.exports = class Product {
    constructor (name) {
        this.name = name;
    }

    async create() {
        return await db.query (
            `insert into "Product_types" ( "name" ) 
            values 
            ($1)
            returning *`, 
            [this.name]
        );
    }

    static async get() {
        return await db.query (
            `select * 
            from "Product_types"`
        );
    }

    static async getOne(id) {
        return await db.query (
            `select * 
            from "Product_types"
            where "id_type" = $1
            limit 1`,
            [id]
        );
    }

    async update(id) {
        return await db.query (
            `update "Product_types"
            set "name" = $2
            where "id_type" = $1
            returning *`,
            [id, this.name]
        );
    }

    static async delete(id) {
        return await db.query (
            `delete from "Product_types" 
            where "id_type" = $1
            returning *`,
            [id]
        );
    }
}