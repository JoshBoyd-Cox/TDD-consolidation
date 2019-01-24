/*
String Calculator
*/

// An empty string returns zero
// A single number returns the value
// Two numbers, comma delimited, returns the sum
// Two numbers, newline delimited, returns the sum
// Three numbers, delimited either way, returns the sum
// Negative numbers throw an exception
// Numbers greater than 1000 are ignored
// A single char delimiter can be defined on the first line (e.g. //# for a ‘#’ as the delimiter)
// A multi char delimiter can be defined on the first line (e.g. //[###] for ‘###’ as the delimiter)
// Many single or multi-char delimiters can be defined (each wrapped in square brackets)

export class ResultCalculator {
    
    calculate(testInput: string) {
        if (testInput.length === 0) {
            return 0;
        }
        return parseInt(testInput);
    }
    
    addition(testInput: string){
        let array;
        //indexOf will check a string for a given character and will return a number if true, else it will return -1
        if (testInput.indexOf(",") != -1) {
            array = testInput.split(",");
        }
        else if (testInput.indexOf("\n") != -1) {
            array = testInput.split("\n");
        }
        
        let totalSum = 0;
        for (let i = 0; i<array.length; i++) {
            //total sum keeps the value of the previous loop and then adds it to the next identified point in the array index. This value is then saved for the next loop.
            totalSum = totalSum + Number(array[i]);
        }
        return totalSum;
    }
    throwError(testInput: string) {
        if (testInput.indexOf("-") != -1 ) {
            throw new Error('You have entered a negative number');
        }
    }
}