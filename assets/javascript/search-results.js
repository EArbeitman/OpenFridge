function populateResults (){
	console.log(searchResultsLabels);
	$("#resultsList").empty();
for (var i = 0; i < searchResultsLabels.length; i++) {
	var thumbnails = $('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 thumbnail"><img src="' + searchResultsImages[i] + '" alt="..." href="' + searchResultsUrls[i] + '" target="_blank" /><div class="wrapper"><button class="youtube btn-xs" data-Youtube="'+ i + '"><img src="assets/images/youtube.jpg" width="40vw" alt="..."/></button><div class="caption post-content"><a href="' + searchResultsUrls[i] + '" target="_blank"><p class="title">' + searchResultsLabels[i] + '</p></a></div></div></div>');

	$("#resultsList").append(thumbnails);
}
}

/*$( document ).ready(function() {
    console.log( "ready!" );

    recipeSearch();
    populateResults();
});*/


