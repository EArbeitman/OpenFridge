
// Variables for search results, search results are set to return 10 recipes
var searchResultsLabels = [];
var searchResultsImages = [];
var searchResultsUrls = [];



const mashapeKey = "bxXFwnl1pJmshzspDDYGy3lvzL6sp1mO26njsn6pzoWcDjvhGD"
const spoonFoodEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients="
const spoonFoodOptions = "&limitLicense=false&number=10&ranking=2";

function recipeSearch() {
	var fridge = ingredientsArray;
	for (i=0; i<fridge.length; i++){
		if (fridge[i].indexOf(" ") === -1){
			//console.log("No spaces in the ingredient name.");
		} else {
			var alteredWord = fridge[i].replace(" ", "+");
			fridge[i] = alteredWord;
		}	
		console.log("Fixed spaces in the ingredients array.");
		console.log(fridge);
	}

	$.ajax({
		url: spoonFoodEndPoint + fridge + spoonFoodOptions,
		method: "GET",
		headers: {
			"X-Mashape-Key": mashapeKey,
			"Accept": "application/json"
		}
	}).done(function (response){
		console.log("success, spoonacular api queried.");
		console.log(response);
		for (i=0; i<10; i++) {
			var recipeId = response[i].id;
			var recipeTitle = response[i].title;
			var recipeImage = response[i].image;
			searchResultsUrls.push("https://spoonacular.com/recipes/-" + recipeId);
			searchResultsLabels.push(recipeTitle);
			searchResultsImages.push(recipeImage);
			youtubeApiQuery(recipeTitle);
		}
	});
}
