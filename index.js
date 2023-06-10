require('dotenv').config();
const express = require(`express`);
const router = require('./routers/index')

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use('/api', router);

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
    
}

start();