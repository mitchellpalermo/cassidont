function checkPermutation(a, b) {
  if (a.length != b.length) {
    return false;
  }
  let charMapA = {};
  let charMapB = {};

  a = a.toLowerCase().split("").sort();
  b = b.toLowerCase().split("").sort();

  a.map((char) => {
    if (charMapA[char]) {
      charMapA[char]++;
    } else {
      charMapA[char] = 1;
    }
  });
  b.map((char) => {
    if (charMapB[char]) {
      charMapB[char]++;
    } else {
      charMapB[char] = 1;
    }
  });

  for (let char in charMapA) {
    if (charMapA[char] != charMapB[char]) {
      return false;
    }
  }
  return true;
}

console.log(checkPermutation("racecar", "racecar"));
