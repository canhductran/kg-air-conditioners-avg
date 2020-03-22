const assert = require('assert');
const { calculateProductCubicWeight } = require("../../util/util")

describe("Util", function() {
    describe("calculateProductCubicWeight", function () {
        it("Should return 6", function () {
            const result = calculateProductCubicWeight(0.4, 0.2, 0.3);
            assert.equal(Math.round(result), 6);
        });
    });

    describe("calculateProductCubicWeight", function () {
        it("Should throw Error", function () {
            assert.throws(() => {
                calculateProductCubicWeight(0.4, 0.2, 0.0);
            }, Error, "Insufficient product size");
        });
    });
});