const { Router } = require(`express`);
const router = new Router();

const productTypeController = require(`../controllers/product.type.controller`);

router.post(`/`, productTypeController.create);
router.get(`/`, productTypeController.getAll);
router.get(`/:id`, productTypeController.getOne);
router.put(`/:id`, productTypeController.update);
router.delete(`/:id`, productTypeController.delete);

module.exports = router;