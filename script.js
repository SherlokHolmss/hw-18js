
const categories = document.querySelectorAll('#categories .item');
console.log(`У списку ${categories.length} категорії.`);
categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Категорія: ${title}\nКількість елементів: ${itemsCount}`);
});



const ingredients = ['Картопля', 'Гриби', 'Часник', 'Помідори', 'Зелень', 'Приправи'];
const ingredientsList = document.getElementById('ingredients');
const ingredientsItems = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});
ingredientsList.append(...ingredientsItems);



const images = [
  { url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'White and Black Long Fur Cat' },
  { url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Orange and White Koi Fish Near Yellow Koi Fish' },
  { url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Group of Horses Running' },
];
const gallery = document.getElementById('gallery');
const galleryMarkup = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);



let counterValue = 0;
const valueSpan = document.getElementById('value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});
