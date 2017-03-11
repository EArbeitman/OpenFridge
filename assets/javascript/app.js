

$('#ingrSelect').on('change', addToFridge);


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



