var dairyArray = ["butter", "eggs", "milk", "parmesan", "cheddar", "cream", "sour cream", "cream cheese", "mozzarella", "american cheese", "yogurt", "evaporated milk", "condensed milk", "whipped cream", "half and half", "monterey jack", "feta", "cottage cheese", "ice cream", "goat cheese", "frosting", "swiss cheese", "buttermilk", "velvetta", "ricotta", "powdered milk", "blue cheese", "provolone", "colby cheese", "gouda", "pepper jack", "italian cheese", "soft cheese", "romano", "brie", "custard"];
var meatArray = ["chicken breast", "ground beef", "bacon", "sausage", "cooked chicken", "ham", "veal", "beef steak", "hot dog", "port chops", "chicken thighs", "ground turkey", "pork", "turkey", "pepperoni", "whole chicken", "chicken leg", "ground pork", "chicken wings", "chorizo", "polish sausage", "salami", "pork shoulder", "beef roast", "bratwurst", "prosciutto", "chicken roast", "bologna", "corned beef", "lamb chops", "ground lamb", "beef ribs", "duck", "leg of lamb", "chicken giblets", "beef shank", "pork belly", "cornish hen", "lamb shoulder", "lamb shank"];
var vegetablesArray = ["garlic", "onion", "olive", "tomato", "potato", "salad greens", "carrot", "basil", "parsley", "rosemary", "bell pepper", "chilli pepper", "corn", "ginger", "mushroom", "broccoli", "spinach", "green beans", "celery", "red onions", "cilantro", "cucumber", "pickle", "dill", "avocado", "sweet potato", "zucchini", "shallot", "mixed vegetables", "cabbage", "asparagus", "cauliflower", "mint", "pumpkin", "kale", "frozen vegetables", "scallions", "squash", "sun dried tomato", "horseradish", "sweet corn", "beet"];
var fruitArray = ["lemon", "banana", "apple", "coconut", "mango", "lime", "orange", "pineapple", "strawberries", "raisin", "blueberries", "grapefruit", "grape", "prunes", "nectarines", "fig", "peach", "cranberries", "raspberry", "pear", "cherry", "apricot", "blackberry", "berries", "date", "watermelon", "kiwi", "craisins", "mandarin", "cantaloupe", "plum", "papaga", "pomegranate", "apple butter", "clementine", "tangarine", "plantains", "passion fruit", "persimmons", "quince", "lychee", "tangelos", "star fruit", "guava"];
var spicesArray = ["red pepper flake", "cinnamon", "chive", "vanilla", "garlic powder", "oregano", "paprika", "cayenne", "chilli powder", "cumin", "italian seasoning", "thyme", "peppercorn", "nutmeg", "onion powder", "curry powder", "clove", "bay leaf", "taco seasoning", "sage", "ground nutmeg", "allspice", "turmeric", "ground coriander", "steak seasoning", "herbs", "celery salt", "vanilla", "tarragon", "mustard seed", "saffron"];
var fishArray = ["canned tuna", "salmon", "fish fillets", "tilapia", "haddock", "grouper", "cod", "flounder", "anchovies", "tuna steak", "rockfish", "sardines", "smoked salmon", "monkfish", "canned salmon", "whitefish", "halibut", "trout", "mahi mahi", "catfish", "sea bass", "mackerel", "swordfish", "sole", "red snapper", "pollock", "herring", "perch", "caviar", "pike", "bluefish", "lemon sole", "eel", "carp", "cuttlefish"];
var bakingArray = ["wheat germ", "flour", "rice", "pasta", "bread", "baking powder", "bread flour", "baking soda", "bread crumbs", "cornstarch", "semolina", "noodle", "rolled oats", "yeast", "craker", "quinoa", "pancake mix", "flour tortillas", "cornmeal", "chips", "saltines", "brown rice", "popcorn", "self rising flour", "macaroni cheese mix", "corn tortillas", "stuffing mix", "biscuits", "couscous", "pie crust", "pita", "bisquick", "cereal", "angel hair", "croutons", "lasangne", "ramen", "baguette", "pizza dough", "barley", "puff pastry", "cake mix", "bagel", "pretzel", "cream of wheat", "multigrain break", "crescent roll dough", "perogi", "hot dog bun", "wheat", "ravioli", "muffin mix", "gnocci", "bread dough", "potato flakes", "rye", "croissants", "matzo meal", "shortcrust pastry", "ciabatta", "breadsticks", "angelfood", "risotto"];
var oilArray = ["vegetable oil", "olive oil", "peanut oil", "coconut oil", "cooking spray", "shortening", "lard", "almond oil", "grape seed oil"];
var seafoodArray = ["shrimp", "crawfish", "crab", "scallop", "prawns", "clam", "lobster", "octopus", "calamari", "squid", "oyster", "mussel"];
var sweetnerArray = ["sugar", "honey", "confectionary sugar", "maple sugar", "syrup", "molasses", "corn syrup"];
var nutsArray = ["peanut butter", "chestnut", "almond", "cashew", "walnut", "peanut", "pecan", "flax", "pine nut", "pistachio", "almond meal", "praline", "hazelnut", "macadamia", "almond paste", "macaroon"];
var condimentsArray = ["mayonnaise", "mustard", "ketchup", "vinegar", "balsamic vinegar", "wine vinegar", "cider vinegar", "rice vinegar", "apple cider vinegar", "fish sauce", "blue cheese dressing",];
var desertArray = ["chocolate", "apple sauce", "graham cracker", "marshmallow", "potato chips", "pudding mix", "chocolate morsels", "bittersweet chocolate", "cookie dough", "chocolate syrup", "nutella"];
var beverageArray = ["apple juice", "coffee", "orange juice", "tea", "espresso", "tomato juice", "green tea", "cranberry juice", "coke", "lemonade", "ginger ale", "pineapple juice", "fruit juice", "club soda", "sprite", "grenadine", "margarita mix"];
var legumesArray = ["peas", "black beans", "chickpea", "lentil", "hummus", "soybeans", "pinto beans", "cannellini beans", "navy beans", "kidney beans", "lima beans", "green beans", "french beans"];

