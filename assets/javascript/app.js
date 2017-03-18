/* Global Variables */
var ingredientsArray = [];
var ingredient;
var isSelected;
var deleteButton;

$(document).on('click', '.ingredientBtn', function () {

	event.preventDefault();
	ingredient = $(this).attr("value");
	isSelected = $(this).attr("data-selected");

	
	if (isSelected === "false") {
		$(this).attr("data-selected", "true");
		
		var myFridge;
		var deleteButton;

		myFridge = $("#myFridge");
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
    } else 
		console.log("error in the ingredient button function");
	
	
});

/*
 * On click listener to remove items from the fridge list
 * When an item is removed from fridge list, update firebase with running ingredients list
 */
$(document).on("click", "button.delete", function() {
	event.preventDefault();

	var itemToRemove;
	var itemIndex;
	var myTemp;

	itemToRemove = $(this).attr("value");
	$(this).remove();
	myTemp = document.querySelectorAll("div.title[value='"+ itemToRemove +"']");
	$(myTemp[0]).attr("data-selected", "false");
    itemIndex = ingredientsArray.indexOf(itemToRemove)
    ingredientsArray.splice(itemIndex,1);

    //Update database with ingredientsArray
    database.ref().child("users/"+userId).update({
			fridge: ingredientsArray
		});
	

});
$(document).on("click", ".tSwitch", function() {
	event.preventDefault();

});







