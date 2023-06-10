const Client = require('../models/client.model');

class ClientController {
    async create(req, res, next) {
        res.status(200).json({ message: "Client create"});
    }

    async getAll(req, res, next) {
        console.log('getAll')
        const clients = await Client.get();
        res.status(200).json(clients.rows);
    }

    async getOne(req, res, next) {
        console.log('getOne')
        const {id} = req.parms.id;
        const clients = await Client.getOne(id);
        res.status(200).json(clients.rows[0]);
    }

    async update() {
        res.status(200).json({ message: "Client create"});
    }

    async delete() {
        res.status(200).json({ message: "Client create"});
    }   
}

module.exports = new ClientController()