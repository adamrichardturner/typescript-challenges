export function getAverage(marks: number[]): number {
  //TODO : calculate the downwar rounded average of the marks array
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length)
}

console.log(getAverage([])) // NaN
console.log(getAverage([2, 2, 2, 2])) // 2
console.log(getAverage([1, 2, 3, 4, 5])) // 3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])) // 1
