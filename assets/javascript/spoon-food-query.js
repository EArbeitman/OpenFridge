//$(document).ready(function (){



//--------------------------------------------------------------------------------------
// Variables Needed

// Variables for search results, search results are set to return 10 recipes
var searchResultsLabels = [];
var searchResultsImages = [];
var searchResultsUrls = [];

// Youtube Response Variable for Video Ids
var youtubeVideoIdArray = ["","","","","","","","","",""];

// Created Link and Embed results from the response
var youtubeLinkArray = ["","","","","","","","","",""];
var youtubeEmbedArray = ["","","","","","","","","",""];

//  Variables for the number of used and missed ingredients.
var usedIngredientCount = [];
var missedIngredientCount = [];

// The master array for all the info for each missing ingredient for each recipe.
//	the order is -> usedIngredients["First recipe"]["First ingredient"]["first ingredient name"]
// 			  or -> usedIngredients[0][0][0]
// The info collected for each ingredient is:
// index 0 -> name
// index 1 -> aisle
// index 2 -> amount 
// index 3 -> image (as a link)
var usedIngredients = [];
var missedIngredients = [];


// The endpoint and key for the spoonacular API
const mashapeKey = "bxXFwnl1pJmshzspDDYGy3lvzL6sp1mO26njsn6pzoWcDjvhGD";
const spoonFoodEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=true&ingredients=";
const spoonFoodOptions = "&limitLicense=false&number=100&ranking=2";

//==========================================================================================



//------------------------------------------------------------------------------------------
// Master recipeSearch function. Starts and processes all the API calls.

function recipeSearch() {
	//empty variable arrays
	searchResultsLabels = [];
	searchResultsImages = [];
	searchResultsUrls = [];

	// Set up an independent ingredient array
	var fridge = ingredientsArray;

	// Cycle through the fridge/ingredientsArray and remove any spaces from the ingredients names
	for (i=0; i<fridge.length; i++){
		if (fridge[i].indexOf(" ") === -1){
			//console.log("No spaces in the ingredient name.");
		} else {
			var alteredWord = fridge[i].replace(/ /g, "+");
			fridge[i] = alteredWord;
		}	
	}

	// Console log the progress
	console.log("Fixed spaces in the ingredients array.");
	console.log(fridge);

	// Now that the input is 'clean', start the ajax call for the recipes.
	$.ajax({
		url: spoonFoodEndPoint + fridge + spoonFoodOptions,
		method: "GET",
		headers: {
			"X-Mashape-Key": mashapeKey,
			"Accept": "application/json"
		}
	}).done(function (response){
		
		// When the search completes...
		console.log("success, spoonacular api queried.");
		console.log(response);

		// Get a random number from 0 - 90
		var randomNumber = Math.floor(Math.random() * 90);
		console.log(randomNumber);

		// Grab the first 10 results and add their id, title, and image urls to the variable arrays for them
		for (i=0; i<10; i++) {

			// Grab the info
			var recipeId = response[i + randomNumber].id;
			var recipeTitle = response[i +randomNumber].title;
			var recipeImage = response[i + randomNumber].image;
			var recipeNumOfUsedIngredients = response[i + randomNumber].usedIngredientCount;
			var recipeNumOfMissingIngredients = response[i + randomNumber].missedIngredientCount;

			// Master ingredient info arrays
			var usedIngredientsInfoArray = [];
			var missedIngredientsInfoArray = [];
			
			// Store the info
			searchResultsUrls.push("https://spoonacular.com/recipes/-" + recipeId);
			searchResultsLabels.push(recipeTitle);
			searchResultsImages.push(recipeImage);
			usedIngredientCount.push(recipeNumOfUsedIngredients);
			missedIngredientCount.push(recipeNumOfMissingIngredients);

			// Grab and store the info for each ingredient used
			for (j=0; j<response[i + randomNumber].usedIngredients.length; j++) {

				// array for temp storage
				var usedIngredientsDataArray = [];

				// Variables for the data
				var name = response[i + randomNumber].usedIngredients[j].name;
				var aisle = response[i + randomNumber].usedIngredients[j].aisle;
				var amount = response[i + randomNumber].usedIngredients[j].amount;
				var image = response[i + randomNumber].usedIngredients[j].image;

				// Store the info
				usedIngredientsDataArray.push(name);
				usedIngredientsDataArray.push(aisle);
				usedIngredientsDataArray.push(amount);
				usedIngredientsDataArray.push(image);

				// Push to the info array
				usedIngredientsInfoArray.push(usedIngredientsDataArray);
				// console.log("used ingredients data array ",usedIngredientsDataArray);
				// console.log("used ingredients info array ",usedIngredientsInfoArray);
			}

			// Grab and store the info for each ingredient missed
			for (j=0; j<response[i + randomNumber].missedIngredients.length; j++) {

				// array for temp storage
				var missedIngredientsDataArray = [];

				// Variables for the data
				var name = response[i + randomNumber].missedIngredients[j].name;
				var aisle = response[i + randomNumber].missedIngredients[j].aisle;
				var amount = response[i + randomNumber].missedIngredients[j].amount;
				var image = response[i + randomNumber].missedIngredients[j].image;

				// Store the info
				missedIngredientsDataArray.push(name);
				missedIngredientsDataArray.push(aisle);
				missedIngredientsDataArray.push(amount);
				missedIngredientsDataArray.push(image);

				// Push to the info array
				missedIngredientsInfoArray.push(missedIngredientsDataArray);
			}

			// Push to the master arrays for used and missing ingredients
			usedIngredients.push(usedIngredientsInfoArray); 
			missedIngredients.push(missedIngredientsInfoArray);

			
			// Start the youtube query while passing the index to avoid the call times from changing the order
			youtubeApiQuery(recipeTitle, i);
		}
		
		// Console log the progress.
		console.log("Recipe results added to the correct arrays. Starting youtube link creation.")
		
		// Call the function to display the results to the screen.
		populateResults ();
	});
}

//============================================================================================




//--------------------------------------------------------------------------------------------
// Youtube Api Call and link creator.


function youtubeApiQuery(searchTerm,i) {

	// Stores the index of the search term
	var index = i;

	// starts removing spaces and commas from the search term
	var termWithOutSpaces = searchTerm.replace(/ /g , "+");
	var termWithOutCommas = termWithOutSpaces.replace(/,/g , "");
	
	// starts the ajax call after the input has been 'cleaned'
	$.ajax({
		url : "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+termWithOutCommas+"&type=video&maxresults=2&key=AIzaSyCZbjOu9UHx3jXRWNOWpLcPs9cjzidFbig",
		method : "GET"
	}).done(function(response){

		//console log progress
		console.log(termWithOutCommas);
		console.log("ajax call finished");
		console.log(response);

		// Then add the video ID of the first response to the youtubeVideoIdArray
		var youtubeVideoId = response.items[0].id.videoId;
		youtubeVideoIdArray.splice(index,1,youtubeVideoId);

		// create and add the youtube link for the result to youtubeLinkArray
		var youtubeLink = "https://www.youtube.com/watch?v=" + youtubeVideoId;
		youtubeLinkArray.splice(index,1,youtubeLink);

		//create and add the youtube embed code block to the youtubeEmbedArray
		var youtubeEmbed = '<iframe width="854" height="480" src="https://www.youtube.com/embed/'+youtubeVideoId+'" frameborder="0" allowfullscreen></iframe>'
		youtubeEmbedArray.splice(index,1,youtubeEmbed);

	});
};

//===========================================================================================








// End of Document.ready
//});