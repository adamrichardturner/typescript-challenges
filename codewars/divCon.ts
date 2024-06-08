export function divCon(x: (string | number)[]): number {
  /*
    Given a mixed array of number and string representations of integers, 
    add up the non-string integers and subtract the total of the string integers.
    Return as a number.
  */

  // Initialise our totals
  let stringTotal = 0
  let numberTotal = 0

  // Loop through x and add up the totals
  for (const i of x) {
    if (typeof i === "number") {
      numberTotal += i
    }
    if (typeof i === "string") {
      stringTotal += +i
    }
  }

  // Return the difference
  return numberTotal - stringTotal
}

console.log(divCon([9, 3, "7", "3"])) // 2
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7])) // 14
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])) // 13
