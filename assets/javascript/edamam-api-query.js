// $(document).ready( function () {




// API requirements
const edamamEndPoint = "https://api.edamam.com/search?";
const edamamAppId = "&app_id=1681d7cb";
const edamamAppKey = "&app_key=ff1bf86dcd5397a0fae4853fae9186f2";


// Optional search parameter lists
const dietOptions = ["none", "balanced", "high-protein", "low-fat", "low-carb"];
const healthOptions = ["none", "vegan", "vegetarian", "alcohol-free", "peanut-free", "tree-nut-free", ]


// Variables to configure search
var ingredientsArray = ["chicken"];
var dietOptionsIndex = 0;
var healthOptionsIndex = 0;


// Variables for search results, search results are set to return 10 recipes
var searchResultsLabels = [];
var searchResultsImages = [];
var searchResultsUrls = [];


// Creates a url from the search parameters
function compileUrl(ingredientsArray, dietOptionsIndex, healthOptionsIndex ) {
	var ingredientString = "q=";
	for (i=0; i<ingredientsArray.length; i++){
		ingredientString += (ingredientsArray[i] + "+");
	};
	if (dietOptionsIndex === 0) {
		var dietOptionsString = "";
	} else {
		var dietOptionsString = ("&diet=" + dietOptions[dietOptionsIndex]);
	}
	if (healthOptionsIndex === 0) {
		var healthOptionsString = "";
	} else {
		var healthOptionsString = ("&health=" + healthOptions[healthOptionsIndex]);
	}
	return edamamEndPoint + ingredientString + edamamAppId + edamamAppKey + dietOptionsString + healthOptionsString
};



// Query the API and stores the first 10 result's labels, images and links 
function edamamApiQuery(ingredientsArray, dietOptionsIndex, healthOptionsIndex){

	$.ajax({
		url: compileUrl(ingredientsArray, dietOptionsIndex, healthOptionsIndex),
		method: "GET"
	}).done( function (response) {
		searchResultsLabels = [];
		searchResultsImages = [];
		searchResultsUrls = [];
		for (i=0; i<10; i++) {
			searchResultsLabels.push(response.hits[i].recipe.label);
			searchResultsImages.push(response.hits[i].recipe.image);
			searchResultsUrls.push(response.hits[i].recipe.url);
		};
	});

};




// });