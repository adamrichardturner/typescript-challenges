"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumCubes = void 0;
function sumCubes(n) {
    /*
    Write a function that takes a positive integer n,
    sums all the cubed values from 1 to n (inclusive),
    and returns that sum.
  
    Assume that the input n will always be a positive integer.
  
    Examples: (Input --> output)
  
    2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
    3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
    */
    var range = [];
    for (var i = 1; i <= n; i++) {
        range.push(Math.pow(i, 3));
    }
    return range.reduce(function (a, b) { return a + b; });
}
exports.sumCubes = sumCubes;
console.log(sumCubes(2));
console.log(sumCubes(3));
