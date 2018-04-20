(function(){
  var config = {
    apiKey: "AIzaSyAP3AzppW5kXKMF2ZfZtbvEYgCVZ97PMmA",
    authDomain: "teamfactory-ef782.firebaseapp.com",
    databaseURL: "https://teamfactory-ef782.firebaseio.com",
    projectId: "teamfactory-ef782",
    storageBucket: "teamfactory-ef782.appspot.com",
    messagingSenderId: "837299086515"
  };
  firebase.initializeApp(config);

//Elements
const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const btnSignUp = document.getElementById('signUp');
const btnSignIn = document.getElementById('signIn');
//const btnLogOut = document.getElementById('logOut');

//Login
btnSignIn.addEventListener('click', e =>{
// Get Email and password
const email = txtEmail.value;
const password = txtPassword.value;
const auth = firebase.auth();

//Sign In
const promise = auth.signInWithEmailAndPassword(email, password);
promise.catch(e => console.log(e.message));
});

//Sign Up
btnSignUp.addEventListener('click', e => {
// Get Email and password
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();
  console.log("here");
  // Sign up
  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));
  console.log("signup");
});

//Check if user is connected
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    document.location.href="../dashboard.html";
    //btnLogOut.classList.remove('hide');
  } else {
    console.log('pas auth');
    //btnLogOut.classList.add('hide');
  }
});

}());