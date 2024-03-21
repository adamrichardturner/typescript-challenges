export class Kata {
  /*
    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).
    The input string will only consist of lower case letters and/or spaces.
  */
  static getCount(str: string): number {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
  }
}

const testObj = Kata.getCount("abracadabra")
console.log(testObj) // 5
