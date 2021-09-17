var firebaseConfig = {
  apiKey: "AIzaSyAuRCwuZPB4s43vBNhuv8A7jWNyD3qQUKU",
  authDomain: "sakkenyproject.firebaseapp.com",
  databaseURL: "https://sakkenyproject-default-rtdb.firebaseio.com",
  projectId: "sakkenyproject",
  storageBucket: "sakkenyproject.appspot.com",
  messagingSenderId: "407960924893",
  appId: "1:407960924893:web:c1a7b36d984f67469f6134",
  measurementId: "G-SSL0VK1HTY",
};

var city = "";
var type = "";
var unit ="";
var from = "";
var to = "";
var kk = "";
var type2 = "";
function checkTime(str){
  var today = new Date();
  dayToday = today.getDate();
  monthToday = today.getMonth() + 1;
  yearToday = today.getFullYear();

  //var str = document.getElementById("in").value;
  var myArr = str.split("-", 3);
  var dayEnd = parseInt(myArr[2]);
  var monthEnd = parseInt(myArr[1]);
  var yearEnd = parseInt(myArr[0]);
  if(yearToday > yearEnd){
      //console.log("false");
      return false;
  }
  else if(yearToday == yearEnd){
      if(monthToday > monthEnd){
          //console.log("false");
          return false;
      }
      else if(monthToday == monthEnd){
          if(dayToday >= dayEnd){
              //console.log("false");
              return false;
          }
          else{
              //console.log("true");
              return true;
          }
      }
      else{
          //console.log("true");
          return true;
      }
  }
  else{
      //console.log("true");
      return true;
  }
}
  function delStor(vv){
  img = firebase.storage().refFromURL(vv);
          img.delete()
          .then(() => {
          //console.log("Picture is deleted successfully!");
          })
          .catch((err) => {
          console.log(err);
          });
}
function Delete(){
  firebase.database().ref('Ads').orderByKey().equalTo(kk).once('value', function (snapshot) {
      snapshot.forEach(childSnapshot => {
      childSnapshot.ref.remove();
      });
  });
  firebase.database().ref('images').orderByChild("main").equalTo(kk).once('value', function (snapshot){
      snapshot.forEach(childSnapshot => {
          delStor(childSnapshot.val().link);
          childSnapshot.ref.remove();
      });
  });    
}
function check(){  
  window.scrollTo(0, 800);

    var ci = document.getElementById("cities").value;
    var ty = document.getElementById("type").value;
    var fr = document.getElementById("from").value;
    var t = document.getElementById("to").value;
    var u = document.getElementById('unit').value;
    if(ci == "" && ty == "" && fr == "" && t == "" && u == ""){
      alert('You have to Make the filter');
      window.scrollTo(0, 300);
    }

    else{
      if(fr == "" && t == ""){
        fetchData();
      }
      else{
        if(fr == "" || t == ""){
          alert("This is wrong you have to enter a range of price");
        }
        else {
          if(!isNaN(fr)){
            if(!isNaN(t)){
             if (t > fr){
              fetchData();
             }
             else{
               alert("The to is must be higher than from");
             }
            }  
            else{
              alert("Invalid input in to fieled");  
            }
          }
          else{
            alert("Invalid input in from fieled");
          }
        }
      }
    }
    
}
function AddAds(title, description, time, location, appID, price, image, name,type) {
  var divSize = document.createElement('div');
  var divSer = document.createElement('div');
  var divMain = document.createElement('div');
  var divWrap = document.createElement('div');
  var adFig = document.createElement('figure');
  var adlink = document.createElement('a');
  var adlinkIcon = document.createElement('i');
  var adImg = document.createElement('img');
  var divLabel = document.createElement('div');
  
  var divPrice = document.createElement('div');
  var spanPrice = document.createElement('span');
  var divBody = document.createElement('div');
  var Title = document.createElement('h3');
  var divDesc = document.createElement('div');
  var Desc = document.createElement('p');
  var divAddress = document.createElement('div');
  var addrsIcon = document.createElement('i');
  var divFoot = document.createElement('div');
  var divLeft = document.createElement('div');
  var spanLeft = document.createElement('span');
  var leftIcon = document.createElement('i');
  var divRight = document.createElement('div');
  var spanRight = document.createElement('span');
  var rightIcon = document.createElement('i');
  var Location = document.createElement('text');
  //var accept = document.createElement('button');
  //var decline = document.createElement('button');


  divSize.setAttribute('class', 'col-md-4 col-sm-12 col-xs-12');
  divSer.setAttribute('class', 'service-widget box');
  divMain.setAttribute('class', 'property-main');
  divWrap.setAttribute('class', 'property-wrap');
  adFig.setAttribute('class', 'post-media wow fadeIn');
  adlink.setAttribute('data-rel', 'prettyPhoto[gal]');
  adlink.setAttribute('class', 'hoverbutton global-radius');
  adlink.setAttribute('href', image);
  //accept.setAttribute('type','button');
  //accept.classList.add('btn','btn-success' ,'btn-lg', 'fa','fa-check','col-md-6','col-sm-6','col-xs-12');
  //decline.classList.add('btn', 'btn-danger','btn-lg' , 'fa','fa-times','col-md-6','col-sm-6','col-xs-12');


  adlinkIcon.setAttribute('class', 'flaticon-unlink');
  adImg.setAttribute('src', image);
  adImg.setAttribute('class', 'img-responsive');
  divLabel.setAttribute('class', 'label-inner');
  
  divPrice.setAttribute('class', 'price');
  spanPrice.setAttribute('class', 'item-sub-price');
  divBody.setAttribute('class', 'item-body');
  divDesc.setAttribute('class', 'info');
  divAddress.setAttribute('class', 'adderess');
  addrsIcon.classList.add('fa', 'fa-map-pin');
  addrsIcon.setAttribute('aria-hidden', 'true');
  divFoot.setAttribute('class', 'item-foot');
  divLeft.setAttribute('class', 'pull-left');
  spanLeft.setAttribute('class', 'prop-user-agent');

  leftIcon.classList.add('fa', 'fa-user');
  leftIcon.setAttribute('aria-hidden', 'true');
  divRight.classList.add('pull-right');
  spanRight.classList.add('prop-date');
  rightIcon.classList.add('fa', 'fa-calendar');
  rightIcon.setAttribute('aria-hideen', 'true');
  Desc.innerHTML = description.substring(0, 100);
  Title.innerHTML = title;
  Location.innerHTML = location.substring(0, 40);
  spanPrice.innerHTML = price;
  adFig.style.display ='flex';
  adFig.style.justifyContent = 'center';
  adFig.style.alignItems = 'center';
  adFig.style.overflow = 'hidden';
  adImg.style.flexShrink ='0';
  adImg.style.Width = '100%';
  //adImg.style.maxHeight = '100%';
  adFig.style.height = '250px';
  
  adlink.appendChild(adlinkIcon);
  
  divPrice.appendChild(spanPrice);
  adFig.appendChild(adlink);
  adFig.appendChild(adImg);
  adFig.appendChild(divLabel);
  adFig.appendChild(divPrice);
  divDesc.appendChild(Desc);
  divAddress.appendChild(addrsIcon);
  divAddress.appendChild(Location);
  divBody.appendChild(Title);
  divBody.appendChild(divDesc);
  divBody.appendChild(divAddress);
  spanLeft.appendChild(leftIcon);
  let t = document.createElement('small');
  t.setAttribute('class','testi-meta text-muted');
  t.innerHTML = " By " +type;
  spanLeft.append(name);
  spanLeft.appendChild(t);
  divLeft.appendChild(spanLeft);
  spanRight.appendChild(rightIcon);
  spanRight.append(time);
  divRight.appendChild(spanRight);
  divFoot.appendChild(divLeft);
  divFoot.appendChild(divRight);
  divWrap.appendChild(adFig);
  divWrap.appendChild(divBody);
  divWrap.appendChild(divFoot);
  divMain.appendChild(divWrap);
  divSer.appendChild(divMain);
  //divSer.appendChild(accept);
  //divSer.appendChild(decline);
  divSize.setAttribute('style','margin-bottom: 30px;');
  divSize.appendChild(divSer);
  
  divSize.addEventListener('click', function () {
      localStorage.setItem('appID', appID);
      window.document.location = './ads.html';
  });

  document.getElementById('adHeader').appendChild(divSize);
}

