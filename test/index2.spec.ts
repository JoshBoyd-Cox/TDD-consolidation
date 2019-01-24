import {ResultCalculator} from '../src/index2';
import {expect} from 'chai'

describe('result calculator', () => {
    it ('should return an empty string as zero', () => {
        let calculator = new ResultCalculator();
        let result = calculator.calculate("");
        expect (result).to.equal(0);
    })
    
    it ('should return a single value as a number - 1', () => {
        let calculator = new ResultCalculator();
        let result = calculator.calculate("1");
        expect (result).to.equal(1);
    })

    it ('should return a single value as a number - 10', () => {
        let calculator = new ResultCalculator();
        let result = calculator.calculate("10");
        expect (result).to.equal(10);
    })
    
    it ('should return a single value as a number - 999', () => {
        let calculator = new ResultCalculator();
        let result = calculator.calculate("999");
        expect (result).to.equal(999);
    })
    

})

describe('addition calculator', () => {
    it ('should return the sum of 2 values, comma delimited', () => {
        let calculator = new ResultCalculator();
        let sumResult = calculator.addition("100,1");
        expect (sumResult).to.equal(101)
    })
    it ('should return the sum of 2 values, newline delimited', () => {
        let calculator = new ResultCalculator();
        let sumResult = calculator.addition("1\n1");
        expect (sumResult).to.equal(2);
    })
    it ('should handle 3 numbers, delimited in any way', () => {
        let calculator = new ResultCalculator();
        let sumResult = calculator.addition("1,10,100");
        expect (sumResult).to.equal(111);
    })
    it ('should handle 7 numbers, delimited in any way', () => {
        let calculator = new ResultCalculator();
        let sumResult = calculator.addition("1,10,100,100,100,100,100");
        expect (sumResult).to.equal(511);
    })
})

describe('negative number handler', () => {
    it ('should throw an error when taking in a negative value number', () => {
        let calculator = new ResultCalculator();
        // let errorResult = calculator.throwError("-1");
        expect (() => calculator.throwError("-1")).to.throw();
    })
})