var masterList = [dairyArray, meatArray, vegetablesArray, fruitArray, spicesArray, fishArray, bakingArray, oilArray, seafoodArray, sweetnerArray, nutsArray, condimentsArray, desertArray, beverageArray, legumesArray];
var categoryList = ["#dairy", "#meat", "#vegetables", "#fruit", "#spices", "#fish", "#baking", "#oil", "#seafood", "#sweetner", "#nuts", "#condiments", "#desert", "#beverage", "#legumes"];

// var ingredientsArray = [];
//var item = "";
// $(document).on("click", ".ingredientBtn", function (){
// 	item = $(this).attr("value");
// 	//console.log(item);
// 	if (ingredientsArray.indexOf(item) === -1) {
// 		ingredientsArray.push(item);
// 		//console.log(ingredientsArray);
// 	}
// });
//---------------------------------------------------------
var mySwitch = true;
// show th modal on launch
$('#myModal').modal('show');

// set initial condition for button Search Results 
// button name changes depending on which section is open
$("#switch").html(" RECIPE RESULTS ");
// toggle on/off the two sections for the user
$(document).on("click", "#switch", function () {
	event.preventDefault();
	if (mySwitch) {
		populateResults();
		$(".searchResults").css("display", "block");
		$(".masterSearch").css("display", "none");
		$("#switch").html(" INGREDIENTS ");
		mySwitch = false;
	} else {
		$(".searchResults").css("display", "none");
		$(".masterSearch").css("display", "block");
		$("#switch").html(" RECIPE RESULTS ");
		mySwitch = true;
	}
});
//----------------------------------------------------------
$(document).on("click", "#switch2", function (){
	event.preventDefault();
	if (mySwitch) {
		$(".searchResults").css("display", "block");
		$(".masterSearch").css("display", "none");
		$("#switch").html(" INGREDIENTS ");
		mySwitch = false;
	}
});

//----------------------------------------------------------
for (var i = 0; i < masterList.length; i++) {
	var master = masterList[i];
	master.sort();

	var row = $("<div class='row'>");
	for (var j = 0; j < master.length; j++) {

		// if (j % 4 == 0 && row) {
		var temp =	$(categoryList[i])
		// 	row = $("<div class='row'>");
		// }
		var ckbx = $('<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 btn btn-primary ingredientBtn title" data-selected="false" value="' + master[j] + '">' + master[j] + '</div>');
		temp.append(ckbx);

	}
	$(categoryList[i]).append(row);

}
