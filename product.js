export const products = [
  {
    id: 1,
    name: 'Earrings',
    image: '1.jpg',
    price: 45
  },
  {
    id: 2,
    name: 'Earrings',
    image: '2.jpg',
    price: 50
  },
  {
    id: 3,
    name: 'Earrings',
    image: '3.jpg',
    price: 60
  },
  {
    id: 4,
    name: 'Earrings',
    image: '4.jpg',
    price: 80
  },
  {
    id: 5,
    name: 'Earrings',
    image: '5.jpg',
    price: 50
  },
  {
    id: 6,
    name: 'Earrings',
    image: '6.jpg',
    price: 65
  }
];

export function initApp() {
  let list = document.querySelector('.list');

  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <img src="image/${value.image}">
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}</div>
      <button class="addToCartButton">Add To Cart</button>`;
    list.appendChild(newDiv);
    let addToCartButton = newDiv.querySelector('.addToCartButton');
    addToCartButton.addEventListener('click', () => {
      addToCart(key);
    });
  });
}

