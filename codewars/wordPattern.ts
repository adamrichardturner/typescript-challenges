export function wordPattern(word: string): string {
  /*
    In cryptanalysis, words patterns can be a useful tool in cracking simple ciphers.

    A word pattern is a description of the patterns of letters occurring in a word, 
    where each letter is given an integer code in order of appearance. So the first 
    letter is given the code 0, and second is then assigned 1 if it is different to 
    the first letter or 0 otherwise, and so on.

    As an example, the word "hello" would become "0.1.2.2.3". For this 
    task case-sensitivity is ignored, so "hello", "helLo" and "heLlo" will all 
    return the same word pattern.

    Your task is to return the word pattern for a given word. All words provided 
    will be non-empty strings of alphabetic characters only, i.e. matching the 
    regex "[a-zA-Z]+".
  */

  // integerCodes is assigned an object which will hold all the chars in word
  // as keys with their first occurence & matching index in word as values
  const integerCodes: { [key: string]: number } = {}
  // currentCode is sequential counter used on each iteration to assign as key
  let currentCode = 0

  // Return the word...
  return (
    word
      // lower-cased as this is case-insensitive
      .toLowerCase()
      // split as an array...
      .split('')
      // where each char...
      .map((char) => {
        // is checked for the condition that if value is undefined in the
        // integerCodes object...
        if (integerCodes[char] === undefined) {
          // We add it as the key with the currentCode incremented using the
          // post increment operation...
          integerCodes[char] = currentCode++
        }
        // finally we return the index in the new mapping
        return integerCodes[char]
      })
      .join('.')
  )
}

console.log(wordPattern('hello')) // "0.1.2.2.3"
console.log(wordPattern('heLlo')) // "0.1.2.2.3"
console.log(wordPattern('helLo')) // "0.1.2.2.3"
console.log(wordPattern('Hippopotomonstrosesquippedaliophobia'))
// "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13"
