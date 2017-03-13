$(document).ready(function (){




//https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients


//'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1' \


// $.ajax({
//     url: 'YourRestEndPoint',
//     headers: {
//         'Authorization':'Basic xxxxxxxxxxxxx',
//         'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
//         'Content-Type':'application/json'
//     },
//     method: 'POST',
//     dataType: 'json',
//     data: YourData,
//     success: function(data){
//       console.log('succes: '+data);
//     }
//   });


// Gets the Id number and the images for the recipes
$.ajax({
	url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1",
	method: "GET",
	headers: {
		"X-Mashape-Key": "bxXFwnl1pJmshzspDDYGy3lvzL6sp1mO26njsn6pzoWcDjvhGD",
		"Accept": "application/json"
	}
}).done(function (response){
	console.log("success", response);
});


// Get the recipe Url
$.ajax({
	url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/479101/information?includeNutrition=false",
	method: "GET",
	headers: {
		"X-Mashape-Key": "bxXFwnl1pJmshzspDDYGy3lvzL6sp1mO26njsn6pzoWcDjvhGD",
		"Accept": "application/json"
	}
}).done(function (response){
	console.log("success", JSON.stringify(response));
});




});