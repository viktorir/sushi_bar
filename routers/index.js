const { Router } = require(`express`);
const router = new Router();

const authRouter = require(`./auth.router`);
const clientRouter = require(`./client.router`);
const productRouter = require(`./product.router`);
const productTypeRouter = require(`./product.type.router`)

router.get('/', (req, res) => { res.status(200).json({ message: `Hello мир, манера крутит мир` }) });

router.use(`/auth`, authRouter);
router.use(`/client`, clientRouter);
router.use(`/product`, productRouter);
router.use(`/product_type`, productTypeRouter);

module.exports = router;