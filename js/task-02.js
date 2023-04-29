const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')

const createList = ingredients.map(ingredient => {
 return (
  `<li class="item">${ingredient}</li>`
 )}).join("")


ul.insertAdjacentHTML("beforeend", createList)


