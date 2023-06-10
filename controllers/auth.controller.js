const Client = require('../models/client.model');

class AuthController {
    async signup(req, res, next) {
        const { phoneNumber, password, firstName, lastName } = req.body;
        const newClient = new Client(phoneNumber, password, firstName, lastName);
        await newClient.create();
        res.status(200).json({ message: "reg"});
    }

    async signin(req, res, next) {
        res.status(200).json({ message: "login"})
    }
}

module.exports = new AuthController()