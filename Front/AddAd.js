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
var stor = firebase.storage();
var number = 0;
var counter = 0;
function sendM(email, t){
        Email.send({
            Host: "smtp.gmail.com",
            Username: "Sakkenyads@gmail.com",
            Password: "1122334411",
            To: email,
            From: "SakkenyAds@gmail.com",
            Subject: "Your Ad " + t,
            Body: "Your Ad "+ t + " has been uploaded now it'll be confirmed or declined in 48 hours",
        })
            .then(function (message) {
            //alert("mail sent successfully")
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
    var numberOfFiles = document.getElementById('images').files.length;
    var numberOfFiles2 = document.getElementById('CnotractImg').files.length;
    var unitt = document.getElementById("unitType").value;
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
                              if(Sale == true || Rent == true) {
                                if(numberOfFiles <= 10){
                                  if(numberOfFiles != 0){
                                    if(numberOfFiles2 != 0){
                                      if (unitt != ""){
                                        addAd();
                                      }
                                      else{
                                        alert("You have to choose the unit type");
                                      }
                                    }
                                    else{
                                      alert("You have to upload Appartment contract OR Electricity bill");
                                    }
                                  }
                                  else{
                                    alert("You have to upload at least 1 image to the Ad");
                                  }
                                  
                                }
                                else{
                                  alert("The maximum number of images to the Ad is 10 images");
                                }
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
  function uploadImages(Id){
    var numberOfFiles = document.getElementById('images').files.length;
    //window.alert("Number of pictures for ad is : " + numberOfFiles);
    let arr = [];
    let names = [];
    for(var i = 0; i < numberOfFiles; i++){
        var image = document.getElementById('images').files[i];
        arr.push(image);
        names.push(image.name);
    }
    if (arr.length >=  1) {
        const links = [];
        for (let i = 0; i < arr.length; i++) {
          stor.ref(`images/${arr[i].name}`).put(arr[i]).then(data => {
            data.ref.getDownloadURL().then(url => {
                // do whatever you want with url
                console.log(url)
                counter += 1;
                console.log(counter);
                var data2 = {
                main : Id,
                link : url,
                Des : "Img"
            }
            var ref2 = db.ref("images");
            ref2.push(data2);
            if (parseInt(counter) == parseInt(number)){
              console.log("True");
              console.log(counter);
              console.log(number);
              setTimeout(function(){window.location.href = "PendingAds.html"; },3000);
            }
            });
        });
        
        }
        }
          }
          function uploadContractImage(Id){
            var numberOfFiles = document.getElementById('CnotractImg').files.length;
            //window.alert("Number of pictures for Contract is : " + numberOfFiles);
            let arr = [];
            let names = [];
            for(var i = 0; i < numberOfFiles; i++){
                var image = document.getElementById('CnotractImg').files[i];
                arr.push(image);
                names.push(image.name);
            }
            if (arr.length >= 1) {
                const links = [];
                for (let i = 0; i < arr.length; i++) {
                  stor.ref(`images/${arr[i].name}`).put(arr[i]).then(data => {
                    data.ref.getDownloadURL().then(url => {
                        // do whatever you want with url
                        console.log(url)
                        counter += 1;
                        console.log(counter);
                        var data3 = {
                        main : Id,
                        link : url,
                        Des : "Contract"
                    }
                    var ref3 = db.ref("images");
                    ref3.push(data3);
                    if (parseInt(counter) == parseInt(number)){
                      console.log("True");
                      console.log(counter);
                      console.log(number);
                      setTimeout(function(){window.location.href = "PendingAds.html"; },3000);
                    }
                    });
                });
                
                }
                }
                  }
  function addAd (){
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
  var Typ = "";
  if(document.getElementById("rent").checked){
    Typ = "Rent";
  }
  else{
    Typ = "Sale";
  }
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
  var secondprice = pric;
  var are = document.getElementById("area").value;
  var secondarea = are + " Meter";
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var dead = today.getFullYear()+'-'+(today.getMonth()+4)+'-'+today.getDate();
  var unitt = document.getElementById("unitType").value;
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
    Description: desc,
    IsDone: "Flase",
    Time : date,
    DeadLine : dead,
    NumOfViews: '0',
    Accepted: "No",
    Type: Typ,
    UnitType: unitt
  }
  var ref = db.ref("Ads");
  newRef = ref.push(data);
  var newID = newRef.getKey();
  console.log(newID);
  uploadImages(newID);
  uploadContractImage(newID);
  //alert("suc");
  //document.getElementById("add").style.display = "none";
  //document.getElementById("up").style.display = "block";
  var seconds = (numberOfFiles = document.getElementById('images').files.length * 5000) + 5000;
  number = document.getElementById('images').files.length + 1;
  makeLoader();
  sendM(currentusermail, title);
  //setTimeout(function(){window.location.href = "PendingAds.html"; },seconds);

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
document.getElementById("add2").addEventListener("click", checkValidity);
//document.getElementById("setActive").addEventListener("click", makeLoader);