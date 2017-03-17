/*Global Variables */
var userId;
var username;

var databaseRef;
var fridgeList;

console.log("test debug 2");


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

	console.log(userId + " logged in");

	username = userName.val();
	var email = txtEmail.val();
	var pass = password.val();
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(email, pass); // return promise

	promise.catch(e => console.log(e.message)); //throw error if cant login

	//window.location = 'index.html'
	//database.ref().on("child_added", function(snapshot) {

      // Change the HTML to reflect
      //console.log("test");
      //console.log(snapshot.val());
      //$("#myFridge").html(snapshot.val().fridge);
    //});

});

//Add signup event
btnSignup.on("click", e =>{

	//Validate for true email address
	console.log(userId + "signed up in");

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

	console.log("on state");

	//console.log(firebaseUser);

	// takes in callback as arg
	// if(firebaseUser){

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
	//window.location = 'login.html'

});
