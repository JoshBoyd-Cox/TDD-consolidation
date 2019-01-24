"use strict";
exports.__esModule = true;
var ResultCalculator = (function () {
    function ResultCalculator() {
    }
    ResultCalculator.prototype.calculate = function (testInput) {
        if (testInput.length === 0) {
            return 0;
        }
        return parseInt(testInput);
    };
    ResultCalculator.prototype.addition = function (testInput) {
        var array;
        if (testInput.indexOf(",") != -1) {
            array = testInput.split(",");
        }
        else if (testInput.indexOf("\n") != -1) {
            array = testInput.split("\n");
        }
        var totalSum = 0;
        for (var i = 0; i < array.length; i++) {
            totalSum = totalSum + Number(array[i]);
        }
        return totalSum;
    };
    ResultCalculator.prototype.throwError = function (testInput) {
        if (testInput.indexOf("-") != -1) {
            throw new Error('You have entered a negative number');
        }
    };
    return ResultCalculator;
}());
exports.ResultCalculator = ResultCalculator;
//# sourceMappingURL=index2.js.map