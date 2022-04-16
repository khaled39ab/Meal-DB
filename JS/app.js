const loadMeal = () =>{
    const url = `www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then (data => console.log(data))
}