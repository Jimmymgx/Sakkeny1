//const e = require("express");
document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
   event.preventDefault();
   document.getElementById("signupp").click();
  }
});
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
var db = firebase.database();
firebase.auth.Auth.Persistence.LOCAL
var ref = firebase.database().ref('users');


function fetchAllData(){
    console.log(localStorage.getItem('currMail'));
    ref.orderByChild('email').equalTo(localStorage.getItem('currMail')).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
            document.getElementById("name").value = childSnapshot.val().name;
            document.getElementById("day").value = childSnapshot.val().day;
            document.getElementById("month").value = childSnapshot.val().month;
            document.getElementById("year").value = childSnapshot.val().year;
            if((childSnapshot.val().type) == "Owner"){
                document.getElementById("owner").checked = true;
            }
            if((childSnapshot.val().type) == "Developer"){
                document.getElementById("developer").checked = true;
            }
            if((childSnapshot.val().type) == "Broker"){
              document.getElementById("broker").checked = true;
          }
            document.getElementById("contactnum").value = childSnapshot.val().contactNumber;
        })
    });
}
function checkValidity(){
  console.log("11");
    var email = "Z";
    var pass = "Z";
    var con = "Z";
    var isO = document.getElementById("owner").checked;
    var isD = document.getElementById("developer").checked;
    var isB = document.getElementById("broker").checked;
    if (email != ""){
      if(pass != ""){
          if(con != "" && con == pass){
            var name = document.getElementById("name").value;
            if (name != ""){
              var daySelection = document.getElementById("day").value;
              if ( daySelection != "" || daySelection == "Day"){
                var monthSelection = document.getElementById("month").value;
                if ( monthSelection != "" || monthSelection == "Month"){
                  var yearSelection = document.getElementById("year").value;
                  if ( yearSelection != "" || yearSelection == "Year"){
                    var cont1 = document.getElementById("contactnum").value;
                    cont1 = cont1.trim();
                    len = cont1.length;
                    start = cont1.startsWith("01");
                    if(cont1 != ""){
                        if (!isNaN(cont1)){
                          if(len == 11){
                            if(start){
                              if(isB == true || isD == true || isO == true){
                                EditUserData();
                              }
                              else{
                                alert("You have to Specify are you owner or developer or broker");
                              }
                              
                            }
                            
                            else{
                              alert("Invalid phone number 1 for 01");
                            }
                          }
                          else{
                            alert("Invalid phone number 1 for len");
                          }
                        }
                        else{
                          alert("Invalid phone number 1 for str");
                        }
                    }
                    else{
                      alert("Enter your phone number");
                    }
                  }
                  else{
                    alert("Enter the year")
                  }
                }
                else{
                  alert("Enter the month")
                }
              }
              else{
                alert("Enter the day")
              }
            }
            else{
              alert("Please enter your name");
            }
          }
          else{
            alert("You have to Enter your password confirmation right");
          }
      }
      else{
        alert("You have to Enter your password");
      }
    }
    else{
      alert("You have to Enter your mail");
    }
}

function EditUserData(){
  var name = document.getElementById("name").value;
      var daySelection = document.getElementById("day").value;
      var monthSelection = document.getElementById("month").value;
      var yearSelection = document.getElementById("year").value;
      var birthdate = daySelection +'/' + monthSelection +'/' +  yearSelection;
      var typ = "";
      if(document.getElementById("owner").checked){typ = "Owner"}
      if(document.getElementById("developer").checked){typ = "Developer"}
      if(document.getElementById("broker").checked){typ = "Broker"}
      var cont1 = document.getElementById("contactnum").value;
      ref.orderByChild('email').equalTo(localStorage.getItem('currMail')).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
            var data = {
                name : name,
                day : daySelection,
                month : monthSelection,
                year : yearSelection,
                birthDate : birthdate,
                type : typ,
                contactNumber : cont1,
              }
              childSnapshot.ref.update(data);      
        })});
        alert("Your Account has been changed succesfully");
        makeLoader();
        setTimeout(function(){window.location.href = "MyAccount.html";},3000);

  }
  function makeLoader(){
    
    document.getElementById("bo").innerHTML = "";
    var main = document.createElement("div");
    main.classList.add("toWait");
    var text = document.createElement("h1");
    text.innerHTML = "Your are going to be user now <br/>Please Wait ......";
    text.style.color = "white";
    var toLoad = document.createElement("span");
    toLoad.classList.add("loaderForWait");
    var toLoadIn = document.createElement("span");
    toLoadIn.classList.add("loader-inner");
    toLoad.appendChild(toLoadIn);
    main.appendChild(text);
    main.appendChild(toLoad);
    document.getElementById("bo").appendChild(main);
  }
  document.getElementById("signupp").addEventListener('click',checkValidity);
  if (window.addEventListener) {
    window.addEventListener('load', fetchAllData());
} else if (window.attachEvent) {
    window.attachEvent('onload', fetchAllData());
} else {
    window.onload = fetchAllData();
}
  