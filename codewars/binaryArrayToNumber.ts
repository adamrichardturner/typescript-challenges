export function binaryArrayToNumber(arr: number[]): number {
  return arr
    .reverse()
    .map((num, i) => num * 2 ** i)
    .reduce((a, b) => a + b)
}

console.log(binaryArrayToNumber([0, 0, 0, 1])) // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])) // 2
console.log(binaryArrayToNumber([1, 1, 1, 1])) // 15
console.log(binaryArrayToNumber([0, 1, 1, 0])) // 6
