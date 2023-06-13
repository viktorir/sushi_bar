const { Router } = require(`express`);
const router = new Router();

const dataValidation = require(`../middleware/client.data.validation`); 
const clientController = require(`../controllers/client.controller`);

router.post(`/`, dataValidation, clientController.create);
router.get(`/`, clientController.getAll);
router.get(`/:id`, clientController.getOne);
router.put(`/:id`, dataValidation, clientController.update);
router.delete(`/:id`, clientController.delete)

module.exports = router;