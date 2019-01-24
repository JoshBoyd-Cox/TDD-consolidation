"use strict";
exports.__esModule = true;
var index2_1 = require("../src/index2");
var chai_1 = require("chai");
describe('result calculator', function () {
    it('should return an empty string as zero', function () {
        var calculator = new index2_1.ResultCalculator();
        var result = calculator.calculate("");
        chai_1.expect(result).to.equal(0);
    });
    it('should return a single value as a number - 1', function () {
        var calculator = new index2_1.ResultCalculator();
        var result = calculator.calculate("1");
        chai_1.expect(result).to.equal(1);
    });
    it('should return a single value as a number - 10', function () {
        var calculator = new index2_1.ResultCalculator();
        var result = calculator.calculate("10");
        chai_1.expect(result).to.equal(10);
    });
    it('should return a single value as a number - 999', function () {
        var calculator = new index2_1.ResultCalculator();
        var result = calculator.calculate("999");
        chai_1.expect(result).to.equal(999);
    });
});
describe('addition calculator', function () {
    it('should return the sum of 2 values, comma delimited', function () {
        var calculator = new index2_1.ResultCalculator();
        var sumResult = calculator.addition("100,1");
        chai_1.expect(sumResult).to.equal(101);
    });
    it('should return the sum of 2 values, newline delimited', function () {
        var calculator = new index2_1.ResultCalculator();
        var sumResult = calculator.addition("1\n1");
        chai_1.expect(sumResult).to.equal(2);
    });
    it('should handle 3 numbers, delimited in any way', function () {
        var calculator = new index2_1.ResultCalculator();
        var sumResult = calculator.addition("1,10,100");
        chai_1.expect(sumResult).to.equal(111);
    });
    it('should handle 7 numbers, delimited in any way', function () {
        var calculator = new index2_1.ResultCalculator();
        var sumResult = calculator.addition("1,10,100,100,100,100,100");
        chai_1.expect(sumResult).to.equal(511);
    });
});
describe('negative number handler', function () {
    it('should throw an error when taking in a negative value number', function () {
        var calculator = new index2_1.ResultCalculator();
        chai_1.expect(function () { return calculator.throwError("-1"); }).to["throw"]();
    });
});
//# sourceMappingURL=index2.spec.js.map