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
  if (cart.length===0) {
    console.log("Your shopping cart is empty.")
  } else{
    var itemReport = "In your cart, you have"
    for (var i=0;i<cart.length;i++){
      var itemName = Object.keys(cart[i])
      itemReport = itemReport+` ${itemName} at $${cart[i][itemName]}${i===cart.length-1 ? "." : ","}`
    }
    console.log(itemReport)
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
