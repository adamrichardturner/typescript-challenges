"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.squareDigits = function (num) {
        /*
        Welcome.
        
        In this kata, you are asked to square every digit of a number and concatenate them.
  
        For example, if we run 9119 through the function, 811181 will come out,
        because 92 is 81 and 12 is 1. (81-1-1-81)
  
        Example #2: An input of 765 will/should return 493625
        because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
  
        Note: The function accepts an integer and returns an integer.
        */
        return +(num.toString().split('').map(function (n) { return Math.pow((+n), 2); })).join('');
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.squareDigits(9119));
console.log(Kata.squareDigits(765));
//# sourceMappingURL=squareDigits.js.map