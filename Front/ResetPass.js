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
  document.getElementById("forget").addEventListener("click",forget);
  function forget(){
    var email = localStorage.getItem("currMail", "");;
    if(email != ""){
      firebase.auth().sendPasswordResetEmail(email).
    then(() => {
      alert("The password reset mail is sent please check your email");
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "login.html";
        localStorage.setItem("currMail", "");
      }).catch((error) => {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    })
    .catch(error =>{
      alert(error);
    });
    }
    else{
      alert("Please enter your email so we can help you");
    }
  }