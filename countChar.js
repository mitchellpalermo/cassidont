//given a string s and a character c , return the number of occurrences of c in s

//example: countChar("oh heavens","h") -> 2

function countChar(str, c) {
  var count = 0;
  for (let char of str) {
    if (c === str[char]) {
      count += 1;
    }
  }
  return count;
}
