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
