export function sumCubes(n: number): number {
  /*
  Write a function that takes a positive integer n, 
  sums all the cubed values from 1 to n (inclusive), 
  and returns that sum.

  Assume that the input n will always be a positive integer.

  Examples: (Input --> output)

  2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
  3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
  */

  // Store in range our range of numbers from 1 to n
  const range: number[] = []

  // Iterate from 1 to n and push to range i^3
  for(let i: number = 1; i <= n; i++) {
    range.push(Math.pow(i, 3))
  }

  // Return the range summed using the reduce iterator
  return range.reduce((a, b) => a + b)
}

console.log(sumCubes(2)) // 9
console.log(sumCubes(3)) // 36