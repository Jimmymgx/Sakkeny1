console.log(localStorage.getItem('appID'));
document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
   event.preventDefault();
   document.getElementById("add2").click();
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
var ref = firebase.database().ref('Ads');


function fetchAllData(){
    ref.orderByKey().equalTo(localStorage.getItem('appID')).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
            document.getElementById("title").value = childSnapshot.val().Title;
            document.getElementById("comments").value = childSnapshot.val().Description;
            document.getElementById("area").value = (childSnapshot.val().area).replace('Meter','');;
          document.getElementById("loc").value = childSnapshot.val().location;
          document.getElementById("cities").value = childSnapshot.val().City;
          document.getElementById("finish").value = childSnapshot.val().Finishing;
          document.getElementById("floor").value = childSnapshot.val().floor;
          document.getElementById("bed").value = childSnapshot.val().bedRooms;
          document.getElementById("bath").value = childSnapshot.val().bathRooms;
          if(childSnapshot.val().Type == "Rent"){document.getElementById("rent").checked = true}
          else{
            document.getElementById("sale").checked = true;
          }
          if(childSnapshot.val().bbq == "false"){document.getElementById("IsBbq").checked = false}
          else{
            document.getElementById("IsBbq").checked = true;
          }
          if(childSnapshot.val().dogParks== false){document.getElementById("IsDog").checked = false}
          else{document.getElementById("IsDog").checked = true}
          if(childSnapshot.val().elevator == false){document.getElementById("IsElevator").checked = false}
          else{document.getElementById("IsElevator").checked = true}
          if(childSnapshot.val().fire== false){document.getElementById("IsFire").checked = false}
          else{
            document.getElementById("IsFire").checked = true;
          }
          if(childSnapshot.val().greatView== false){document.getElementById("IsGreat").checked = false}
          else{
            document.getElementById("IsGreat").checked = true;
          }
          if(childSnapshot.val().largeWindow== false){document.getElementById("IsLarge").checked = false}
          else{
            document.getElementById("IsLarge").checked = true;
          }
          if(childSnapshot.val().playGround== false){document.getElementById("IsPlay").checked = false}
          else{
            document.getElementById("IsPlay").checked = true;
          }
          if(childSnapshot.val().Air== false){document.getElementById("IsAir").checked = false}
          else{
            document.getElementById("IsAir").checked = true;
          }
          if(childSnapshot.val().roof== false){document.getElementById("IsRoof").checked = false}
          else{
            document.getElementById("IsRoof").checked = true;
          }
          if(childSnapshot.val().secure== false){document.getElementById("IsSecure").checked = false}
          else{
            document.getElementById("IsSecure").checked = true;
          }
          if(childSnapshot.val().swimmingPool== false){document.getElementById("IsSwim").checked = false}
          else{
            document.getElementById("IsSwim").checked = true;
          }
          document.getElementById("price").value = (childSnapshot.val().price).replace('EGP / monthly','');
        })
    });
}
function getch(id){
    check = document.getElementById(id);
    var val = false;
    if(check.checked){
      val = check.value;
    }
    return val;
  }
  function checkValidity(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("comments").value;
    var loc = document.getElementById("loc").value;
    var city = document.getElementById("cities").value;
    var flr = document.getElementById("floor").value;
    var bed = document.getElementById("bed").value;
    var bath = document.getElementById("bath").value;
    var finish = document.getElementById("finish").value;
    var pric = document.getElementById("price").value;
    var are = document.getElementById("area").value;
    var Rent = document.getElementById("rent").checked;
    var Sale = document.getElementById("sale").checked;
    if (title != ""){
      if(desc != ""){
        if(city != ""){
          if(loc != ""){
            if(flr != ""){
              if(!isNaN(flr)){
                if(bed != ""){
                  if(bath != ""){
                    if(finish != ""){
                      if(pric != ""){
                        if(!isNaN(pric)){
                          if(are != ""){
                            if(!isNaN(are)){
                              if(Sale == true || Rent == true){
                                EditAd();
                              }
                              else{
                                alert("You have to Specify is that Apartment for rent or sale");
                              }
                                
                            }
                            else{
                              alert("Invalid Area");
                            }
                          }
                          else{
                            alert("You have to add The Area");
                          }
                        }
                        else{
                          alert("Invalid price");
                        }
                      }
                      else{
                        alert("You have to add The Price");
                      }
                    }
                    else{
                      alert("You have to add The finishing");
                    }
                  }
                  else{
                    alert("You have to add The number of bathrooms");
                  }
                }
                else{
                  alert("You have to add The number of bedrooms");
                }
              }
              else{
                alert("Invalid floor input");
              }
            }
            else{
              alert("You have to add The floor");
            }
          }
          else{
            alert("You have to add Location");
          }
        }
        else{
          alert("You have to choose city");
        }
      }
      else{
        alert("You have to add Description");
      }
    }
    else{
      alert("You have to add Title");
    }
  }
  function EditAd (){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
          var user = firebase.auth().currentUser;
          var currentusermail = user.email;
          console.log(currentusermail);
          
      
  var title = document.getElementById("title").value;
  var desc = document.getElementById("comments").value;
  var loc = document.getElementById("loc").value;
  var city = document.getElementById("cities").value;
  var flr = document.getElementById("floor").value;
  var bed = document.getElementById("bed").value;
  var bath = document.getElementById("bath").value;
  var finish = document.getElementById("finish").value;
  var iselevator = getch("IsElevator");
  var issec = getch("IsSecure");
  var isair = getch("IsAir");
  var isgreatView = getch("IsGreat");
  var isfire = getch("IsFire");
  var islarge = getch("IsLarge");
  var isdog = getch("IsDog");
  var isplay = getch("IsPlay");
  var isswim = getch("IsSwim");
  var isbbq = getch("IsBbq");
  var isroof = getch("IsRoof");
  var pric = document.getElementById("price").value;
  var secondprice = pric ;
  var are = document.getElementById("area").value;
  var secondarea = are + " Meter";
  ref.orderByKey().equalTo(localStorage.getItem('appID')).once('value', function (snapshot) {
    snapshot.forEach(childSnapshot => {
        var data = {
            location: loc,
            City: city,
            floor: flr,
            bedRooms : bed,
            bathRooms: bath,
            Finishing: finish,
            elevator: iselevator,
            secure : issec,
            Air: isair,
            greatView: isgreatView,
            fire: isfire,
            largeWindow: islarge,
            dogParks: isdog,
            playGround: isplay,
            swimmingPool: isswim,
            bbq: isbbq,
            roof: isroof,
            price: secondprice,
            area: secondarea,
            UserID: currentusermail,
            Title: title,
            Description: desc
          }
          childSnapshot.ref.update(data);
    })});
  

  alert("suc");
  makeLoader();
  setTimeout(function(){window.location.href = "MyAccount.html"; },3000);
}
});
  }
  function makeLoader(){
    
    document.getElementById("bo").innerHTML = "";
    var main = document.createElement("div");
    main.classList.add("toWait");
    var text = document.createElement("h1");
    text.innerHTML = "Your Ad is uploading now <br/>Please Wait ......";
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
document.getElementById("add").addEventListener("click", checkValidity);
if (window.addEventListener) {
    window.addEventListener('load', fetchAllData());
} else if (window.attachEvent) {
    window.attachEvent('onload', fetchAllData());
} else {
    window.onload = fetchAllData();
}