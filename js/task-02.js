const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
const liElements = [];

ingredients.forEach((element)=>{
  const liElement = document.createElement("li");
  liElement.textContent = element;
  liElement.classList.add("item");
  liElements.push(liElement)
})
ingredientsList.append(...liElements);