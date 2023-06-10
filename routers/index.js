const { Router } = require("express");
const router = new Router();

const authRouter = require('./auth.router');
const clientRouter = require('./client.router');

router.get('/', (req, res) => { res.status(200).json({ message: "Hello мир, манера крутит мир" }) });

router.use('/auth', authRouter);
router.use('/client', clientRouter);

module.exports = router;