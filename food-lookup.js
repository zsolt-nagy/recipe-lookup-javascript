const form = document.querySelector('.js-food-form');
const inputField = document.querySelector('.js-food-input');
const foodContainer = document.querySelector('.js-food-container');

// https://www.themealdb.com/api/json/v1/1/search.php?s=Pie

console.log('JavaScript is running');

function callback(event) {
    event.preventDefault(); // first thing in the form
    // event.stopPropagation(); // in case of other events, read event bubbling
    const searchExpression = encodeURIComponent(inputField.value).replaceAll('%20', ' ');
    foodContainer.innerHTML = `Form got submitted with content ${searchExpression}`;
    inputField.value = '';
}

form.addEventListener('submit', callback);