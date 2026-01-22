<<<<<<< HEAD
/* eslint-disable quotes */
import { getLocalStorage, setLocalStorage } from "./utils.mjs";
=======
import { getLocalStorage, setLocalStorage } from './utils.mjs';
>>>>>>> 8d414db417e8602aac86c5f74b66b8c9e1d6739b

export default class ProductDetails {

  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
   
    this.product = await this.dataSource.findProductById(this.productId);

    this.renderProductDetails();
    
    document
<<<<<<< HEAD
      .getElementById("add-to-cart")
      .addEventListener("click", this.addProductToCart.bind(this));
=======
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
>>>>>>> 8d414db417e8602aac86c5f74b66b8c9e1d6739b
  }

  addProductToCart() {
    const cartItems = getLocalStorage('so-cart') || [];
    cartItems.push(this.product);
    setLocalStorage('so-cart', cartItems);
  }

  renderProductDetails() {
    productDetailsTemplate(this.product);
  }
}

function productDetailsTemplate(product) {
<<<<<<< HEAD
  document.querySelector("h2").textContent = product.Category.charAt(0).toUpperCase() + product.Category.slice(1);
  document.querySelector("#p-brand").textContent = product.Brand.Name;
  document.querySelector("#p-name").textContent = product.NameWithoutBrand;

  const productImage = document.querySelector("#p-image");
  productImage.src = product.Images.PrimaryExtraLarge;
=======
  document.querySelector('h2').textContent = product.Brand.Name;
  document.querySelector('h3').textContent = product.NameWithoutBrand;

  const productImage = document.getElementById('productImage');
  productImage.src = product.Image;
>>>>>>> 8d414db417e8602aac86c5f74b66b8c9e1d6739b
  productImage.alt = product.NameWithoutBrand;
  const euroPrice = new Intl.NumberFormat('de-DE',
    {
      style: 'currency', currency: 'EUR',
    }).format(Number(product.FinalPrice) * 0.85);
  document.querySelector("#p-price").textContent = `${euroPrice}`;
  document.querySelector("#p-color").textContent = product.Colors[0].ColorName;
  document.querySelector("#p-description").innerHTML = product.DescriptionHtmlSimple;

<<<<<<< HEAD
  document.querySelector("#add-to-cart").dataset.id = product.Id;
=======
  document.getElementById('productPrice').textContent = product.FinalPrice;
  document.getElementById('productColor').textContent =
    product.Colors[0].ColorName;
  document.getElementById('productDesc').innerHTML =
    product.DescriptionHtmlSimple;

  document.getElementById('addToCart').dataset.id = product.Id;
>>>>>>> 8d414db417e8602aac86c5f74b66b8c9e1d6739b
}

