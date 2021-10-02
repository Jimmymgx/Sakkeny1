var db = firebase.database();
document.getElementById("fav").addEventListener("click", addToFav);
function addToFav() {
  console.log("HHH");
  var use = localStorage.getItem("currMail");
  var ad = localStorage.getItem("appID");
  if (use == ""){
    alert("in order to add a favorite property please sign up or log in to your account");
  }
  else{
      var data = {
        user: use,
        Ad: ad,
      };
      var ref = db.ref("Favorites");
      ref.push(data);
      window.location.reload();
    }
}
