/* Global Variables */
var ingredientsArray = [];
var ingredient;
var isSelected;

var deleteButton;

$(document).on('click', '.ingredientBtn', function () {

	event.preventDefault();
	//var ingredient = $(this).attr("data-ingredient");
	ingredient = $(this).attr("value");
	isSelected = $(this).attr("data-selected");

	//check if ingredient is selected
	
	if (isSelected === "false") {
		$(this).attr("data-selected", "true");
		
		var myFridge;
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
			myFridge.append(deleteButton);
			fridgeList.push(ingredient);
		}
	} else if ( isSelected === "true"){
		$(this).attr("data-selected", "false");
		isSelected = "false"
		if (x != -1){
    		ingredientsArray.splice(x,1);
    		var q = document.querySelectorAll(".delete[value='"+ingredient+"']");
    		q[0].remove();
    		console.log("remove");
    		fridgeList.remove(ingredient);
		} 
    } else {
		console.log("error in the ingredient button function");
	}
	
});

/* 
 * on child_Added listener event 
 * seems to be causing page to reload when item is deselected from list
 */

// fridgeList.on('child_added', function(snapshot){

// 	deleteButton.attr('id', snapshot.key);

// });


// fridgeList.on('child_removed', snapshot =>{

// 	/* do something */
// });


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

    database.ref().child("users/"+userId).update({
			fridge: ingredientsArray
		});

	//ingredientKey = $(this).attr('id');
	
	console.log(myChange);
	//$(this).remove();
});
$(document).on("click", ".tSwitch", function() {
	event.preventDefault();

});







