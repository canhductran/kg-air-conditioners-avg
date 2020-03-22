/**
 * Calculate the Cubic Weight of a Product.
 * @param {*} width Has to be in meters
 * @param {*} height Has to be in meters
 * @param {*} length Has to be in meters
 */
const calculateProductCubicWeight = (width, height, length) => {
    if (!width ||
        !height ||
        !length) {
        throw Error("Insufficient product sizeeee");
    }

    const conversionFactor = 250;
    return width * height * length * conversionFactor;
}

module.exports = {
    calculateProductCubicWeight
};