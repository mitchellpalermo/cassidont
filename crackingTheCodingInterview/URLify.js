function urlIfy(str, len) {
  return str
    .split(" ")
    .slice(0, len - 1)
    .join("%20");
}

console.log(urlIfy("Mr John Smith", 13));
