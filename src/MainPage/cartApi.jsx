let cart = [];

export function getCart() {
  return cart;
}

export function addToCart(product) {
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

export function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
}

export function updateCart(productId, quantity) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity = quantity;
  }
}
