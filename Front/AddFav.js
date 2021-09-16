var db = firebase.database();
document.getElementById("fav").addEventListener("click", addToFav);
function addToFav() {
  console.log("HHH");
  var use = localStorage.getItem("currMail");
  var ad = localStorage.getItem("appID");
  var check = false;
  firebase.database().ref('Favorites').orderByChild("user").equalTo(use).once('value', function (snapshot) {
    snapshot.forEach(childSnapshot => {
      if(childSnapshot.val().Ad == ad ){
        check = true;
        alert("This ad is already in your favourits");
        window.location.reload();
      }
    });
  });
  setTimeout(function(){
    if(check == false){
      var data = {
        user: use,
        Ad: ad,
      };
      var ref = db.ref("Favorites");
      ref.push(data);
      alert("This ad is in your favourits now");
    }
  },3000);
  
}
