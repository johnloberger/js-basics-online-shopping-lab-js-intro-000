var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.random() * 100
  var object = {itemName: item, itemPrice: price}
  cart.push(object)
  return `${item} has been added to your cart.`
  }

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
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
