/*Global Variables */
var userId; // key for each child node of users object
var username; // attribute of user object
var fridgeList; // attribute to store users fridge


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDx42pzuIRiVLXxoSLiHw0ZVdK0vltH3ns",
    authDomain: "openfridge-ce80f.firebaseapp.com",
    databaseURL: "https://openfridge-ce80f.firebaseio.com",
    storageBucket: "openfridge-ce80f.appspot.com",
    messagingSenderId: "304705323614"
  };
firebase.initializeApp(config);

var database = firebase.database();

var txtEmail = $("#email");
var password = $("#password");
var userName = $("#name");
var btnSignup = $("#signup");
var btnLogin = $("#login");
var btnLogout = $("#logout");
var justSignedUp = false;

//Add login event
btnLogin.on("click", e =>{

	//Get email and password
	username = userName.val();
	var email = txtEmail.val();
	var pass = password.val();
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(email, pass); // return promise

	promise.catch(e => console.log(e.message)); //throw error if cant login

	/*
	 * On login, query all items stored in the users fridge
	 *
	 */
	fridgeList.once("value").then(function(snapshot){
		snapshot.forEach(function(childSnapshot) {

			var childData; // item in fridge
			var deleteButton;
			var myFridge;
			var key; // key for item in fridge


			myFridge = $("#myFridge");

			key = childSnapshot.key;
			childData = childSnapshot.val();

			deleteButton = $("<button class='col-xs-12 col-sm-12 col-md-6 col-lg-4 btn btn-primary delete' value='" + childData +"'>").text(childData);
			myFridge.append(deleteButton);

			var myTemp = document.querySelectorAll("div.title[value='"+ childData +"']");
			$(myTemp[0]).attr("data-selected", "true");
			ingredientsArray.push(childData);
		});
	});


});

//Add signup event
btnSignup.on("click", e =>{

	//Validate for true email address
	username = userName.val();
	var email = txtEmail.val();
	var pass = password.val();
	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(email, pass); // return promise

	promise.catch(e => console.log(e.message)); //throw error if cant login

	justSignedUp = true; // flag user when they first create account

});

firebase.auth().onAuthStateChanged(firebaseUser => {

	console.log("user state change");

	/* Grab user id */
	userId = firebase.auth().currentUser.uid;
		
	/* Create entry in database if user signed up */
	if(justSignedUp){
		database.ref().child("users/"+userId).set({
			username : username,
			fridge: {}
		});
	}

	databaseRef = database.ref().child('/users/' + userId + "/");
	fridgeList = databaseRef.child('fridge');

});

//Logout event
btnLogout.on("click", e =>{
	console.log("logout now");
	firebase.auth().signOut();

});
