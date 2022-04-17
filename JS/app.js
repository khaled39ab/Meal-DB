const errorSec = document.getElementById("error-sec");
const searchResult = document.getElementById("search-result");

// load meal data 
const loadMeal = () => {
    const inputField = document.getElementById("input-field")
    const searchText = inputField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    inputField.value = "";

    if (searchText == '') {

    } 
    else {
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))
            .catch(err => errorMessage());
    }
};

// search button event handler
document.getElementById("button-search").addEventListener("click", function () {
    loadMeal();
    errorSec.style.display = 'none';
    searchResult.innerHTML = "";
});

// error handler
const errorMessage = () => {
    errorSec.style.display = 'block';
};

// display meal items 
const displayMeals = meals => {
    meals.forEach(meal => {
        const div = document.createElement("div");
        div.classList.add("col")
        div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
       `
        searchResult.appendChild(div)
    });
};

