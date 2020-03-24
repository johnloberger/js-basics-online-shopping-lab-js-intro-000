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
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1){
    var oneItem = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
    console.log(oneItem)
  } else if (cart.length === 2){
    var twoItems = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`
    console.log(twoItems)
  } else {
    var cartData = []
    for (var i = 0; i < cart.length-1; i++){
      cartData.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
}
    var threePlusItems = `In your cart, you have ${cartData.join(', ')}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`
  }
  console.log(threePlusItems)
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
