const productsService = require('../services/products.service');

/**
 * Controller method for calculate Average Cubic Weight of Products in a Category.
 * @param {*} req Request
 * @param {*} res Response
 */
const getProductsAverageCubicWeight = async function (req, res) {
    const category = req.query.category;

    //Validate category query parameter
    if (!category) {
        return res.status(400).send({ error: 'Category cannot be empty' });
    }

    let productsAverage;

    try {
        productsAverage = await productsService.getProductsAverageCubicWeight(category);
    } catch (error) {
        console.error(error);
        return res.status(422).send({ error: 'An unexpected error happened. Please try again' });
    }

    res.send(productsAverage.toString());
};

module.exports = {
    getProductsAverageCubicWeight
};