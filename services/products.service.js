
const axios = require('axios');
const { calculateProductCubicWeight } = require('../util/util');
const config = require('../config/config');

/**
 * Service method to get all the list of products with a Category and
 * calculate the Average Cubic Weight.
 * @param {*} category Category
 */
const getProductsAverageCubicWeight = async (category) => {
    let apiPath = '/api/products/1';
    let productCount = 0;
    let totalCubicWeight = 0.0;

    do {
        let url = `${config.S3_PRODUCT_BASE_URL}${apiPath}`;
        let response = await axios.get(url);
        let result = response.data;

        for (let product of result.objects) {
            if (product.category !== category) {
                continue;
            }

            let productSize = product.size;

            if (!productSize.width ||
                !productSize.height ||
                !productSize.length) {
                throw Error("Insufficient product size");
            }

            let widthInMeters = productSize.width / 100;
            let heightInMeters = productSize.height / 100;
            let lengthInMeters = productSize.length / 100;

            let cubicWeight = calculateProductCubicWeight(widthInMeters, heightInMeters, lengthInMeters);

            totalCubicWeight += cubicWeight;
            productCount++;
        }

        if (!result.next) {
            break;
        }

        apiPath = result.next;

    } while (apiPath)

    //Probably cannot find any products with that category
    if (!productCount) {
        return 0.0;
    }

    return totalCubicWeight / productCount;
};

module.exports = {
    getProductsAverageCubicWeight,
};