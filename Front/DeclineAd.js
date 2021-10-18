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
var ref2 = firebase.database().ref('images');
//var str = firebase.storage();
var img = "";
function sendM(email, t){
    Email.send({
        Host: "mail.sakkeny.com",
            Username: "ads@sakkeny.com",
            Password: "1-Sakkeny-1",
        To: email,
        From: "ads@sakkeny.com",
        Subject: "Your Ad " + t,
        Body: "Dear "+ localStorage.getItem('nameForap') + "<br>Unfortunately Your Ad "+ t + " has been declined by Sakkeny team according to our terms and conditions <br> Please check our terms and conditions and try submitting your Ad again . <br>If you wish to get in contact with Sakkeny team, please contact us on <br>https://www.sakkeny.com/contact.html <br> To see the Terms and conditions go to <br> https://sakkeny.com/terms-and-conditions.html <br> To see the privacy policy go to <br> https://sakkeny.com/privacy.html <br> Thank you for using sakkeny.",
    })
        .then(function (message) {
        //alert("mail sent successfully")
        window.location.href = "Dashboard.html";
        });
}

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
function Reject(){
    ref1.orderByKey().equalTo(localStorage.getItem('appID')).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
            var title = childSnapshot.val().Title;
            sendM(localStorage.getItem('email'), title);
            //console.log(title);
        childSnapshot.ref.remove();
        });
    });
    firebase.database().ref('images').orderByChild("main").equalTo(localStorage.getItem("appID")).once('value', function (snapshot){
        snapshot.forEach(childSnapshot => {
            delStor(childSnapshot.val().link);
            childSnapshot.ref.remove();
        });
    });    
    //alert("The ad has been successfully Deleted");
    makeLoader();
    //sendM(localStorage.getItem('currMail'), t);
    //window.location.href = "Dashboard.html";
}
function makeLoader(){
    
    document.getElementById("bo").innerHTML = "";
    var main = document.createElement("div");
    main.classList.add("toWait");
    var text = document.createElement("h1");
    text.innerHTML = "The Ad is deleting now<br/>Please Wait ......";
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
document.getElementById("decline").addEventListener("click", Reject);