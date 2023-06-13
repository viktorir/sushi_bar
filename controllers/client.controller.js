const Client = require(`../models/client.model`);

class ClientController {
    async create(req, res, next) {
        const { phoneNumber, password, firstName, lastName } = req.body;
        const newClient = new Client(phoneNumber, password, firstName, lastName);

        res.status(200).json((await newClient.create()).rows[0]);
    }

    async getAll(req, res, next) {
        const clients = await Client.get();

        res.status(200).json(clients.rows);
    }

    async getOne(req, res, next) {
        const { id } = req.params;

        const client = await Client.getOne(id);

        res.status(200).json(client.rows[0]);
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { phoneNumber, password, firstName, lastName } = req.body;

        const newDataClient = new Client(phoneNumber, password, firstName, lastName);

        res.status(200).json((await newDataClient.update(id)).rows[0]);
    }

    async delete(req, res, next) {
        const { id } = req.params;
        
        res.status(200).json((await Client.delete(id)).rows[0]);
    }
}

module.exports = new ClientController();