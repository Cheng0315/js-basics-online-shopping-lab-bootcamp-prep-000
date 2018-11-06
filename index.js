var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var max = 1000;
  var min = 1;
  var itemObj = {
    itemName : item,
    itemPrice : Math.floor(Math.random() * (max - min + 1)) + min
  };

  cart.push(itemObj);
  return `${item} has been added to the cart.`;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
