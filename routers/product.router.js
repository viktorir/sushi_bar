const { Router } = require(`express`);
const router = new Router();

const productController = require(`../controllers/product.controller`);

router.post(`/`, productController.create);
router.get(`/`, productController.getAll);
router.get(`/:id`, productController.getOne);
router.put(`/:id`, productController.update);
router.delete(`/:id`, productController.delete);

module.exports = router;