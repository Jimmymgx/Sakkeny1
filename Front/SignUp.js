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
function sendMail(email, name){
Email.send({
  Host: "mail.sakkeny.com",
  Username: "accounts@sakkeny.com",
  Password: "1-Sakkeny-1",
    To: email,
    From: "accounts@sakkeny.com",
    Subject: "Welcome to Sakkeny real estate search engine platform",
    Body: "HELLO " + name + " Welcome to Sakkeny <br>Thank you for creating your account with us ,We open doors to a world of properties. <br>We are a real estate platform, our aim is to help you sell or rent your property tailored to our customers needs. <br> With sakkeny customers who are looking to buy or rent a property can search for the property and get in direct contact with yourself. <br> With sakkeny customers who are looking to buy or rent a property, can easily compare properties. <br> With sakkeny customers who are looking to buy or rent a property can submit their wish list of properties and we will follow up with them. <br> If you wish to list your own property for sale or rent, you can easily upload your ad using your account. <br> We provide all the above services for free. <br> If you wish to contact our team, please contact us on <br> https://www.sakkeny.com/contact.html”      ",
})
    .then(function (message) {
    //alert("mail sent successfully")
    //window.location.href = "Dashboard.html";
    });
}
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
            if(document.getElementById('confirmation').style.display == 'none'){
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
                                        addUserByEmail();
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
                                  
                                  addUserByEmail();
                                }
                              
                            }
                            else{
                              document.getElementById('ErrorMessage').innerHTML = 'Error: You have to Specify are you landlord or developer or broker';
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
                    document.getElementById('ErrorMessage').innerHTML = 'Error: Enter your phone number';
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
              document.getElementById('ErrorMessage').innerHTML = 'Error: Please verify your number';
                                        document.getElementById('ErrorMessage').style.display = 'block';
          
            }
            
          }
          else{
            document.getElementById('ErrorMessage').innerHTML = 'Error: Please enter your name';
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

function checkMob(){
var check = false;
var response = grecaptcha.getResponse();
if(response == 0){
  document.getElementById('ErrorMessage').innerHTML = 'Error: You have to solve the captcha';
  document.getElementById('ErrorMessage').style.display = 'block';
      return;
}
var cont1 = document.getElementById("contactnum").value;
                  cont1 = cont1.trim();
                  len = cont1.length;
                  start = cont1.startsWith("01");
                  if(cont1 != ""){
                      if (!isNaN(cont1)){
                        if(len == 11){
                          if(start){
                            
                            firebase.database().ref('users').once('value', function (snapshot) {
                              snapshot.forEach(childSnapshot => {
                                  if(childSnapshot.val(). contactNumber === cont1){
                                    check = true;
                                  }
                              })
                              if(check == true){
                                document.getElementById('ErrorMessage').innerHTML = 'Error: This phone number is already connected with existing account';
                                        document.getElementById('ErrorMessage').style.display = 'block';
                                
                              }
                              else{
                                SendCode();
                              }
                          });
                          }
                          else{
                            document.getElementById('ErrorMessage').innerHTML = 'Error: Invalid phone number';
                                        document.getElementById('ErrorMessage').style.display = 'block';
                          }
                        }
                        else{
                          document.getElementById('ErrorMessage').innerHTML = 'Error: Invalid phone number';
                          document.getElementById('ErrorMessage').style.display = 'block';                          }
                      }
                      else{
                        document.getElementById('ErrorMessage').innerHTML = 'Error: Invalid phone number';
                        document.getElementById('ErrorMessage').style.display = 'block';                        }
                    }
                    else{
                      document.getElementById('ErrorMessage').innerHTML = 'Error: Invalid phone number';
                      document.getElementById('ErrorMessage').style.display = 'block';                      }
}
function SendCode(){ 

var check = false;
const phoneNumber = '+2' + document.getElementById('contactnum').value;
const appVerifier = window.recaptchaVerifier;
if(check == false){
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
.then((confirmationResult) => {
  // SMS sent. Prompt user to type the code from the message, then sign the
  // user in with confirmationResult.confirm(code).
  
  const sentCodeId = confirmationResult.verificationId;
  //document.getElementById('Do').addEventListener('click', () => signInWithPhone(sentCodeId));
  
  alert('Code is sending now');
  document.getElementById('Do').style.display = 'none';
  document.getElementById('loaderforsend').style.display = 'block';
  document.getElementById('testforloadersend').style.display = 'block';
  document.getElementById('recaptcha-container').style.display = 'none';
  setTimeout(() => {
    document.getElementById('loaderforsend').style.display = 'none';
    document.getElementById('loaderforsent').style.display = 'block';
    document.getElementById('testforloadersend').innerHTML = 'Sent';
    
  }, 10000);
  //
  //return confirmationResult.confirm(testVerificationCode);
  //alert('Done');
  // ...
  document.getElementById('confirmation').addEventListener('click', function() {
    var code = document.getElementById('confirm').value;
    confirmationResult.confirm(code)
  .then(function (result){
    //alert('Suc');
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      //window.location.href = "index.html";
      localStorage.setItem("currMail", "");
      //document.getElementById('recaptcha-container').style.display = none;
      document.getElementById('Do').style.display = 'none';
      document.getElementById('Do').style.display = 'none';
      document.getElementById('textforcon').style.display = 'none';
      document.getElementById('spanforcon').style.display = 'none';
      document.getElementById('confirmation').style.display = 'none';
      document.getElementById('confirm').style.display = 'none';
      document.getElementById('gif').style.display = 'block';
      document.getElementById('te').style.display = 'block';
      document.getElementById('gif').style.marginLeft = "57%";
      document.getElementById('te').style.marginLeft = "57%";
      setTimeout(() => {
        document.getElementById('gif').style.display = 'none';
      document.getElementById('png').style.display = 'block';
      document.getElementById('png').style.marginLeft = "57%";
      }, 2000);
    var user = result.user;
    //alert(user);
  })
  .catch(function (error){
    alert(error.message);
  })
  });
})
.then(function(confirmation){
  window.confirmationResult = confirmationResult;
  coderesult = confirmationResult;
  //alert(coderesult);
  //document.getElementById('recaptcha-container').style.display = none;
  //alert('Done');
  console.log(coderesult);
  confirmationResult.confirm(code).then((result) => {
// User signed in successfully.
const user = result.user;

}).catch((error) => {
  // An error happened.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  //alert('Here');
});
// ...
}).catch((error) => {
// User couldn't sign in (bad verification code?)
// ...
});
 })

}
}
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(document.getElementById('recaptcha-container'), {
  'size': 'invisible',
  'callback': (response) => {
    SendCode();
    
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    //onSignInSubmit();

  }
});
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
recaptchaVerifier.render().then(widgetId =>{
  window.recaptchaWidgetId = widgetId;
  //alert('Here');
})
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
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.href = "SignUp.html";
  }).catch((error) => {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
  // ..
});
console.log("Hey");
var name = document.getElementById("name").value;
    var daySelection = document.getElementById("day").value;
    var monthSelection = document.getElementById("month").value;
    var yearSelection = document.getElementById("year").value;
    var birthdate = daySelection +'/' + monthSelection +'/' +  yearSelection;
    var photo = document.getElementById('image').files.length;
    var typ = "";
    if(document.getElementById("owner").checked){typ = "Landlord"}
    if(document.getElementById("developer").checked){typ = "Developer"}
    if(document.getElementById("broker").checked){typ = "Broker"}
    var cont1 = document.getElementById("contactnum").value;
    var cont2 = document.getElementById("contactnum2").value;
    var data = {
      email : email,
      name : name,
      day : daySelection,
      month : monthSelection,
      year : yearSelection,
      birthDate : birthdate,
      type : typ,
      contactNumber : cont1,
      secondContactNumber : cont2
    }
    firebase.database().ref('users').push(data);
    uploadImage(email);
    sendMail(email, name);
    makeLoader();
    if(photo == 0){
      setTimeout(function(){window.location.href = "index.html";},5000);
    }
    

    
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
document.getElementById("signupp").addEventListener('click',function(){
  document.getElementById('ErrorMessage').style.display = 'none';
});
document.getElementById("signupp").addEventListener('click',checkValidity);
document.getElementById('Do').addEventListener('click', checkMob);
