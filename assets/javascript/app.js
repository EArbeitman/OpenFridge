/* Global Variables */
var ingredientsArray = [];


$(document).on('click', '.ingredientBtn', function () {
	
	//var ingredient = $(this).attr("data-ingredient");
	var ingredient = $(this).attr("value");
	var isSelected = $(this).attr("data-selected");

	// console.log(ingredient);
	// console.log(isSelected);
	//console.log($(this).attr("value"));

	//check if ingredient is selected
	if ( isSelected === "false") {
		$(this).attr("data-selected", "true");
	} else  if ( isSelected === "true") {
		$(this).attr("data-selected", "false");
	} else {
		console.log("error in the ingredient button function");
	}

});

$(document).on('click', '.ingredientBtn', addToFridge);

function addToFridge(){

	var item;
	var myFridge;
	var listItem;
	var deleteButton;

	item = $(this).attr("value");

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

$("#submitRecipie").on('click', function(){

	console.log(database);

	var updates = {};

	updates['/users/' + userId + '/fridge/'] = ingredientsArray;

	firebase.database().ref().update(updates);

});



$(document).on("click", "button.delete", function() {

	$(this).parent().remove();
});



