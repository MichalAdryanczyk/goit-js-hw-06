const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((element)=>{
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  ingredientsList.append(li);
})