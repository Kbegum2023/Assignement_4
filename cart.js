
import { products, initApp } from './product.js';


let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.qty');
let clearCartButton = document.querySelector('.clearCart');

 let listCards = [];


  function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  
  listCards.forEach((value, key) => {
    totalPrice += value.price;
    count += value.quantity;
    
    if (value !== null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
        <div><img src="image/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}</div>
        <div>
          <button class="decrease-quantity">-</button>
          <div class="count">${value.quantity}</div>
          <button class="increase-quantity">+</button>
        </div>`;
      
      listCard.appendChild(newDiv);
      const decreaseButton = newDiv.querySelector('.decrease-quantity');
    const increaseButton = newDiv.querySelector('.increase-quantity');

    decreaseButton.addEventListener('click', () => {
      changeQuantity(key, value.quantity - 1);
    });

    increaseButton.addEventListener('click', () => {
      changeQuantity(key, value.quantity + 1);
    });
    }
  });
  
  total.innerText = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  quantity.innerText = count;
}



 function addToCart(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  
  reloadCard();
}

window.addToCart = addToCart;



function changeQuantity(key, quantity) {
  if (quantity === 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  
  reloadCard();
}


function clearCart() {
  listCards = [];
  reloadCard();
}


clearCartButton.addEventListener('click', clearCart);


export {  clearCart, reloadCard, addToCart, changeQuantity };
