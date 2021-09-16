//const e = require("express");

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
var stor = firebase.storage();
var link = "";
/*$("#signu").click(function(){
    var email = $("#emailid").val();
    console.log(email);
    var pass = $("#password").val();
    var confirm = $("#cpassword").val();
    if(pass == confirm){
        firebase.auth().createUserWithEmailAndPassword(email, pass)
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : "+ errorMessage);
    // ..
    });
    }
});*/
console.log("1");

function checkValidity(){
  console.log("11");
    var email = document.getElementById("emailid").value;
    var pass = document.getElementById("password").value;
    var con = document.getElementById("cpassword").value;
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
                                addUserByEmail();
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
function uploadImage(email){
  var numberOfFiles = document.getElementById('image').files.length;
    window.alert(numberOfFiles);
    let arr = [];
    let names = [];
    for(var i = 0; i < numberOfFiles; i++){
        var image = document.getElementById('image').files[i];
        arr.push(image);
        names.push(image.name);
    }
    for(var i = 0; i < numberOfFiles; i++){
      var num = numberOfFiles;
        var ref = stor.ref(email + '/' + names[i]);
        var uploadTask = ref.put(arr[i]);
        uploadTask.on('state_change', function(snapshot){
            var progress = (snapshot.bytesTransferred/snapshot.totalBytes)+100;
            console.log('upload is ' + progress + ' done');  
       }
       ,function(error){
           console.log(error.message);
       }
       ,function(){
            uploadTask.snapshot.ref.getDownloadURL().then(function(URL){
                console.log(URL);
                var data2 = {
                  main : email,
                  link : URL
                }
                firebase.database().ref('images').push(data2);
                setTimeout(function(){window.location.href = "index.html"; },3000);
                //var ref2 = db.ref("images");
                //ref2.push(data2);
            })
       }
       )
    }
}
function addUserByEmail(){
    var email = document.getElementById("emailid").value;
    var pass = document.getElementById("password").value;
    var con = document.getElementById("cpassword").value;
      firebase.auth().createUserWithEmailAndPassword(email, pass)
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : "+ errorMessage);
    // ..
  });
  console.log("Hey");
  var name = document.getElementById("name").value;
      var daySelection = document.getElementById("day").value;
      var monthSelection = document.getElementById("month").value;
      var yearSelection = document.getElementById("year").value;
      var birthdate = daySelection +'/' + monthSelection +'/' +  yearSelection;
      var typ = "";
      if(document.getElementById("owner").checked){typ = "Personal"}
      if(document.getElementById("developer").checked){typ = "Developer"}
      if(document.getElementById("broker").checked){typ = "Broker"}
      var cont1 = document.getElementById("contactnum").value;
      var data = {
        email : email,
        name : name,
        day : daySelection,
        month : monthSelection,
        year : yearSelection,
        birthDate : birthdate,
        type : typ,
        contactNumber : cont1,
      }
      firebase.database().ref('users').push(data);
      uploadImage(email);
      makeLoader();
      setTimeout(function(){window.location.href = "index.html";},5000);

      
      //var ref = db.ref("users");
      //ref.push(data);
      /*firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error){
        var Code = error.code;
        var Message = error.Message;
        window.alert("Error : "+ Message);
      });
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          var user = firebase.auth.currentUser;
          var currentusermail = user.email;
        var isVerify = user.emailVerified;
        if(isVerify != true){
            window.location.href = "Verfication.html";
        }
      
        }
      });*/
      //window.location.href = "Login.html";
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

  