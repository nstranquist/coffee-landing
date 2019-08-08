// COFFEES DATA INSTANTIATION
const coffeeData = [  // {name, description, price}
  {
    name: 'Drip Coffee',
    description: 'A tried and true, high-caffeine beverage',
    price: '$12',
    src: 'drip-coffee-01.png'
  },
  {
    name: 'Espresso',
    description: 'The classic fair for an artistic coffee enthusaist',
    price: '$4.50',
    src: 'espresso.png'
  },
  {
    name: 'Cappuccino',
    description: 'The delicious beverage you\'ll probably try right before your first Espresso',
    price: '$6',
    src: 'cappuccino.png'
  },
  {
    name: 'Americano',
    description: 'There\'s always something for everyone, I guess',
    price: '$4.50',
    src: 'americano.png'
  },
  {
    name: 'Black Tea',
    description: 'The go-to beverage once you realize how painful kicking a coffee habit is',
    price: '$7.50',
    src: 'black-tea.png'
  },
  {
    name: 'Green Tea',
    description: 'Ah, finally! A healthy, delicious beverage with a little caffeine. Congrats, you\'ve reached caffeine maturity',
    price: '$7.50',
    src: 'green-tea.png'
  },
  {
    name: 'Kombucha',
    description: 'That mystically strange drink which is supposed to make you live longer, essentially',
    price: '$50',
    src: 'kombucha.png'
  }
];

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
coffees.setAttribute('onchange', 'updateCoffees();');
function updateCoffees() {
  const newCoffee = findCoffee(coffeeData, coffees.value); //coffeeData[coffees.value];
  console.log(newCoffee);
  coffeeNameDOM.textContent = newCoffee.name;
  coffeeDescriptionDOM.textContent = newCoffee.description;
  coffeePriceDOM.textContent = newCoffee.price;
  coffeeImageDOM.setAttribute('src', `images/${newCoffee.src}`);
  coffeeImageDOM.setAttribute('alt', newCoffee.src);
}
const findCoffee = function (myCoffees, name) {
  const nameReturned = myCoffees.find(function (coffee, index) {
    return coffee.name === name;
  });
  return nameReturned;
}

updateCoffees();

// ATTACH EVENTS
// open
toggleBtn.addEventListener('click', () => {
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
