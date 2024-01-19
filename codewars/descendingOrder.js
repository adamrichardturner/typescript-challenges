"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descendingOrder = void 0;
function descendingOrder(n) {
    /*
    Your task is to make a function that can take any non-negative integer as
    an argument and return it with its digits in descending order.
    
    Essentially, rearrange the digits to create the highest possible number.

    Examples:
    Input: 42145 Output: 54421

    Input: 145263 Output: 654321

    Input: 123456789 Output: 987654321
    */
    return +(n.toString().split('').sort(function (a, b) { return (b.charCodeAt(0)) - a.charCodeAt(0); }).join(''));
}
exports.descendingOrder = descendingOrder;
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321
//# sourceMappingURL=descendingOrder.js.map