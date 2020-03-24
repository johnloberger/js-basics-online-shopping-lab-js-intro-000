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
  if (cart.length === 0) {
    return `Your shopping cart is empty`
  } else {
    cartItems = []

    var last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`

    for(var i = 0; i < cart.length - 1; i++){
       cartItems.push(
         `${cart[i].itemName} at $${cart[i].itemPrice}`
       )
    }
    return `In your cart, you have ${cartItems.join(', ')}, and ${last}`
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
