// cartApi.js
let cart = [];

export function getCart() {
  return cart;
}

export function addToCart(shoe) {
  const existingShoe = cart.find((item) => item.id === shoe.id);
  if (existingShoe) {
    existingShoe.quantity += 1;
  } else {
    cart.push({ ...shoe, quantity: 1 });
  }
}

export function removeFromCart(shoeId) {
  cart = cart.filter((item) => item.id !== shoeId);
}

export function updateCart(shoeId, quantity) {
  const shoe = cart.find((item) => item.id === shoeId);
  if (shoe) {
    shoe.quantity = quantity;
  }
}
