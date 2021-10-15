const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsToHtml = ingredients.map(ingredient => {

  const itemEl = document.createElement("li");
  itemEl.classList = "item";
  itemEl.textContent = ingredient;
  return itemEl;
  
})

const ingredientsEl = document.querySelector("#ingredients")

ingredientsEl.append(...ingredientsToHtml);

