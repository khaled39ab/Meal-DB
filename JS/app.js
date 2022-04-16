const loadMeal = () =>{
    const inputField = document.getElementById("input-field")
    const name = inputField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    inputField.value ="";
    fetch(url)
    .then(res => res.json())
    .then (data => displayMeals(data.meals))
}

document.getElementById("button-search").addEventListener("click", function(){
    loadMeal()
});

const displayMeals = meals =>{
    meals.forEach(meal =>{
       const searchResult = document.getElementById("search-result")
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
}