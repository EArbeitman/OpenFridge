/*Global Variables */
var userId;
var username;

var fridgeList;


// Initialize Firebase
var config = {
	apiKey: "AIzaSyA1gNR8KEZkiS_AgMt-zkE5kksII0q8hjM",
    authDomain: "projectonetest-8db33.firebaseapp.com",
    databaseURL: "https://projectonetest-8db33.firebaseio.com",
    storageBucket: "projectonetest-8db33.appspot.com",
    messagingSenderId: "233742650790"
};
firebase.initializeApp(config);
var database = firebase.database();
//var databaseRef = firebase.auth();


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
	//window.location = 'index.html'

		fridgeList.once("value").then(function(snapshot)	{
		snapshot.forEach(function(childSnapshot) {

			var myFridge;
			var deleteButton;

			myFridge = $("#myFridge");

	// key will be "ada" the first time and "alan" the second time
			var key = childSnapshot.key;
			// childData will be the actual contents of the child
			var childData = childSnapshot.val();
			console.log(childData);

			deleteButton = $("<button class='col-xs-12 col-sm-12 col-md-6 col-lg-4 btn btn-primary delete' value='" + childData +"'>").text(childData);
			myFridge.append(deleteButton);

			var myTemp = document.querySelectorAll("div.title[value='"+ childData +"']");
			$(myTemp[0]).attr("data-selected", "true");
			ingredientsArray.push(childData);
			//ingredientsArray.push(childData);
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

	//promise.then(user => console.log(user));
	promise.catch(e => console.log(e.message)); //throw error if cant login
	//window.location = 'index.html'

	justSignedUp = true;

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

	// fridgeList.once("value", function(childSnapshot, prevChildKey) {
	// 	console.log(childSnapshot.val());
	// });







});



//Logout event
btnLogout.on("click", e =>{
	console.log("logout now");
	firebase.auth().signOut();
	//window.location = 'login.html'

});
