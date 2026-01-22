<<<<<<< HEAD
/* eslint-disable quotes */
import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
=======
import { loadHeaderFooter } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
>>>>>>> 8d414db417e8602aac86c5f74b66b8c9e1d6739b

loadHeaderFooter();

const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
const productList = new ProductList('Tents', dataSource, element);

productList.init();