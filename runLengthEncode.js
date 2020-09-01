function runLengthEncode(str) {
  var encodedOutput = "";
  var tempChar = "";
  var count = 0;

  for (var i = 0; i <= str.length; i++) {
    if (str[i] === tempChar) {
      count += 1;
    } else {
      if (tempChar != "" || i == str.length) {
        encodedOutput += count + tempChar;
        tempChar = str[i];
        count = 1;
      } else {
        tempChar = str[i];
        count = 1;
      }
    }
  }
  return encodedOutput;
}

console.log(runLengthEncode("aaaabbccca"));
