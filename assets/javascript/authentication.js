// Initialize Firebase
var config = {
	apiKey: "AIzaSyDx42pzuIRiVLXxoSLiHw0ZVdK0vltH3ns",
	authDomain: "openfridge-ce80f.firebaseapp.com",
	databaseURL: "https://openfridge-ce80f.firebaseio.com",
	storageBucket: "openfridge-ce80f.appspot.com",
	messagingSenderId: "304705323614"
};
firebase.initializeApp(config);

var txtEmail = $("#email");
var password = $("#password");
var userName = $("#name");
var btnSignup = $("#signup");
var btnLogin = $("#login");
var btnLogout = $("#logout");

//Add login event
btnLogin.on("click", e =>{
	//Get email and password
	var username = userName.val();
	var email = txtEmail.val();
	var pass = password.val();
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(email, pass); // return promise

	promise.catch(e => console.log(e.message)); //throw error if cant login
	//window.location = 'index.html'


});

//Add signup event
btnSignup.on("click", e =>{

	//Validate for true email address
	var username = userName.val();
	var email = txtEmail.val();
	var pass = password.val();
	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(email, pass); // return promise

	//promise.then(user => console.log(user));
	promise.catch(e => console.log(e.message)); //throw error if cant login
	//window.location = 'index.html'


});

firebase.auth().onAuthStateChanged(firebaseUser => {
	// takes in callbanck as arg
	if(firebaseUser){
		console.log(firebaseUser);
	}
	else{
		console.log("not logged in"); 
	}

}); 

//Logout event
btnLogout.on("click", e =>{
	console.log("logout now");
	firebase.auth().signOut();
	//window.location = 'login.html'

});
