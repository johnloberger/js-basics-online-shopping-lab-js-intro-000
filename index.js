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
  if(cart.length === 0){
      console.log("Your shopping cart is empty.");
  } else {
      var cartStr = "In your cart, you have ";
      for(var value in cart){
          if(value === cart[-1]){
            return cartStr += " "+ "and" + value + " " + "at" + cart[value]+".";
          } else{
            cartStr += + " " + value + " " + "at" + cart[value];
      }
      }
  }
  console.log(cartStr);
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
