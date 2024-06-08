export function xo(str: string): boolean {
  /*
    Check to see if a string has the same amount of 'x's and 'o's. 
    The method must return a boolean and be case insensitive. 
    The string can contain any char.
  */
  return (str.match(/[x]/gi) || []).length === (str.match(/[o]/gi) || []).length
}

console.log(xo("xo")) // true
console.log(xo("xxOo")) // true
console.log(xo("xxxm")) // false
console.log(xo("")) // true