function fetchData() {
  var num = 0;
  var counter = 0;
  var counter2 = 0;
  var ci = document.getElementById("cities").value;
  var ty = document.getElementById("type").value;
  var fr = document.getElementById("from").value;
  var t = document.getElementById("to").value;
  var u = document.getElementById("unit").value;
  var Pr = "";
  var typ = document.getElementById("unit").value;
  firebase
    .database()
    .ref("Ads")
    .once("value", function (snapshot) {
      num = snapshot.numChildren();
      console.log(num);
      snapshot.forEach((childSnapshot) => {
        kk = childSnapshot.key;
        if(ci == ""){city = childSnapshot.val().City;}
          else{city = ci;
          }
          if(ty == ""){type = childSnapshot.val().Type;}
          else{type = ty;
          }
          if(fr == "" && t == ""){
            from = Number.MIN_VALUE;
            to = Number.MAX_VALUE;
          }
          else{
            from = parseInt(fr);
            to = parseInt(t);
          }
          if(u==""){unit = childSnapshot.val().unit}
          else{unit =u;
          }
          if(typ == ""){type2 = childSnapshot.val().UnitType;}
          else{type2 = typ;
            }
        if(childSnapshot.val().Accepted == "Yes"){
          if(checkTime(childSnapshot.val().DeadLine)){
            if(childSnapshot.val().City == city){
              if(childSnapshot.val().Type == type){
                Pr = parseInt(childSnapshot.val().price);
                if(Pr >= from && Pr <= to){
                  if(childSnapshot.val().UnitType == type2){
                    counter += 1;
                    let title = childSnapshot.val().Title;
                  let description = childSnapshot.val().Description;
                  let time = childSnapshot.val().Time;
                  let appID = childSnapshot.key;
                  let location = childSnapshot.val().location;
                  let price = childSnapshot.val().price;
                  let mail = childSnapshot.val().UserID;
                  var image = "";
                  firebase
                    .database()
                    .ref("images")
                    .orderByChild("main")
                    .equalTo(appID)
                    .once("value", function (snapshot) {
                      snapshot.forEach((childSnapshot) => {
                        if(childSnapshot.val().Des != "Contract"){
                          image = childSnapshot.val().link;
                      console.log(image);
                      return
                      }
                      });
                    });
                  firebase
                    .database()
                    .ref("users")
                    .orderByChild("email")
                    .equalTo(mail)
                    .once("value", function (snapshot) {
                      snapshot.forEach((childSnapshot) => {
                        let Name = childSnapshot.val().name;
                        let type = childSnapshot.val().type;
                        console.log(Name);
                        
                        
                        AddAds(
                          title,
                          description,
                          time,
                          location,
                          appID,
                          price,
                          image,
                          Name,
                          type
                        );
                        check2(counter);
                      });
                    });
                  }
                  
                  }
                }
              }
          }
          else{
            Delete();
          }
        }
        counter2 += 1;
      console.log(counter2);
      console.log(num);
      if(counter2 == num){
        check2(counter);
      }
      });      
    });
}

function check2(para){
  if(para < 1){
    document.getElementById('noRes').style.display = "block";
  }
  if(para > 0){
    document.getElementById('noRes').style.display = "none";
  }
}
function clear2(){
  document.getElementById('noRes').style.display = "none";

}
function clear() {
  document.getElementById("adHeader").innerHTML = "";
}
document.getElementById("search").addEventListener("click", check);
document.getElementById("search").addEventListener("click", clear);
document.getElementById("search").addEventListener("click", clear2);
