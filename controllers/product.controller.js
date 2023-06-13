const Product = require(`../models/product.model`);

class ProductController {
    async create(req, res, next) {
        const { name, description, weight, price, typeId } = req.body;
        const newProduct = new Product(name, description, weight, price, typeId);

        res.status(200).json((await newProduct.create()).rows[0]);
    }

    async getAll(req, res, next) {
        const products = await Product.get();

        res.status(200).json(products.rows);
    }

    async getOne(req, res, next) {
        const { id } = req.params;

        const products = await Product.getOne(id);

        res.status(200).json(products.rows[0]);
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { name, description, weight, price, typeId } = req.body;

        const newDataProduct = new Product(name, description, weight, price, typeId);

        res.status(200).json((await newDataProduct.update(id)).rows[0]);
    }

    async delete(req, res, next) {
        const { id } = req.params;
        
        res.status(200).json((await Product.delete(id)).rows[0]);
    }
}

module.exports = new ProductController();