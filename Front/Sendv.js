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
  document.getElementById("sendver").addEventListener("click",Send);
  document.getElementById("show").addEventListener("click",Show);    
  function Send(){
    var user = firebase.auth().currentUser;
    document.getElementById("em").innerHTML = "Welcome user " + user.email;
    user.sendEmailVerification().then(function(){
    alert("Verification sent Verfy and refresh the page");
    }).catch(function(error){

    })
  }
