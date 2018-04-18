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
  
  //Element
  const txtusername = document.getElementById('username');
  const txtname = document.getElementById('name');
  const txtsurname = document.getElementById('surname');
  const txtEmail = document.getElementById('email');
  const txtPassword = document.getElementById('password');
  const btnSignUp = document.getElementById('signUp');
  const btnSignIn = document.getElementById('signIn');
  const btnLogOut = document.getElementById('logOut');
  
  //login even
  btnSignIn.addEventListener('click', e =>{
    //get Email et password
    const username = txtusername.value;
    const name = txtname.value;
    const surname = txtsurname.value;
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();
  
  //sign In
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));
  
  
  });
  
  //add SignUp even
  btnSignUp.addEventListener('click', e => {
    const username = txtusername.value;
    const name = txtname.value;
    const surname = txtsurname.value;
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
  console.log("here");
    //sign In
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });
  
  //voir si connecter
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      document.location.href="http://google.com";
      //btnLogOut.classList.remove('hide');
    } else {
      console.log('pas auth');
      //btnLogOut.classList.add('hide');
    }
  });
  
  }());
  