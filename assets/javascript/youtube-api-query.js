


// Response Variable Array
var youtubeVideoIdArray = [];

// Created Link and Embed results from the response
var youtubeLinkArray = [];
var youtubeEmbedArray = [];



function youtubeApiQuery(searchTerm) {
	$.ajax({
		url : "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchTerm+"&type=video&key=AIzaSyCZbjOu9UHx3jXRWNOWpLcPs9cjzidFbig",
		method : "GET"
	}).done(function(response){
		console.log(response);
		var youtubeVideoId = response.id.videoId;
		youtubeVideoIdArray.push(youtubeVideoId);
	});
};


function createYoutubeLinkArray(){
	for (i=0; i<10; i++){
		var youtubeLink = "https://www.youtube.com/watch?v=" + youtubeVideoIdArray[i];
		youtubeLinkArray.push(youtubeLink);
	};
};


function createYoutubeEmbedArray(){
	for (i=0; i<10; i++){
		var youtubeEmbed = '<iframe width="854" height="480" src="https://www.youtube.com/embed/'+youtubeVideoIdArray[i]+'" frameborder="0" allowfullscreen></iframe>'
		youtubeEmbedArray.push(youtubeEmbed);
	};
};