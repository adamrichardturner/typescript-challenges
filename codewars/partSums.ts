export function partsSums(ls: number[]): number[] {
  let total: number = ls.reduce((a, b) => a + b, 0)
  const summedParts: number[] = [total]
  for (let i = 0; i < ls.length; i++) {
    total -= ls[i]
    summedParts.push(total)
  }
  return summedParts
}

console.log(partsSums([0, 1, 3, 6, 10]))
// [20, 20, 19, 16, 10, 0]
