<<<<<<< HEAD
/* eslint-disable quotes */
import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);
product.init();
=======
import { setLocalStorage, getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');
const productId = getParam('product');

function addProductToCart(item) {
  setLocalStorage('so-cart', item);
}

// add to cart button event handler
async function addToCartHandler() {
  const selectedProduct = await dataSource.findProductById(productId);
  addProductToCart(selectedProduct);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
>>>>>>> 8d414db417e8602aac86c5f74b66b8c9e1d6739b
