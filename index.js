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
function generateCartDescription() {
  var cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${cartDescription}.`
}

function total() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  cart.forEach(function(elem, index) {
    if (elem.hasOwnProperty(item)) {
      cart.splice(index, 1);
    }
  })
  return cart
}
  }
  else {
      return "That item is not in your cart."
    }


function placeOrder(cardNumber) {
  // write your code here
}
