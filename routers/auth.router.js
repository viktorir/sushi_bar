const { Router } = require(`express`);
const router = new Router();

const dataValidation = require(`../middleware/client.data.validation`); 
const authController = require(`../controllers/auth.controller`);

router.post(`/signup`, dataValidation, authController.signup);

module.exports = router;