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

// The endpoint and key for the spoonacular API
const mashapeKey = "bxXFwnl1pJmshzspDDYGy3lvzL6sp1mO26njsn6pzoWcDjvhGD"
const spoonFoodEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients="
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

		// Grab the first 10 results and add their id, title, and image urls to the variable arrays for them
		for (i=0; i<10; i++) {
			var recipeId = response[i + randomNumber].id;
			var recipeTitle = response[i +randomNumber].title;
			var recipeImage = response[i + randomNumber].image;
			searchResultsUrls.push("https://spoonacular.com/recipes/-" + recipeId);
			searchResultsLabels.push(recipeTitle);
			searchResultsImages.push(recipeImage);
			
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