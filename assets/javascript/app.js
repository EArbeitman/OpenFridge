


$('.ingredientBtn').on('click', function () {
	
	console.log("Clicked");
	var ingredient = $(this).attr("data-ingredient");
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

function addToFridge(){
	//alert("test");
	//console.log($(this).val());

	var selected = $("#computercheck").prop('checked');

	console.log($(this));

	var item = $(this).val();

	var myFridge = $("#myFridge");
	var listItem = $("<h5>");
	listItem.text(item);

	var deleteButton = $("<button class='delete'>").text("x");
	listItem.prepend(deleteButton);

	console.log(listItem);

	myFridge.append(listItem);

}

$(document).on("click", "button.delete", function() {

	$(this).parent().remove();
});



