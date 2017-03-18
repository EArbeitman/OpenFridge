$(document).ready(function (){






const spoonTriviaEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/trivia/random";
const spoonJokeEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random"
const mashapeKey = "bxXFwnl1pJmshzspDDYGy3lvzL6sp1mO26njsn6pzoWcDjvhGD";







// Gets a random food related joke or trivia quote.
function getSpoonQuote(){
	var randomNumber = Math.floor(Math.random()*2);
	var jokeOrTrivia
	if (randomNumber === 0){
		jokeOrTrivia = spoonJokeEndPoint;
	} else {
		jokeOrTrivia = spoonTriviaEndPoint;
	}
	$.ajax({
		url: jokeOrTrivia,
		method: "GET",
		headers: {
			"X-Mashape-Key": mashapeKey,
			"Accept": "application/json"
		}
	}).done(function (response){
		console.log("success, spoonacular api queried.");
		var text = response.text;
		console.log("text ", text);
	});
};





});