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
var coderesult = "";
document.getElementById("log").addEventListener("click",DoLogIn);
document.getElementById("signinF").addEventListener("click",signin);
document.getElementById("forget").addEventListener("click",forget);
document.getElementById("signinG").addEventListener("click",googleLogIn);
document.getElementById("email").addEventListener("click",clr);
document.getElementById("password").addEventListener("click",clr);
document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
   event.preventDefault();
   document.getElementById("log").click();
  }
});
function clr(){
  document.getElementById('messageP').innerHTML = '';
}
let provider = new firebase.auth.GoogleAuthProvider();
function googleLogIn(){
  console.log('login btn callback');
  firebase.auth().signInWithPopup(provider).then(res=>{
    console.log(res);
  }).catch(e=>{
    console.log(e);
  })
}
function forget(){
  var email = document.getElementById("email").value;
  if(email != ""){
    firebase.auth().sendPasswordResetEmail(email).
  then(() => {
    document.getElementById('messageP2').innerHTML = "The password reset mail is sent please check your email";
    document.getElementById('messageP2').style.color = 'green';
    document.getElementById('messageP2').style.fontSize = '20px';
  })
  .catch(error =>{
    document.getElementById('messageP2').innerHTML = error;
    
  });
  }
  else{
    document.getElementById('messageP2').innerHTML = "Please enter your email so we can help you to change password";
    setTimeout(() => {
      document.getElementById('messageP2').style.display = 'none';
    }, 10000);
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
    document.getElementById('messageP').innerHTML = errorMessage;
    if(errorMessage == 'The email address is badly formatted.'){
      document.getElementById('messageP').innerHTML = 'The email you entered is incorrect';
    }
    if(errorMessage == 'The password is invalid or the user does not have a password.'){
      document.getElementById('messageP').innerHTML = 'Incorrect password';
    }
    if(errorMessage == 'There is no user record corresponding to this identifier. The user may have been deleted.'){
      document.getElementById('messageP').innerHTML = 'User not found';
    }
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
function Send(){ 
  var check = false;
const phoneNumber = '+201060216885';
const appVerifier = window.recaptchaVerifier;
  if(check == false){
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    
    const sentCodeId = confirmationResult.verificationId;
    //document.getElementById('Do').addEventListener('click', () => signInWithPhone(sentCodeId));
    //alert('Done');
    //return confirmationResult.confirm(testVerificationCode);
    //alert('Done');
    // ...
    document.getElementById('confirmation').addEventListener('click', function() {
      var code = document.getElementById('confirm').value;
      confirmationResult.confirm(code)
    .then(function (result){
      //alert('Suc');
      var user = result.user;
      //alert(user);
    })
    .catch(function (error){
      //alert(error.message);
    })
    });
  })
  .then(function(confirmation){
    window.confirmationResult = confirmationResult;
    coderesult = confirmationResult;
    //alert(coderesult);
    document.getElementById('recaptcha-container').style.display = none;
    //alert('Done');
    console.log(coderesult);
    confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
  })
  .catch((error) => {
    // Error; SMS not sent
    // ...
    //alert(error);
  });
  }
}
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(document.getElementById('Do'), {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      //onSignInSubmit();

    }
  });
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  recaptchaVerifier.render().then(widgetId =>{
    window.recaptchaWidgetId = widgetId;
  })
  
 function Confirm(){
    var code = document.getElementById('confirm').value;
    coderesult.confirm(code)
    .then(function (result){
      //alert('Suc');
      var user = result.user;
      //alert(user);
    })
    .catch(function (error){
      //alert(error.message);
    })
 }

document.getElementById('Do').addEventListener('click', Send);
//document.getElementById('confirmation').addEventListener('click', Confirm);