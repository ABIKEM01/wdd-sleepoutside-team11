import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // get existing cart or start with empty array
  let cart = JSON.parse(localStorage.getItem("so-cart"));

  // ensure cart is always an array
  if (!Array.isArray(cart)) {
    cart = [];
  }

  // add product directly
  cart.push(product);

  // save back to localStorage
  setLocalStorage("so-cart", cart);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);