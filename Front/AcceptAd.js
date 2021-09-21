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
//firebase.initializeApp(firebaseConfig);
var ref = firebase.database().ref('Ads');
function sendMail(email, t){
  Email.send({
    Host: "mail.sakkeny.com",
    Username: "ads@sakkeny.com",
    Password: "1-Sakkeny-1",
      To: email,
      From: "ads@sakkeny.com",
      Subject: "Your Ad " + t,
      Body: "Your Ad "+ t + " has been Accepted now it's on your ads <br><br> Thanks for using Sakkeny <br> To see the Terms and conditions go to <br> https://sakkeny.com/terms-and-conditions.html <br> To see the privacy policy go to <br> https://sakkeny.com/privacy.html",
  })
      .then(function (message) {
      //alert("mail sent successfully")
      window.location.href = "Dashboard.html";
      });
}

function Accept(){
    ref1.orderByKey().equalTo(localStorage.getItem('appID')).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
          childSnapshot.ref.update({ Accepted: "Yes" });
          var title = childSnapshot.val().Title;
          sendMail(localStorage.getItem('email'), title);
        });
      });
      //alert("The ad has been successfully Accepted");
      //window.location.href = "Dashboard.html";
      makeLoader();
    
}
function makeLoader(){
    
  document.getElementById("bo").innerHTML = "";
  var main = document.createElement("div");
  main.classList.add("toWait");
  var text2 = document.createElement("h1");
  text2.innerHTML = "Accepting Now ..."
  text2.style.color = "white";
  var toLoad = document.createElement("span");
  toLoad.classList.add("loaderForWait");
  var toLoadIn = document.createElement("span");
  toLoadIn.classList.add("loader-inner");
  toLoad.appendChild(toLoadIn);
  main.appendChild(text2);
  main.appendChild(toLoad);
  document.getElementById("bo").appendChild(main);
}
document.getElementById("accept").addEventListener("click", Accept);