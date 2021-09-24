var firebaseConfig = {
  apiKey: "AIzaSyAuRCwuZPB4s43vBNhuv8A7jWNyD3qQUKU",
  authDomain: "sakkenyproject.firebaseapp.com",
  databaseURL: "https://sakkenyproject-default-rtdb.firebaseio.com",
  projectId: "sakkenyproject",
  storageBucket: "sakkenyproject.appspot.com",
  messagingSenderId: "407960924893",
  appId: "1:407960924893:web:c1a7b36d984f67469f6134",
  measurementId: "G-SSL0VK1HTY"
};
firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL
document.getElementById("log").addEventListener("click",DoLogIn);
document.getElementById("signin").addEventListener("click",signin);
document.getElementById("forget").addEventListener("click",forget);
document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
   event.preventDefault();
   document.getElementById("log").click();
  }
});
function forget(){
  var email = document.getElementById("email").value;
  if(email != ""){
    firebase.auth().sendPasswordResetEmail(email).
  then(() => {
    alert("The password reset mail is sent please check your email");
  })
  .catch(error =>{
    alert(error);
  });
  }
  else{
    alert("Please enter your email so we can help you");
  }
}
function DoLogIn(){
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem("currMail", email);
    window.location.replace("MyAccount.html");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}
function signin(){
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday,email');
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then(function(){
      var token = result.credential.accessToken;

      document.querySelector('#signout').style.display="block";
      console.log(user);
      var user = result.user;
      console.log(user.email);
      var userimage = document.querySelector('#user-image');

      var userpic = document.createElement('img');
      userpic.src = user.photoURL;
      userimage.append(userpic);

      var useremail = document.querySelector('#user-email');
      useremail.innerHTML = user.email;
  })
}