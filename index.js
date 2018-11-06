var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var max = 100;
  var min = 1;
  var price = Math.floor(Math.random() * (max - min + 1)) + min;
  var itemObj = {
    itemName : item,
    itemPrice : price
  };

  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
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
