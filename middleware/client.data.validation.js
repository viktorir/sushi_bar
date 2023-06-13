const ApiError = require(`../error/error.API`);

module.exports = (req, res, next) => {
    const { phoneNumber, password, firstName, lastName } = req.body;

    if (!phoneNumber || !password || !firstName || !lastName) return next(ApiError.badRequest(`Error: Fields cannot be empty!`));

    if (phoneNumber.length != 11) return next(ApiError.badRequest(`Error: The length of the phone number is not equal to 11 characters!`));
    if (phoneNumber[0] != `7` || phoneNumber[1] != `9`) return next(ApiError.badRequest(`Error: Phone number doesn't start with '79'!`));

    if (password.length < 4) return next(ApiError.badRequest('Error: The password must be no shorter than 4 characters!'));

    next();
}