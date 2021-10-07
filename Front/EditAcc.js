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
function delStor(vv){
  img = firebase.storage().refFromURL(vv);
          img.delete()
          .then(() => {
          console.log("Picture is deleted successfully!");
          })
          .catch((err) => {
          console.log(err);
          });
}
function Del(link){
  firebase.database().ref('images').orderByChild("link").equalTo(link).once('value', function (snapshot){
      snapshot.forEach(childSnapshot => {
          delStor(childSnapshot.val().link);
          childSnapshot.ref.remove();
      });
  });    
  document.getElementById('ErrorMessage').innerHTML = 'The Image has been successfully Deleted';
                                          document.getElementById('ErrorMessage').style.display = 'block';
                                          setTimeout(() => {
                                            document.getElementById('ErrorMessage').style.display = 'none';
                                          }, 3000);
}
function putImg(image){
  but = document.createElement('div');
  but.style.maxWidth = '100px';
  but.style.maxHeight = '100px';
  but.setAttribute('class','col-md-5 col-sm-8'); 
  but.innerHTML = '<img  style = "max-width:100px; max-hight:100px;"src="' + image + '" />';
  console.log("but");
  localStorage.setItem("imagesAcc", parseInt(localStorage.getItem("imagesAcc")) + 1);
  console.log(localStorage.getItem("imagesAcc"));
  document.getElementById("images").appendChild(but);
  but.addEventListener("click", function (){
    Del(image);
    but.style.display = "none";
    localStorage.setItem("imagesAcc", parseInt(localStorage.getItem("imagesAcc")) -1);
  });
}
function fetchAllData(){
  var check = false;
    console.log(localStorage.getItem('currMail'));
    localStorage.setItem("imagesAcc", 0);
    ref.orderByChild('email').equalTo(localStorage.getItem('currMail')).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
            document.getElementById("name").value = childSnapshot.val().name;
            document.getElementById("day").value = childSnapshot.val().day;
            document.getElementById("month").value = childSnapshot.val().month;
            document.getElementById("year").value = childSnapshot.val().year;
            document.getElementById("contactnum2").value = childSnapshot.val().secondContactNumber;
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
    firebase.database().ref('images').orderByChild("main").equalTo(localStorage.getItem("currMail")).once('value', function (snapshot) {
      snapshot.forEach(childSnapshot => {
          image = childSnapshot.val().link;
          check = true;
          putImg(image);
      });
      if(check == false){
        document.getElementById('ErrorMessage').innerHTML = "You don't have profile picture";
                                          document.getElementById('ErrorMessage').style.display = 'block';
                                          setTimeout(() => {
                                            document.getElementById('ErrorMessage').style.display = 'none';
                                          }, 3000);
      }
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
                                var cont2 = document.getElementById("contactnum2").value;
                                cont2 = cont2.trim();
                                len2 = cont2.length;
                                start2 = cont2.startsWith("01");
                                if(cont2 != ""){
                                    if (!isNaN(cont2)){
                                      if(len2 == 11){
                                        if(start2){
                                          var numberOfFiles = document.getElementById('image').files.length;
                                          console.log(numberOfFiles + parseInt(localStorage.getItem("imagesAcc")));
                                          if((numberOfFiles + parseInt(localStorage.getItem("imagesAcc"))) <= 1){
                                            EditUserData();
                                          }
                                          else{
                                            document.getElementById('ErrorMessage').innerHTML = "Error: You can't upload the profile picture again you must delete yours first";
                                          document.getElementById('ErrorMessage').style.display = 'block';
                                          }
                                        }
                                        else{
                                          document.getElementById('ErrorMessage').innerHTML = 'Error: Wrong phone number';
                                          document.getElementById('ErrorMessage').style.display = 'block';
                                        }
                                      }
                                      else{
                                        document.getElementById('ErrorMessage').innerHTML = 'Error: Wrong phone number';
                                          document.getElementById('ErrorMessage').style.display = 'block';
                                      }
                                    }
                                    else{
                                      document.getElementById('ErrorMessage').innerHTML = 'Error: Wrong phone number';
                                          document.getElementById('ErrorMessage').style.display = 'block';
                                    }
                                  }
                                  else{
                                    
                                    var numberOfFiles = document.getElementById('image').files.length;
                                    console.log(numberOfFiles + parseInt(localStorage.getItem("imagesAcc")));
                                    if(numberOfFiles + parseInt(localStorage.getItem("imagesAcc")) <= 1){
                                      EditUserData();
                                    }
                                    else{
                                      document.getElementById('ErrorMessage').innerHTML = "Error: You can't upload the profile picture again you must delete yours first";
                                          document.getElementById('ErrorMessage').style.display = 'block';
                                    
                                    }
                                  }
                                
                              }
                              else{
                                document.getElementById('ErrorMessage').innerHTML = 'Error: You have to Specify are you owner or developer or broker';
                                          document.getElementById('ErrorMessage').style.display = 'block';
                                
                              }
                              
                            }
                            
                            else{
                              document.getElementById('ErrorMessage').innerHTML = 'Error: Invalid phone number';
                                          document.getElementById('ErrorMessage').style.display = 'block';
                            }
                          }
                          else{
                            document.getElementById('ErrorMessage').innerHTML = 'Error: Invalid phone number';
                            document.getElementById('ErrorMessage').style.display = 'block';
                          }
                        }
                        else{
                          document.getElementById('ErrorMessage').innerHTML = 'Error: Invalid phone number';
                          document.getElementById('ErrorMessage').style.display = 'block';
                        }
                    }
                    else{
                      document.getElementById('ErrorMessage').innerHTML = 'Error: Enter phone number';
                      document.getElementById('ErrorMessage').style.display = 'block';
                    }
                  }
                  else{
                    document.getElementById('ErrorMessage').innerHTML = 'Error: Enter the year';
                                          document.getElementById('ErrorMessage').style.display = 'block';
                  }
                }
                else{
                  document.getElementById('ErrorMessage').innerHTML = 'Error: Enter the month';
                  document.getElementById('ErrorMessage').style.display = 'block';
                }
              }
              else{
                document.getElementById('ErrorMessage').innerHTML = 'Error: Enter the day';
                document.getElementById('ErrorMessage').style.display = 'block';
              }
            }
            else{
              document.getElementById('ErrorMessage').innerHTML = 'Error: Enter the name';
              document.getElementById('ErrorMessage').style.display = 'block';
            }
          }
          else{
            document.getElementById('ErrorMessage').innerHTML = 'Error: You have to Enter your password confirmation right';
                                          document.getElementById('ErrorMessage').style.display = 'block';
          }
      }
      else{
        document.getElementById('ErrorMessage').innerHTML = 'Error: You have to Enter your password';
                                          document.getElementById('ErrorMessage').style.display = 'block';
      }
    }
    else{
      document.getElementById('ErrorMessage').innerHTML = 'Error: You have to Enter your mail';
                                          document.getElementById('ErrorMessage').style.display = 'block';
    }
}
function uploadImage(email){
  var numberOfFiles = document.getElementById('image').files.length;
    //window.alert(numberOfFiles);
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
                setTimeout(function(){window.location.href = "MyAccount.html"; },3000);
                //var ref2 = db.ref("images");
                //ref2.push(data2);
            })
       }
       )
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
      var cont2 = document.getElementById("contactnum2").value;
      console.log(cont2);
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
                secondContactNumber: cont2
              }
              childSnapshot.ref.update(data);      
        })});
        if(localStorage.getItem("imagesAcc") == 0){
          if(document.getElementById('image').files.length != 0){
            uploadImage(localStorage.getItem("currMail"));
          }
          else{
            setTimeout(function(){window.location.href = "MyAccount.html";},3000);
          }
          
        }
        //alert("Your Account has been changed succesfully");
        makeLoader();
        

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
  document.getElementById("signupp").addEventListener('click',function(){
    document.getElementById('ErrorMessage').style.display = 'none';
  });
  document.getElementById("signupp").addEventListener('click',checkValidity);
  if (window.addEventListener) {
    window.addEventListener('load', fetchAllData());
} else if (window.attachEvent) {
    window.attachEvent('onload', fetchAllData());
} else {
    window.onload = fetchAllData();
}
  