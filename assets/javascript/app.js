/* Global Variables */
var ingredientsArray = [];


$(document).on('click', '.ingredientBtn', function () {
	
	//var ingredient = $(this).attr("data-ingredient");
	var ingredient = $(this).attr("value");
	var isSelected = $(this).attr("data-selected");

	//check if ingredient is selected
	if ( isSelected === "false") {
		$(this).attr("data-selected", "true");
	} else  if ( isSelected === "true") {
		$(this).attr("data-selected", "false");
	} else {
		console.log("error in the ingredient button function");
	}

});

/*
On click listener for adding item to fridge 
*/
$(document).on('click', '.ingredientBtn', addToFridge);

/* 
Write ingredient to fridge
Fetch item from database and display to user
*/
function addToFridge(){

	console.log("test");

	var item;
	var myFridge;
	var listItem;
	var deleteButton;

	item = $(this).attr("value");

	// updates['/users/' + userId + '/fridge/'] = ingredientsArray;

	// firebase.database().ref().update(updates);

	myFridge = $("#myFridge");
	listItem = $("<h5>");
	listItem.text(item);

	if (ingredientsArray.indexOf(item) === -1) {
		ingredientsArray.push(item);
		deleteButton = $("<button class='delete'>").text("x");
		listItem.prepend(deleteButton);
		myFridge.append(listItem);
	}
}

/*
Using compiled list of ingredients, search for recipies against API
*/
$("#submitRecipie").on('click', function(){

	//console.log(database);

	// var updates = {};

	// updates['/users/' + userId + '/fridge/'] = ingredientsArray;

	// firebase.database().ref().update(updates);

});

$(document).on("click", "button.delete", function() {

	//console.log($(this));
	//console.log($(this).parent());
	$(this).parent().remove();
});


// wait for page to load before querying database

//$(document).ready(loadMyFridge);

function loadMyFridge(){

var query = firebase.database().ref("/users/" + userId + "/fridge/").orderByKey();
	query.once("value")
		.then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {

	var key = childSnapshot.key;

	var childData = childSnapshot.val();

		//console.log(key);
		//console.log(childData);

		});
	});

}



