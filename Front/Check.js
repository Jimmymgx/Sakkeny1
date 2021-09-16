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
var db = firebase.database();
firebase.auth.Auth.Persistence.LOCAL

  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      var user = firebase.auth.currentUser;
      alert("out");
      if(user != null){
        document.getElementById("SigninBar").style.display = "none";
        document.getElementById("SignupBar").style.display = "none";
        document.getElementById("MyaccountBar").style.display = "block";
        var currentusermail = user.email;
        var isVerify = user.emailVerified;
        alert("inside if");
      }
      else{
        document.getElementById("SigninBar").style.display = "block";
        document.getElementById("SignupBar").style.display = "block";
        document.getElementById("MyaccountBar").style.display = "none";
        alert("inside else");
      }
    }
  });
