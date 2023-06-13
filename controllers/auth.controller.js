const Client = require(`../models/client.model`);

class AuthController {
    async signup(req, res, next) {
        const { phoneNumber, password, firstName, lastName } = req.body;

        const candidate = await Client.getOneFromPhone(phoneNumber);
        if(candidate.rows[0]) return next(ApiError.badRequest('Error: This phone number is already in use!'));

        const newClient = new Client(phoneNumber, password, firstName, lastName);
        res.status(200).json((await newClient.create()).command);
    }

    async signin(req, res, next) {
        res.status(200).json({ message: `login`});
    }
}

module.exports = new AuthController();