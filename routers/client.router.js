const { Router } = require("express");
const router = new Router();

const clientController = require('../controllers/client.controller')

router.get('/', clientController.getAll);
router.get('/:id', clientController.getOne);

module.exports = router;