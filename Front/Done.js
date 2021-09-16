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
function Del(){
    ref1.orderByKey().equalTo(localStorage.getItem('appID')).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
        childSnapshot.ref.remove();
        });
    });
    firebase.database().ref('images').orderByChild("main").equalTo(localStorage.getItem("appID")).once('value', function (snapshot){
        snapshot.forEach(childSnapshot => {
            delStor(childSnapshot.val().link);
            childSnapshot.ref.remove();
        });
    });    
    alert("The ad has been successfully Deleted");
    
    makeLoader();
  setTimeout(function(){window.location.href = "MyAccount.html";},3000);
}
function makeLoader(){
    
    document.getElementById("bo").innerHTML = "";
    var main = document.createElement("div");
    main.classList.add("toWait");
    var text = document.createElement("h1");
    text.innerHTML = "Your Ad is Deleting now <br/>Please Wait ......";
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
document.getElementById("done").addEventListener("click", Del);