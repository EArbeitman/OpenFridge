/* Global Variables */

var ingredientsArray = [];
// var databaseRef = database.ref().child('/users/' + userId + "/");
// var fridgeList = databaseRef.child('fridge');
// var databaseRef;
// var fridgeList;

var ingredient;
var isSelected;

var deleteButton; // moved delete button to global scope

$(document).on('click', '.ingredientBtn', function () {

	// databaseRef = database.ref().child('/users/' + userId + "/");
	// fridgeList = databaseRef.child('fridge');

	fridgeList.push(ingredient);

	event.preventDefault();

	ingredient = $(this).attr("value");
	isSelected = $(this).attr("data-selected");

	//check if ingredient is selected
	
	if (isSelected === "false") {
		$(this).attr("data-selected", "true");
		console.log(ingredient + '' + 'was added to list');

		var myFridge;

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
		} 
    } else 
		console.log("error in the ingredient button function");


	// fridgeList.push(ingredient);

	
});


/* 
 * on child_Added listener event 
 * seems to be causing page to reload when item is deselected from list
 */

fridgeList.on('child_added', function(snapshot){

	deleteButton.attr('id', snapshot.key);

});


fridgeList.on('child_removed', snapshot =>{

	/* do something */
});


$(document).on("click", "button.delete", function() {

	var myChange;
	var myTemp;
	var ingredientKey;
	var x;

	event.preventDefault();

	myChange = $(this).attr("value");
	$(this).remove(); 
	myTemp = document.querySelectorAll("div.title[value='"+ myChange +"']");
	$(myTemp[0]).attr("data-selected", "false");
    x = ingredientsArray.indexOf(myChange)
    ingredientsArray.splice(x,1);

	ingredientKey = $(this).attr('id');

	// databaseRef = database.ref().child('/users/' + userId + "/");
	// fridgeList = databaseRef.child('fridge');

	// fridgeList.child(ingredientKey).remove();

});


$(document).on("click", ".tSwitch", function() {
	event.preventDefault();
});



