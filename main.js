// Import coffeeData from coffeeData.js
//import coffeeData from './coffeeData.js';
import { coffeeData } from './lib/js/coffeeData.js';

// GRAB DOM OBJECTS
// layout elements
const toggleBtn = document.querySelector('.menu-toggle');
const openIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-times');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
// coffee elements
const coffees = document.getElementById('coffees');
const coffeeNameDOM = document.getElementById('coffee-name');
const coffeeDescriptionDOM = document.getElementById('coffee-description');
const coffeePriceDOM = document.getElementById('coffee-price');
const coffeeImageDOM = document.getElementById('coffee-image');

// updateCoffees on input change
function updateCoffees() {
  const newCoffee = findCoffee(coffeeData, coffees.value); //coffeeData[coffees.value];
  coffeeNameDOM.textContent = newCoffee.name;
  coffeeDescriptionDOM.textContent = newCoffee.description;
  coffeePriceDOM.textContent = newCoffee.price;
  coffeeImageDOM.setAttribute('src', `lib/images/${newCoffee.src}`);
  coffeeImageDOM.setAttribute('alt', newCoffee.src);
}
const findCoffee = function (myCoffees, name) {
  const nameReturned = myCoffees.find(function (coffee, index) {
    return coffee.name === name;
  });
  return nameReturned;
}
updateCoffees();
//coffees.setAttribute('onchange', 'updateCoffees()');

// ATTACH EVENTS
// strange fix i had to implement, webpack didn't recognize 'onchange' events
coffees.addEventListener('click', () => {
  updateCoffees();
})
// open
toggleBtn.addEventListener('click', (e) => {
  console.log(e.target);
  toggleBtn.classList.add('active');
  navbar.classList.add('nav-open');
  overlay.classList.add('menu-open');
});
openIcon.addEventListener('click', () => {
  toggleBtn.classList.add('active');
  navbar.classList.add('nav-open');
  overlay.classList.add('menu-open');
});
// close
closeIcon.addEventListener('click', () => {
  toggleBtn.classList.remove('active');
  navbar.classList.remove('nav-open');
  overlay.classList.remove('menu-open');
});
overlay.addEventListener('click', () => {
  toggleBtn.classList.remove('active');
  navbar.classList.remove('nav-open');
  overlay.classList.remove('menu-open');
});
