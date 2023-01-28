const form = document.querySelector('.js-food-form');
const foodContainer = document.querySelector('.js-food-container');

// https://www.themealdb.com/api/json/v1/1/search.php?s=Pie

console.log('JavaScript is running');

function callback(event) {
    event.preventDefault(); // first thing in the form
    // event.stopPropagation(); // in case of other events, read event bubbling
    alert('form got submitted');
}

form.addEventListener('submit', callback);