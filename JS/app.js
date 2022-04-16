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

