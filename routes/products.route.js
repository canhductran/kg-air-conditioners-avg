const express = require('express');
const router = express.Router({ mergeParams: true });

const productsController = require('../controllers/products.controller');

//Get Average Cubic Weight of Products.
router.route('/averagecubicweight')
    .get(productsController.getProductsAverageCubicWeight);

module.exports = router;