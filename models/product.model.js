const db = require(`../config/db.config`);

module.exports = class Product {
    constructor (name, description, weight, price, typeId) {
        this.name = name;
        this.description = description;
        this.weight = weight;
        this.price = price;
        this.typeId = typeId;
    }

    async create() {
        return await db.query (
            `insert into "Products" ( "name", "description", "weight", "price", "type_id") 
            values 
            ($1, $2, $3, $4, $5)
            returning *`, 
            [this.name, this.description, this.weight, this.price, this.typeId]
        );
    }

    static async get() {
        return await db.query (
            `select * 
            from "Products"`
        );
    }

    static async getOne(id) {
        return await db.query (
            `select * 
            from "Products"
            where "id_product" = $1
            limit 1`,
            [id]
        );
    }

    async update(id) {
        return await db.query (
            `update "Products"
            set "name" = $2, "description" = $3, "weight" = $4, "price" = $5, "type_id" = $6
            where "id_product" = $1
            returning *`,
            [id, this.name, this.description, this.weight, this.price, this.typeId]
        );
    }

    static async delete(id) {
        return await db.query (
            `delete from "Products" 
            where "id_product" = $1
            returning *`,
            [id]
        );
    }
}