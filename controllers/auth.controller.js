const Client = require(`../models/client.model`);

class AuthController {
    async signup(req, res, next) {
        const { phoneNumber, password, firstName, lastName } = req.body;
        const newClient = new Client(phoneNumber, password, firstName, lastName);
        res.status(200).json((await newClient.create()).command);
    }

    async signin(req, res, next) {
        res.status(200).json({ message: `login`});
    }
}

module.exports = new AuthController();