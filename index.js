var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randomPrice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(item) {
var price = randomPrice(1, 100)
var oitem = {itemName : item, itemPrice: price}
 cart.push(oitem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var list = []
if (cart[0] === undefined){
  return 'Your shopping cart is empty.'
}
else{
  for (var i=0; i < cart.length  ; i++){
  list.push(`${cart[i[itemName]]} at '$'${cart[i[itemPrice]]}`)
  }
  return `In your cart, you have ${list}.`
  }
}

function total() {
  var totalCost
  for (i = 0; i < cart.length; i++){
    totalCost += cart[i[itemPrice]]
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
