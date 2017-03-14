/*Global Variables */
var userId;
var username;


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

	database.ref().on("child_added", function(snapshot) {

      // Change the HTML to reflect
      console.log("test");
      console.log(snapshot.fridge);
      //$("#myFridge").html(snapshot.val().fridge);
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
	// takes in callbanck as arg
	if(firebaseUser){
		userId = firebase.auth().currentUser.uid;
		console.log(firebaseUser);
		console.log(userId);
		if(justSignedUp){
			database.ref().child("users/"+userId).set({
				username : username,
				//id : userId,
				fridge: {}
			});
		}
		// database.ref().child("users/").set({
		// 	username : username,
		// 	id : userId,
		// 	fridge: {}
		// })
	}
	else{
		//console.log("not logged in"); 
	}

}); 

//Logout event
btnLogout.on("click", e =>{
	console.log("logout now");
	firebase.auth().signOut();
	//window.location = 'login.html'

});
