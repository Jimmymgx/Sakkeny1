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
var loc = window.location.href;
var params = loc.split('k=')[1];
Email.send({
  Host: "mail.sakkeny.com",
  Username: "ads@sakkeny.com",
  Password: "1-Sakkeny-1",
    To: email,
    From: "ads@sakkeny.com",
    Subject: "Congratulations!",
    Body: "Congratulations!"+ localStorage.getItem('nameForap') + "<br>Your Ad "+ t + " has been declared and uploaded to sakkeny. <br>You can check the numbers of viewers and your rating on your Ad.<br>To view your Ad please click<br>https://www.sakkeny.com/ads.html?k="+params + "<br>Please note that your Ad will be expired in 3 months starting now.<br>If your property has been sold/rented please notify us by clicking on the Sold icon located under your Ad, in order to remove the Ad.<br>If you wish to get in contact with Sakkeny team, please contact us on <br>https://www.sakkeny.com/contact.html <br> To see the Terms and conditions go to <br> https://sakkeny.com/terms-and-conditions.html <br> To see the privacy policy go to <br> https://sakkeny.com/privacy.html <br>Thanks for using Sakkeny.",
})
    .then(function (message) {
    //alert("mail sent successfully")
    window.location.href = "Dashboard.html";
    });
}
function sendM2(email, t){
var loc = window.location.href;
var params = loc.split('k=')[1];
var name = "";
firebase.database().ref("users").orderByChild("email").equalTo(email)
.once("value", function (snapshot) {
  snapshot.forEach((childSnapshot) => {
    var navname = childSnapshot.val().name.split(' ');
    name = navname[0];
    Email.send({
      Host: "mail.sakkeny.com",
      Username: "ads@sakkeny.com",
      Password: "1-Sakkeny-1",
        To: email,
        From: "ads@sakkeny.com",
        Subject: "Your request " + t,
        Body: "Dear "+name+ "<br>we are following up with you on your property listed on your wish list. <br>We were able to find a property that matches your wishlist, please find below what you were looking for <br> https://www.sakkeny.com/ads.html?k="+params +"<br> If you wish to get in contact with Sakkeny team, please contact us on <br>https://www.sakkeny.com/contact.html <br> To see the Terms and conditions go to <br> https://sakkeny.com/terms-and-conditions.html <br> To see the privacy policy go to <br> https://sakkeny.com/privacy.html <br> Thank you for using sakkeny.",
    })
        .then(function (message) {
        alert("mail sent successfully")
        });
  
  });
});
}
function checkRequests(country, city, location, unittype, unit, bedrooms, bathrooms, finishing, unitfor, payment, elevator, sec, air, greatView, fire, large, dog, play, swim, bbq, roof, main, beach, lake, nile, wifi, garden, sports, school, hospital, cafe, swimable, gym, sauna, price, area, bus, metro){
//alert('Under process');
//Current
firebase
.database()
.ref("requests")
.once("value", function (snapshot) {
  snapshot.forEach((childSnapshot) => {
    let k = childSnapshot.key;
    let loc = childSnapshot.val().location;
  let ci = childSnapshot.val().City;
  let cont = childSnapshot.val().Country;
  let bed = childSnapshot.val().bedRooms;
  let bath = childSnapshot.val().bathRooms;
  let finish = childSnapshot.val().Finishing;
  let iselevator = childSnapshot.val().elevator;
  let issec = childSnapshot.val().secure;
  let isair = childSnapshot.val().Air;
  let isbus = childSnapshot.val().bus;
  let ismetro = childSnapshot.val().metro;
  let isgreatView = childSnapshot.val().greatView;
  let isfire = childSnapshot.val().fire;
  let islarge = childSnapshot.val().largeWindow;
  let isdog = childSnapshot.val().dogParks;
  let isplay = childSnapshot.val().playGround;
  let isswim = childSnapshot.val().swimmingPool;
  let isbbq = childSnapshot.val().bbq;
  let isroof = childSnapshot.val().roof;
  let ismain = childSnapshot.val().mainStreet;
  let isbeach = childSnapshot.val().beachfront;
  let islake = childSnapshot.val().lake;
  let isnile = childSnapshot.val().nile;
  let iswifi = childSnapshot.val().wifi;
  let isgarden = childSnapshot.val().garden;
  let issports = childSnapshot.val().sportsClup;
  let isschool = childSnapshot.val().school;
  let ishospital = childSnapshot.val().hospital;
  let iscafe = childSnapshot.val().cafe;
  let isswimable = childSnapshot.val().swimable;
  let isgym = childSnapshot.val().gym;
  let issauna = childSnapshot.val().sauna;
  let fr = childSnapshot.val().priceFrom;
  let t = childSnapshot.val().priceTo;
  let frarea = childSnapshot.val().areaFrom;
  let tarea = childSnapshot.val().areaTo;
  let usermail = childSnapshot.val().UserID;
  let ty = childSnapshot.val().Type;
  let u = childSnapshot.val().UnitType;
  let isflat = childSnapshot.val().Unit;
  let pay = childSnapshot.val().payment;
  var ele = "";
var se= "";
var ai = "";
var greatVie = "";
var fir = "";
var larg = "";
var dogg = "";
var pla = "";
var swi = "";
var bb = "";
var roo = "";
let mai = "";
let beac = "";
let lak = "";
let nil = "";
let wif = "";
let garde = "";
let sport = "";
let schoo = "";
let hospita = "";
let caf = "";
let swimmabl = "";
let gy = "";
let saun = "";
let bu = "";
let me = "";
if (isair == false) {
ai = air;
}
else{ai= isair;}
if (isbus == false) {
bu = bus;
}
else{bu= isbus;}
if (ismetro == false) {
me = metro;
}
else{me= ismetro;}
if (iselevator == false) {
ele = elevator;
}
else{ele = iselevator;}
if (isbbq == false) {
bb = bbq;
}
else{bb = isbbq;}
if (isdog == false) {
dogg = dog;
}
else{dog = isdog;}
if (isfire == false) {
fir = fire;
}
else{fir = isfire;}
if (isgreatView == false) {
greatVie = greatView;
}
else{greatVie = isgreatView;}
if (islarge == false) {
larg = large;
}
else{larg = islarge;}
if (isplay == false) {
pla = play;
}
else{pla = isplay;}
if (isroof == false) {
roo = roof;
}
else{roo = isroof;}
if (issec == false) {
se = sec;
}
else{se = issec;}
if (isswim == false) {
swi = swim;
}
else{swi = isswim;}
if (ismain == false) {
mai = main;
}
else{mai = ismain;}
if (isbeach == false) {
beac = beach;
}
else{beac = isbeach;}
if (islake == false) {
lak = lake;
}
else{lak = islake;}
if (isnile == false) {
nil = nile;
}
else{nil = isnile;}
if (iswifi == false) {
wif = wifi;
}
else{wif = iswifi;}
if (isgarden == false) {
garde = garden;
}
else{garde = isgarden;}
if (issports == false) {
sport = sports;
}
else{sport = issports;}
if (isschool == false) {
schoo = school;
}
else{schoo = isschool;}
if (ishospital == false) {
hospita = hospital;
}
else{hospita = ishospital;}
if (iscafe == false) {
caf = cafe;
}
else{caf = iscafe;}
if (isswimable == false) {
swimmabl = swimable;
}
else{swimmabl = isswimable;}
if (isgym == false) {
gy = gym;
}
else{gy = isgym;}
if (issauna == false) {
saun = sauna;
}
else{saun = issauna;}
if(loc == ""){
loc = location
}
if(ci == ""){
ci = city;
}
if(cont == ""){
cont = country;
}
if(bed == ""){
bed = bedrooms;
}
if(bath == ""){
bath = bathrooms
}
if(finish == ""){
finish = finishing;
}
if(fr == "" && t == ""){
fr = Number.MIN_VALUE;
t = Number.MAX_VALUE;
}
else{
fr = parseInt(fr);
t = parseInt(t);
}
if(frarea == "" && tarea == ""){
frarea = Number.MIN_VALUE;
tarea = Number.MAX_VALUE;
}
else{
frarea = parseInt(frarea);
tarea = parseInt(tarea);
}
if(ty == ""){
ty = unitfor;
}
if(u == ""){
u = unittype;
}
if(isflat == ""){
isflat = unit;
}
if(pay == ""){
pay = payment;
}
if(cont == country){
if(ci == city){
  console.log(ci + city);
  if(ty == unitfor){
    console.log(ty + unitfor);
    price = parseInt(price);
    if(price >= fr && price <= t){
      console.log(price);
      if(u == unittype){
        console.log(u + unittype);
        if(ai == air){
          console.log(ai + air);
          if(ele == elevator){
            console.log(ele + elevator);
            if(bb == bbq){
              console.log(bb + bbq);
              if(dogg == dog){
                console.log(dogg + dog);
                if(fir == fire){
                  console.log(fir + fire);
                  if(greatVie == greatView){
                    console.log(greatVie + greatView);
                    if(larg == large){
                      console.log(larg + large);
                      if(pla == play){
                        console.log(pla + play);
                        if(roo == roof){
                          console.log(roo + roof);
                          if(se == sec){
                            console.log(se + sec);
                            if(swi == swim){
                              console.log(swi + swim);
                              if(mai == main){
                                console.log(mai + main);
                                if(beac == beach){
                                  console.log(beac + beach);
                                  if(lak == lake){
                                    console.log(lak + lake);
                                    if(nil == nile){
                                      console.log(nil + nile);
                                      if(wif == wifi){
                                        console.log(wif + wifi);
                                        if(garde == garden){
                                          console.log(garde + garden);
                                          if(sport == sports){
                                            console.log(sport + sports);
                                            if(schoo == school){
                                              console.log(schoo + school);
                                              if(hospita == hospital){
                                                console.log(hospita + hospital);
                                                if(caf == cafe){
                                                  console.log(caf + cafe);
                                                  if(swimmabl == swimable){
                                                    console.log(swimmabl + swimable);
                                                    if(gy == gym){
                                                      console.log(gy + gym);
                                                      if(saun == sauna){
                                                        console.log(saun + sauna);
                                                        if(loc == location){
                                                          console.log(loc + location);
                                                          if(isflat == unit){
                                                            console.log(isflat + unit);
                                                            if(pay == payment || payment == "Both"){
                                                              area = parseInt(area);
                              if(area >= frarea && area <= tarea){
                                if(finish == finishing){
                                  if(bed == bedrooms){
                                    if(bath == bathrooms){
                                      if(bu == bus){
                                        if(me == metro){
                                          sendM2(usermail, k);                                 
                                        }
                                      }
                                      
                                    }
                                  }
                                  
                                }
                                
                              }
                                                              
                                                            }
                                                            
                                                          }
                                                          
                                                        }
                                                        
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                  
              }
            }
          }
        }
        
      }
      
      }
    }
  }
}

  });
});
}
function Accept(){
  ref1.orderByKey().equalTo(localStorage.getItem('appID')).once('value', function (snapshot) {
      snapshot.forEach(childSnapshot => {
        childSnapshot.ref.update({ Accepted: "Yes" });
        var title = childSnapshot.val().Title;
        sendMail(localStorage.getItem('email'), title);
        let location = childSnapshot.val().location;
        let country = childSnapshot.val().Country;
        let city = childSnapshot.val().City;
        let bedrooms = childSnapshot.val().bedRooms;
        let bathrooms = childSnapshot.val().bathRooms;
        let finishing = childSnapshot.val().Finishing;
        let elevator = childSnapshot.val().elevator;
        let sec = childSnapshot.val().secure;
        let air = childSnapshot.val().Air;
        let greatView = childSnapshot.val().greatView;
        let fire = childSnapshot.val().fire;
        let bus = childSnapshot.val().bus;
        let metro = childSnapshot.val().metro;
        let large = childSnapshot.val().largeWindow;
        let dog = childSnapshot.val().dogParks;
        let play = childSnapshot.val().playGround;
        let swim = childSnapshot.val().swimmingPool;
        let bbq = childSnapshot.val().bbq;
        let roof = childSnapshot.val().roof;
        let main = childSnapshot.val().mainStreet;
        let beach = childSnapshot.val().beachfront;
        let lake = childSnapshot.val().lake;
        let nile = childSnapshot.val().nile;
        let wifi = childSnapshot.val().wifi;
        let garden = childSnapshot.val().garden;
        let sports = childSnapshot.val().sportsClup;
        let school = childSnapshot.val().school;
        let hospital = childSnapshot.val().hospital;
        let cafe = childSnapshot.val().cafe;
        let swimable = childSnapshot.val().swimable;
        let gym = childSnapshot.val().gym;
        let sauna = childSnapshot.val().sauna;
        let price = childSnapshot.val().price;
        let area = childSnapshot.val().area;
        let unitfor = childSnapshot.val().Type;
        let unittype = childSnapshot.val().UnitType;
        let unit = childSnapshot.val().Unit;
        let payment = childSnapshot.val().payment;
        checkRequests(country, city, location,unittype, unit, bedrooms, bathrooms, finishing, unitfor, payment, elevator, sec, air, greatView, fire, large, dog, play, swim, bbq, roof, main, beach, lake, nile, wifi, garden, sports, school, hospital, cafe, swimable, gym, sauna, price, area, bus, metro);
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