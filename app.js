
import {clearCart, addToCart, reloadCard, changeQuantity } from './cart.js';
import { initApp } from './product.js';

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body');
const clearCartButton = document.querySelector('.clearCart');


openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

clearCartButton.addEventListener('click', () => {
  reloadCard();
});




initApp();
