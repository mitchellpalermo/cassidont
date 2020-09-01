//implement an algorithm to determine if a string has all unique characters

function isUnique(str) {
  var temp = "";
  for (var i = 0; i < str.length; i++) {
    temp = str[i];
    for (var i = 1; i < str.length; i++) {
      if (temp === str[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isUnique("aaaaa"));
console.log(isUnique("abfndkj"));
