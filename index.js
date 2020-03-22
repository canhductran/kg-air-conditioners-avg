const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const app = express();
const productsRoute = require('./routes/products.route');
const router = express.Router();
const cors = require('cors');

router.use('/api/products', productsRoute);

app.use(cors());
app.use(bodyParser.json())
app.use(router);

app.listen(config.PORT, config.HOST);
console.log(`Running on HOST ${config.HOST} and PORT ${config.PORT}`);