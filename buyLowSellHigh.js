const priceArray = [110, 180, 260, 40, 310, 535, 695];

function buyLowSellHigh(arr) {
  var lowest = {
    day: "",
    price: "",
  };
  var highest = {
    day: "",
    price: "",
  };
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > highest.price || !highest.price) {
      highest.day = i;
      highest.price = arr[i];
    }
  }
  for (var i = 0; i < highest.day; i++) {
    if (arr[i] < lowest.price || !lowest.price) {
      lowest.day = i;
      lowest.price = arr[i];
    }
  }
  console.log(
    `you should buy on ${lowest.day + 1} and you should sell on ${
      highest.day + 1
    } for a profit of $${highest.price - lowest.price} x #ofShares `
  );
}

buyLowSellHigh(priceArray);
