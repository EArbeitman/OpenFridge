/* Global Variables */

var ingredientsArray = [];
// var databaseRef = database.ref().child('/users/' + userId + "/");
// var fridgeList = databaseRef.child('fridge');
// var databaseRef;
// var fridgeList;

var ingredient;
var isSelected;

var deleteButton;

$(document).on('click', '.ingredientBtn', function () {

	// databaseRef = database.ref().child('/users/' + userId + "/");
	// fridgeList = databaseRef.child('fridge');

	event.preventDefault();

	ingredient = $(this).attr("value");
	isSelected = $(this).attr("data-selected");

	//check if ingredient is selected
	
	if (isSelected === "false") {
		$(this).attr("data-selected", "true");
		console.log(ingredient + '' + 'was added to list');

		var myFridge;
		//var deleteButton;

		myFridge = $("#myFridge");

		var x = ingredientsArray.indexOf(ingredient);
		if (x === -1) {
			ingredientsArray.push(ingredient);
			deleteButton = $("<button class='col-xs-12 col-sm-12 col-md-6 col-lg-4 btn btn-primary delete' value='" + ingredient +"'>").text(ingredient);
			myFridge.append(deleteButton);

		}
	} else if ( isSelected === "true"){
		$(this).attr("data-selected", "false");
		isSelected = "false"
		if (x != -1){
    		ingredientsArray.splice(x,1);
    		var q = document.querySelectorAll(".delete[value='"+ingredient+"']");
    		q[0].remove();
    		fridgeList.remove(ingredient);
    		//console.log("remove");
		} 
    } else 
		console.log("error in the ingredient button function");


	fridgeList.push(ingredient);

	
});


/* on child_Added listener event */
fridgeList.on('child_added', function(snapshot){

	deleteButton.attr('id', snapshot.key);

});


/* 
Write ingredient to fridge
Fetch item from database and display to user
*/

/*
Using compiled list of ingredients, search for recipies against API
*/

//-----------------------------------------------------------------

$(document).on("click", "button.delete", function() {
	event.preventDefault();
	var myChange = $(this).attr("value");
	$(this).remove();
	var myTemp = document.querySelectorAll("div.title[value='"+ myChange +"']");
	console.log(document.querySelectorAll("div.title[value='"+ myChange +"']"));
	$(myTemp[0]).attr("data-selected", "false");
    var x = ingredientsArray.indexOf(myChange)
    ingredientsArray.splice(x,1);
	
	console.log(myChange);

	var ingredientKey = $(this).attr('id');
	console.log(ingredientKey);

	databaseRef = database.ref().child('/users/' + userId + "/");
	fridgeList = databaseRef.child('fridge');

	fridgeList.child(ingredientKey).remove();




});



$(document).on("click", ".tSwitch", function() {
	event.preventDefault();
	// edamamApiQuery(ingredientsArray, dietOptionsIndex, healthOptionsIndex);
 //    populateResults();
});


function loadMyFridge(){

// var query = firebase.database().ref("/users/" + userId + "/fridge/").orderByKey();
// 	query.once("value")
// 		.then(function(snapshot) {
// 			snapshot.forEach(function(childSnapshot) {

// 	var key = childSnapshot.key;

// 	var childData = childSnapshot.val();

// 	//console.log(key);
// 	//console.log(childData);

// 		});
// 	});

}



