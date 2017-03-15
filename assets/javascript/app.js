/* Global Variables */
var ingredientsArray = [];


var ingredient;
var isSelected;
$(document).on('click', '.ingredientBtn', function () {
	event.preventDefault();
	//var ingredient = $(this).attr("data-ingredient");
	ingredient = $(this).attr("value");
	isSelected = $(this).attr("data-selected");

	//check if ingredient is selected
	
	if (isSelected === "false") {
		$(this).attr("data-selected", "true");
		console.log("test");

		
		var myFridge;
		var listItem;
		var deleteButton;

		

		// updates['/users/' + userId + '/fridge/'] = ingredientsArray;

		// firebase.database().ref().update(updates);

		myFridge = $("#myFridge");
		// listItem = $("<h5>");
		// listItem.text(item);
		var x = ingredientsArray.indexOf(ingredient);
		if (x === -1) {
			ingredientsArray.push(ingredient);
			deleteButton = $("<button class='col-xs-12 col-sm-12 col-md-6 col-lg-4 btn btn-primary delete' value='" + ingredient +"'>").text(ingredient);
			// listItem.append(deleteButton);
			myFridge.append(deleteButton);
		}
	} else if ( isSelected === "true"){
		$(this).attr("data-selected", "false");
		isSelected = "false"
		if (x != -1){
    		ingredientsArray.splice(x,1);
    		var q = document.querySelectorAll(".delete[value='"+ingredient+"']");
    		q[0].remove();
    		console.log("remove");
		} 
    } else {
		console.log("error in the ingredient button function");
	}
	
});
/*
On click listener for adding item to fridge 
*/


/* 
Write ingredient to fridge
Fetch item from database and display to user
*/

/*
Using compiled list of ingredients, search for recipies against API
*/
		$("#submitRecipie").on('click', function(){

	//console.log(database);

	// var updates = {};

	// updates['/users/' + userId + '/fridge/'] = ingredientsArray;

	// firebase.database().ref().update(updates);

		});

//-----------------------------------------------------------------

$(document).on("click", "button.delete", function() {
	event.preventDefault();
	//console.log($(this));
	//console.log($(this).parent());
	var myChange = $(this).attr("value");
	$(this).remove();
	var myTemp = document.querySelectorAll("div.title[value='"+ myChange +"']");
	console.log(document.querySelectorAll("div.title[value='"+ myChange +"']"));
	$(myTemp[0]).attr("data-selected", "false");
    var x = ingredientsArray.indexOf(myChange)
    ingredientsArray.splice(x,1);
	
	console.log(myChange);
	//$(this).remove();
});
$(document).on("click", ".tSwitch", function() {
	event.preventDefault();
	// edamamApiQuery(ingredientsArray, dietOptionsIndex, healthOptionsIndex);
 //    populateResults();
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



