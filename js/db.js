// Initialize Firebase
var config = {
  apiKey: "AIzaSyAP3AzppW5kXKMF2ZfZtbvEYgCVZ97PMmA",
  authDomain: "teamfactory-ef782.firebaseapp.com",
  databaseURL: "https://teamfactory-ef782.firebaseio.com",
  projectId: "teamfactory-ef782",
  storageBucket: "teamfactory-ef782.appspot.com",
  messagingSenderId: "837299086515"
};
firebase.initializeApp(config);
var database = firebase.database();

  function auth() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log(email);

    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert('hola');
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  }