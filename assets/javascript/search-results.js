function populateResults (){
	for (var i = 0; i < searchResultsLabels.length; i++) {
		var thumbnails = $('<a href="' + searchResultsUrls[i] + 
			'" target="_blank"><img class="swiper-slide" src="' + 
			searchResultsImages[i] + '" alt="..."><img class="youtube btn-xs" data-Youtube="'+ 
			i + '" src="assets/images/youtube.jpg" alt="..."><p class="title">' + 
			searchResultsLabels[i] + '</p></a>');
		
		$("#resultsList"+ i).html(thumbnails);

	}
}
