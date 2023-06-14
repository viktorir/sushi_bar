require(`dotenv`).config();
const express = require(`express`);
const cors = require(`cors`)
const router = require(`./routers/index`);
const errorHandler = require(`./middleware/error.handling.middleware`);

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json(), cors());
app.use(`/api`, router);

app.use(errorHandler)

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
    
}

start();