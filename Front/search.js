
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
localStorage.setItem('count', 0);
var cntry = "";
var city = "";
var type = "";
var unit ="";
var loca = "";
var from = "";
var to = "";
var fromArea = "";
var toArea = "";
var kk = "";
var type2 = "";
var finishing = "";
var bedrooms = "";
var bathrooms = "";
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
function getch(id){
  check = document.getElementById(id);
  var val = false;
  if(check.checked){
    val = check.value;
  }
  return val;
}
function check(){  
  
  //document.getElementById('loading').style.display = "block";
  var country = document.getElementById('countries').value;
  var pay  = document.getElementById("Pay").value;
  var isflat = document.getElementById("unitType").value;
  var iselevator = getch("IsElevator");
  var issec = getch("IsSecure");
  var isair = getch("IsAir");
  var isbus = getch("IsBus");
  var ismetro = getch("IsMetro");
  var isgreatView = getch("IsGreat");
  var isfire = getch("IsFire");
  var islarge = getch("IsLarge");
  var isdog = getch("IsDog");
  var isplay = getch("IsPlay");
  var isswim = getch("IsSwim");
  var isbbq = getch("IsBbq");
  var isroof = getch("IsRoof");
  var ismain = getch("IsMain");
  var isbeach = getch("IsBeach");
  var islake = getch("IsLake");
  var isnile = getch("IsNile");
  var iswifi = getch("IsWifi");
  var isgarden = getch("IsGarden");
  var issports = getch("IsSports");
  var isschool = getch("IsSchool");
  var ishospital = getch("IsHospital");
  var iscafe = getch("IsCafe");
  var isswimable = getch("IsSwimable");
  var isgym = getch("IsGym");
  var issauna = getch("IsSauna");
    var loc = document.getElementById("locations").value; 
    var ci = document.getElementById("cities").value;
    var ty = document.getElementById("type").value;
    var fr = document.getElementById("from").value;
    var t = document.getElementById("to").value;
    var frarea = document.getElementById("fromArea").value;
    var tarea = document.getElementById("toArea").value;
    var u = document.getElementById('unit').value;
    var finish = document.getElementById('finish').value;
    var bed = document.getElementById("bed").value;
    var bath = document.getElementById("bath").value;
    if(ci == "" && ty == "" && fr == "" && t == "" && u == "" && iselevator == false && issec == false && isair == false && isgreatView == false && isfire == false && islarge == false && isdog == false && isplay == false && isswim == false && isbbq == false && isroof == false && loc == "" && isflat == "" && (pay == "" || pay == "Both") && frarea == "" && tarea == "" && finish == "" && bed == "" && bath == "" && ismain == false && isbeach == false && islake == false && isnile == false && iswifi == false && isgarden == false && issports == false && isschool == false && ishospital == false && iscafe == false && isswimable == false && isgym == false && issauna == false && country == "" && isbus == false && ismetro == false){
      //alert('You have to Make the filter');
      document.getElementById('errorT').innerHTML = "Error: please fill in the missing filters";
    document.getElementById('err').style.display = 'block';
    setTimeout(() => {
      document.getElementById('err').style.display = 'none';
    }, 5000);
      //window.scrollTo(0, 300);
    }

    else{
      if(fr == "" && t == "" && frarea == "" && tarea == ""){
        fetchData();
      }
      else if (fr == "" && t == "" ){
        if(frarea == "" || tarea == ""){
          document.getElementById('errorT').innerHTML = "Error: This is wrong you have to enter a range of Area";
    document.getElementById('err').style.display = 'block';
    setTimeout(() => {
      document.getElementById('err').style.display = 'none';
    }, 5000);
        }
        else {
          if(!isNaN(frarea)){
            if(!isNaN(tarea)){
             if (tarea >= frarea){
              fetchData();
             }
             else{
              document.getElementById('errorT').innerHTML = "Error: The up to is must be higher than from";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
               
             }
            }  
            else{
              document.getElementById('errorT').innerHTML = "Error: Invalid input in up to ";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
               
            }
          }
          else{
            document.getElementById('errorT').innerHTML = "Error: Invalid input in from ";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
          }
        }
      }
      else if (frarea == "" && tarea == ""){
        if(fr == "" || t == ""){
          document.getElementById('errorT').innerHTML = "Error: This is wrong you have to enter a range of price";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
        }
        else {
          if(!isNaN(fr)){
            if(!isNaN(t)){
             if (t >= fr){
              fetchData();
             }
             else{
              document.getElementById('errorT').innerHTML = "Error: The to is must be higher than from";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
               
             }
            }  
            else{
              document.getElementById('errorT').innerHTML = "Error: Invalid input in up to";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
                
            }
          }
          else{
            document.getElementById('errorT').innerHTML = "Error: Invalid input in from";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
          }
        }
      }
      else{
        if(fr == "" || t == ""){
          document.getElementById('errorT').innerHTML = "Error: This is wrong you have to enter a range of price";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
        }
        else {
          if(!isNaN(fr)){
            if(!isNaN(t)){
             if (t >= fr){
              if(frarea == "" && tarea == ""){
                fetchData();
              }
              else{
                if(frarea == "" || tarea == ""){
                  document.getElementById('errorT').innerHTML = "Error: This is wrong you have to enter a range of Area";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
                }
                else {
                  if(!isNaN(frarea)){
                    if(!isNaN(tarea)){
                     if (tarea >= frarea){
                      fetchData();
                     }
                     else{
                      document.getElementById('errorT').innerHTML = "Error: The to is must be higher than from";
                      document.getElementById('err').style.display = 'block';
                      setTimeout(() => {
                        document.getElementById('err').style.display = 'none';
                      }, 5000);
                     }
                    }  
                    else{
                      document.getElementById('errorT').innerHTML = "Error: Invalid input in up to";
                      document.getElementById('err').style.display = 'block';
                      setTimeout(() => {
                        document.getElementById('err').style.display = 'none';
                      }, 5000);
                    }
                  }
                  else{
                    document.getElementById('errorT').innerHTML = "Error: Invalid input in from ";
                      document.getElementById('err').style.display = 'block';
                      setTimeout(() => {
                        document.getElementById('err').style.display = 'none';
                      }, 5000);
                  }
                }
              }
             }
             else{
              document.getElementById('errorT').innerHTML = "Error: The to is must be higher than from";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
             }
            }  
            else{
              document.getElementById('errorT').innerHTML = "Error: Invalid input in to fieled";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
            }
          }
          else{
            document.getElementById('errorT').innerHTML = "Error: Invalid input in from fieled";
              document.getElementById('err').style.display = 'block';
              setTimeout(() => {
                document.getElementById('err').style.display = 'none';
              }, 5000);
          }
        }
      }
      
    }
    
}
function AddAds(title, description, time, location, appID, price, image, name,type, rating) {
  var divSize = document.createElement('div');
  var divSer = document.createElement('div');
  var divMain = document.createElement('div');
  var divWrap = document.createElement('div');
  var adFig = document.createElement('figure');
  var adlink = document.createElement('a');
  var adlinkIcon = document.createElement('i');
  var adImg = document.createElement('img');
  
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



  divSize.setAttribute('class', 'col-md-4 col-sm-12 col-xs-12');
  divSer.setAttribute('class', 'service-widget box');
  divMain.setAttribute('class', 'property-main');
  divWrap.setAttribute('class', 'property-wrap');
  adFig.setAttribute('class', 'post-media wow fadeIn');
  adFig.setAttribute('style','border-width: medium;')
  adlink.setAttribute('data-rel', 'prettyPhoto[gal]');
  adlink.setAttribute('class', 'hoverbutton global-radius');
  adlink.setAttribute('href', image);



  adlinkIcon.setAttribute('class', 'flaticon-unlink');
  adImg.setAttribute('src', image);
  adImg.setAttribute('class', 'img-responsive');

  
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
  Desc.innerHTML = description.substring(0, 40);
  Title.innerHTML = title.substring(0,40);
  Location.innerHTML = location.substring(0, 30);
  spanPrice.innerHTML = price;
  adFig.style.display ='flex';
  adFig.style.justifyContent = 'center';
  adFig.style.alignItems = 'center';
  adFig.style.overflow = 'hidden';
  adImg.style.flexShrink ='0';
  adImg.style.Width = '100%';
  //adImg.style.maxHeight = '100%';
  adFig.style.height = '250px';
  
  
  
  
  //adlink.appendChild(adlinkIcon);

  divPrice.appendChild(spanPrice);
  //adFig.appendChild(adlink);
  adFig.appendChild(adImg);
  
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
      let r = document.createElement('small');
      r.setAttribute('class','testi-meta text-muted');
      if(rating<=0){
          r.innerHTML =" Owner rate : " + '<span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'  
      }else if(rating>0 && rating<1){
          r.innerHTML =" Owner rate : " + '<span class="fa fa-star-half-o checked"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
      }else if(rating == 1){
          r.innerHTML =" Owner rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
      }
      else if(rating > 1 && rating<2){
          r.innerHTML =" Owner rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'  
      }else if(rating ==2){
          r.innerHTML = " Owner rate : " +'<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
      }
      else if (rating > 2 && rating <3){
          r.innerHTML = " Owner rate : " +'<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'  
      }else if(rating ==3){
          r.innerHTML =" Owner rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
      }
      else if (rating > 3 && rating <4){
          r.innerHTML =" Owner rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star"></span>'  
      }else if(rating ==4){
          r.innerHTML =" Owner rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>'   
      }
      else if (rating > 4 && rating <5){
          r.innerHTML =" Owner rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span>'  
      }else if (rating == 5){
          r.innerHTML =" Owner rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>'  
      }else{
          
          r.innerHTML =" Owner rate : " + '<span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'  
      
      }
      //r.innerHTML = " Rate : " +rating + " / 5";
      name1=name.split(' ');
      spanLeft.append(name1[0]);
      spanLeft.appendChild(t);
      
      /**let con = document.createElement('div');
      con.setAttribute("class", "rate");
      con.setAttribute("id", "rating") 
  let stars = document.createElement('i');
      stars.setAttribute('class','testi-meta text-muted');
      stars.innerHTML = '<input type="radio" id="star5" name="rate" value="5" style="display: none;" /> <label for="star5" title="text">5 stars</label> <input type="radio" id="star4" name="rate" value="4" style="display: none;"/><label for="star4" title="text">4 stars</label><input type="radio" id="star3" name="rate" value="3" style="display: none;"/><label for="star3" title="text">3 stars</label><input type="radio" id="star2" name="rate" value="2" style="display: none;"/><label for="star2" title="text">2 stars</label><input type="radio" id="star1" name="rate" value="1" style="display: none;"/><label for="star1" title="text">1 star</label>';
      con.appendChild(stars);
      spanRight.appendChild(con);**/
  divLeft.appendChild(spanLeft);
  spanRight.appendChild(rightIcon);
  spanRight.append(time);
  spanRight.appendChild(r);
  
  divRight.appendChild(spanRight);
  divFoot.appendChild(divLeft);
  divFoot.appendChild(divRight);
  divWrap.appendChild(adFig);
  divWrap.appendChild(divBody);
  divWrap.appendChild(divFoot);
  divMain.appendChild(divWrap);
  localStorage.setItem('count', parseInt(localStorage.getItem('count')) + 1);
        if(parseInt(localStorage.getItem('count')) >= 1){
            setTimeout(() => {
                document.getElementById('50%').style.display = 'none';    
            }, 1000);
            
            setTimeout(() => {
                document.getElementById('100%').style.display = 'block';    
            }, 1000);        }
        setTimeout(() => {
                document.getElementById('100%').style.display = 'none';    
            }, 1500);
  divMain.addEventListener('click', function () {
    localStorage.setItem('appID', appID);
    window.document.location = './ads.html?k='+appID;
  });
  divSer.appendChild(divMain);
  var check = false;
  var user = "";
  firebase.database().ref('Ads').orderByKey().equalTo(appID).once('value', function (snapshot) {
      snapshot.forEach(childSnapshot => {
        user = childSnapshot.val().UserID;
        //console.log("User1 = " + user);
        if(localStorage.getItem('currMail') == user){
          var sold = document.createElement('button');
  sold.setAttribute('class','btn btn-primary btn-lg btn-block');
  sold.innerHTML = '<i class="fa fa-check-circle"></i> Sold';
  sold.setAttribute('style','margin-bottom: 30px; margin-top:0px;');
  sold.setAttribute('id',"fav");
  sold.addEventListener('click', function () {
      localStorage.setItem('appID', appID);
  });
  sold.addEventListener("click", Del);
  divSer.appendChild(sold);
  divSize.appendChild(divSer);
  
        }
      });
      
      firebase.database().ref('Favorites').orderByChild("user").equalTo(localStorage.getItem("currMail")).once('value', function (snapshot) {
      snapshot.forEach(childSnapshot => {
        if(childSnapshot.val().Ad == appID){
          check = true;
        }
      });
      if(check == true){
          var del = document.createElement('button');
  del.setAttribute('class','btn btn-primary btn-lg btn-block');
  del.innerHTML = '<i class="fa fa-trash-o"></i> Delete from my favourites';
  del.setAttribute('style','margin-bottom: 30px; margin-top:0px;');
  del.setAttribute('id',"fav");
  del.addEventListener('click', function () {
      localStorage.setItem('appID', appID);
  });
  del.addEventListener("click", delFromFav);
  divSer.appendChild(del);
  divSize.appendChild(divSer);
              }
      else{
        //console.log("User = " + user);
          //console.log(localStorage.getItem('currMail'));
        if(localStorage.getItem('currMail') != user){
          //console.log("User = " + user);
          //console.log(localStorage.getItem('currMail'));
          var fav = document.createElement('button');
  fav.setAttribute('class','btn btn-primary btn-lg btn-block');
  fav.innerHTML = '<i class="fa fa-star-o"></i> Add to my favourites';
  fav.setAttribute('style','margin-bottom: 30px; margin-top:0px;');
  fav.setAttribute('id',"fav");
  fav.addEventListener('click', function () {
      localStorage.setItem('appID', appID);
  });
  fav.addEventListener("click", addToFav);
  divSer.appendChild(fav);
  divSize.appendChild(divSer);
  
      }
    }
    });
  }); 
  
  divSer.setAttribute('style','cursor: pointer;');
  
  document.getElementById('adHeader').appendChild(divSize);
  countryCounter();
  
}
function cityCounter(){
var country = document.getElementById('countries').value;
var city = document.getElementById('cities').value;
  if(country == 'Egypt'){
    let cit = ["Cairo", "Alexandria", "Giza", "Beheira", "Kafr El Sheikh", "Port Said", "North Sinai", "Gharbia", "Monufia", "Qalyubia", "Sharqia", "Ismailia", "Faiyum", "Suez", "Damietta", "South Sinai", "Beni Suef", "Minya", "New Valley", "Asyut", "Red Sea", "Sohag", "Qena", "Luxor", "Aswan", "Matruh", "Dakahlia"];
  let count = 0;
  for(let i = 0; i < cit.length; i++){
      let counter = 0;
      firebase.database().ref('Ads').orderByChild("City").equalTo(cit[i]).once('value', function (snapshot) {
      snapshot.forEach(childSnapshot => {
          if(childSnapshot.val().Accepted == "Yes"){
              counter += 1;  
          console.log(counter);
          console.log(cit[i]);
          count = counter;
          document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
          //city.options[i].innerHTML = cit[i] + "  (" + counter + ")";
          //alert(city.options[i]);
        }
      }); 
      document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
      //document.getElementById("cities").options[i + 2].innerHTML = cit[i] + "  (" + counter + ")";   
      //city.options[i].innerHTML = cit[i] + "  (" + counter + ")";
    });
  //document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
  }
  }
  if(country == "Emirates"){
    var cit = ["Abu Dhabi", "Dubai", "ALAin", "Sharjah" , "Ajman", "Ras AlKheimah", "Fujairah", "Umm al-Quwain"];
  let count = 0;
  for(let i = 0; i < cit.length; i++){
      let counter = 0;
      firebase.database().ref('Ads').orderByChild("City").equalTo(cit[i]).once('value', function (snapshot) {
      snapshot.forEach(childSnapshot => {
          if(childSnapshot.val().Accepted == "Yes"){
              counter += 1;  
          console.log(counter);
          console.log(cit[i]);
          count = counter;
          document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
          }
      }); 
      document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
      //document.getElementById("cities").options[i + 2].innerHTML = cit[i] + "  (" + counter + ")";   
  });
  //document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
  }
  }
  if(country == "Kuwait"){
    var cit =["Kuwait City", "Hawalli", "Mubarak Al-Kabeer", "Ahmadi" , "Farwaniya", "Jahra"];
    let count = 0;
    for(let i = 0; i < cit.length; i++){
        let counter = 0;
        firebase.database().ref('Ads').orderByChild("City").equalTo(cit[i]).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
            if(childSnapshot.val().Accepted == "Yes"){
                counter += 1;  
            console.log(counter);
            console.log(cit[i]);
            count = counter;
            document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
            }
        }); 
        document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
        //document.getElementById("cities").options[i + 2].innerHTML = cit[i] + "  (" + counter + ")";   
    });
    //document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
    }
  }
  if(country == "Saudi Arabia"){
    var cit =  ["Riyadh", "Makkah ", "Al Madinah", "Al-Qassim", "Eastern Province", "'Asir ", "Tabuk", "Ha'il ", "Northern Borders","Jizan", "Najran", "Al Bahah", "Al Jawf"];
  let count = 0;
  for(let i = 0; i < cit.length; i++){
      let counter = 0;
      firebase.database().ref('Ads').orderByChild("City").equalTo(cit[i]).once('value', function (snapshot) {
      snapshot.forEach(childSnapshot => {
          if(childSnapshot.val().Accepted == "Yes"){
              counter += 1;  
          console.log(counter);
          console.log(cit[i]);
          count = counter;
          document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
          }
      }); 
      document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
      //document.getElementById("cities").options[i + 2].innerHTML = cit[i] + "  (" + counter + ")";   
  });
  //document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
  }
  }
  
}
function countryCounter(){
  let cit = ["Egypt", "Emirates", "Kuwait", "Saudi Arabia"];
  let count = 0;
  for(let i = 0; i < cit.length; i++){
      let counter = 0;
      firebase.database().ref('Ads').orderByChild("Country").equalTo(cit[i]).once('value', function (snapshot) {
      snapshot.forEach(childSnapshot => {
          if(childSnapshot.val().Accepted == "Yes"){
              counter += 1;  
          console.log(counter);
          console.log(cit[i]);
          count = counter;
          document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
          }
      }); 
      document.getElementById("countries").options[i + 2].innerHTML = cit[i] + "  (" + counter + ")";   
  });
  //document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
  }
  
}
function setCit(){
  var egypt = ["Cairo", "Alexandria", "Giza", "Beheira", "Kafr El Sheikh", "Port Said", "North Sinai", "Gharbia", "Monufia", "Qalyubia", "Sharqia", "Ismailia", "Faiyum", "Suez", "Damietta", "South Sinai", "Beni Suef", "Minya", "New Valley", "Asyut", "Red Sea", "Sohag", "Qena", "Luxor", "Aswan", "Matruh", "Dakahlia", "Gouna", "North Coast", "Ain Sokhna", "Marina", "Ras Sedr", "Dahab", "Hurghada", "Marsa Alam", "El Alamein", "Sharm ElSheikh"];
  var Emirates = ["Abu Dhabi", "Dubai", "ALAin", "Sharjah" , "Ajman", "Ras AlKheimah", "Fujairah", "Umm al-Quwain"];
  var Kuwait =["Kuwait City", "Hawalli", "Mubarak Al-Kabeer", "Ahmadi" , "Farwaniya", "Jahra"];
  var Saudi =  ["Riyadh", "Makkah ", "Al Madinah", "Al-Qassim", "Eastern Province", "'Asir ", "Tabuk", "Ha'il ", "Northern Borders","Jizan", "Najran", "Al Bahah", "Al Jawf"];
  let country = document.getElementById("countries").value;
  let cit = document.getElementById("cities");
  let sel = document.getElementById("locations");
  if(country == ""){
    cit.innerHTML = "";
    sel.innerHTML = "";
    var op4 = document.createElement('option');
    op4.innerHTML = "All";
    op4.value = "";
    cit.appendChild(op4);
    
    var op5 = document.createElement('option');
    op5.innerHTML = "All";
    op5.value = "";
    sel.appendChild(op5);
    var op3 = document.createElement('option');
    op3.value = "";
    op3.disabled = 'true';
    op3.selected ='true';
    op3.hidden = 'true';
      op3.innerHTML = "Location";
      sel.appendChild(op3);
      
      
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "City";
      cit.appendChild(op2);
    
  }
  if(country == "Egypt"){
    cit.innerHTML = "";
    sel.innerHTML = "";
    
    var op3 = document.createElement('option');
    op3.value = "";
    op3.disabled = 'true';
    op3.selected ='true';
    op3.hidden = 'true';
      op3.innerHTML = "Location";
      sel.appendChild(op3);
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "City";
      cit.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      cit.appendChild(op);
    for (var i = 0; i< egypt.length; i++){
      var opt = document.createElement('option');
      opt.value = egypt[i];
      opt.innerHTML = egypt[i];
      opt.setAttribute('id', egypt[i]);
      cit.appendChild(opt);
    }
  }
  if(country == "Emirates"){
    cit.innerHTML = "";
    sel.innerHTML = "";
    var op3 = document.createElement('option');
    op3.value = "";
    op3.disabled = 'true';
    op3.selected ='true';
    op3.hidden = 'true';
      op3.innerHTML = "Location";
      sel.appendChild(op3);
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "City";
      cit.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      cit.appendChild(op);
    for (var i = 0; i< Emirates.length; i++){
      var opt = document.createElement('option');
      opt.value = Emirates[i];
      opt.innerHTML = Emirates[i];
      opt.setAttribute('id', Emirates[i]);
      cit.appendChild(opt);
    }
  }
  if(country == "Kuwait"){
    cit.innerHTML = "";
    sel.innerHTML = "";
    var op3 = document.createElement('option');
    op3.value = "";
    op3.disabled = 'true';
    op3.selected ='true';
    op3.hidden = 'true';
      op3.innerHTML = "Location";
      sel.appendChild(op3);
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "City";
      cit.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      cit.appendChild(op);
    for (var i = 0; i< Kuwait.length; i++){
      var opt = document.createElement('option');
      opt.value = Kuwait[i];
      opt.innerHTML = Kuwait[i];
      opt.setAttribute('id', Kuwait[i]);
      cit.appendChild(opt);
    }
  }
  if(country == "Saudi Arabia"){
    cit.innerHTML = "";
    sel.innerHTML = "";
    var op3 = document.createElement('option');
    op3.value = "";
    op3.disabled = 'true';
    op3.selected ='true';
    op3.hidden = 'true';
      op3.innerHTML = "Location";
      sel.appendChild(op3);
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "City";
      cit.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      cit.appendChild(op);
    for (var i = 0; i< Saudi.length; i++){
      var opt = document.createElement('option');
      opt.value = Saudi[i];
      opt.innerHTML = Saudi[i];
      opt.setAttribute('id', Saudi[i]);
      cit.appendChild(opt);
    }
  }
}

function setLoc(){
  //Egypt
  var cairo = ["Abbassia", "Ain Shams", "Azbakeya", "Bab al-Louq", "Boulaq", "City of the Dead (Cairo)", "Coptic Cairo", "Daher", "Downtown", "El Manial", "El Marg", "El Matareya", "El Sherouk", "El Obour", "El Qobbah", "El Rehab", "El Sahel", "El Sakkakini", "El Zawia El Hamra","Ezbet El Haggana", "Ezbet El Nakhl", "Faggala", "Fifth Settlement", "Fustat", "Garden City", "Gezira", "Heliopolis", "Islamic", "Maadi", "Mataria", "Naser City", "Old Cairo", "Roda Island", "Shubra", "Shubra El Kheima", "Wagh El Birket", "Zamalek", "Zeitoun"];
  var alex = ["Al Hadrah Qebli", "Amreya", "Anfoushi", "Asafra", "Azarita", "Bahary", "Bakos", "Baucalis", "Bolkly", "Camp Chezar", "Cleopatra", "Dekhela", "Downtown", "El Atareen", "El Gomrok", "El Ibrahimiya", "El Labban", "El Maamora", "El Mandara", "El Mansheya", "El Max", "El Qabary", "El Saraya", "El Soyof", "Fleming", "Gianaclis", "Glim", "Kafr Abdu", "Karmoz", "Kom El Deka", "Louran", "Mahatet El Raml", "Miami", "Moharam Bek", "Montaza", "Roshdy", "Saba Pasha", "Safar", "San Stefano", "Shatby", "Shods", "Sidi Bishr", "Sidi Gaber", "Smouha", "Sporting", "Stanley", "Tharwat", "Victoria", "Wardeyan", "Zezenia"];
  var giza = ["Agouza", "Dokki", "Imbaba", "Mohandiseen"];
  var beheira = ["Abu Hummus", "Abu El Matamir", "Damanhur", "Edku", "El Delengat", "El Mahmoudiyah", "El Rahmaniya", "Itay El Barud", "Hosh Issa", "Kafr El Dawwar", "Koum Hamada", "Rosetta", "Shubrakhit", "Wadi El Natrun", "El Nubaria"];
  var kafr = ["El Hamool", "Baltim", "Biyala", "Desouk", "Fuwwah", "Kafr El Sheikh", "Metoubes", "Qallin", "El Reyad", "Sidi Salem"];
  var port = ["El Dawahy", "El Arab", "El Ganoub", "El Manakh", "El Manasra", "El Sharq", "El Zohur", "Port Fuad", "Mubarak"];
  var Sinai = ["El Arish", "El Hassana", "Sheikh Zuweid", "Bir El Abd", "Nakhl", "Rafah", "El Qasima", "Rumana"];
  var gharb = ["El Mahalla El Kubra", "Kafr El Zayat", "Samanoud", "Tanta", "Zifta", "El Santa", "Kotoor", "Basyoun"];
  var mnofia = ["Shibin El Kom", "Menouf", "Ashmoun", "Sers El Lyan", "Tala", "El Bagour", "El Shohada", "Sadat City", "Quesna", "Birket El Sab", "Shanawan"];
  var qalyobia = ["Banha", "Khanka", "Qaha", "Qalyub", "Shibin El Qanater", "Shubra El Kheima", "Tukh", "El Qanater El Khayreya", "Kafr Shukr", "Obour City", "Khusus"];
  var sharqia = ["10th of Ramadan", "Abu Hammad", "Abu Kebir", "Awlad Saqr", "Bilbeis", "Diyarb Negm", "El Husseiniya", "El Ibrahimiya", "El Qurein", "Faqous", "Hihya", "Kafr Saqr", "Mashtool El Souk", "Minya El Qamh", "El Salheya El Gedida", "Zagazig"];
  var ismailia = ["Abu Suwir El Mahata", "Ismalia", "El Qantara", "El Qantara El Sharqiya", "New Kasaseen", "Tell El Kebir", "Fayid"];
  var fayom = ["Ibsheway", "Itsa", "New Faiyum", "Sinnuris", "Tamiya", "Yousef El Seddik", "Kom Oshim", "New Kom Oshim", "Kouta"];
  var suez = ["Arbaeen", "Ganayen", "Suez", "Attaka", "Faisal", "Port Suez"];
  var domiat = ["El Zarqa", "Faraskur", "Port of Damietta", "Kafr El Battikh", "Kafr Saad", "New Damietta", "Ras El Bar"];
  var baniswef = ["El Fashn", "El Wasta", "Biba", "Ihnasiya", "New Beni Suef", "Nasser", "Sumusta El Waqf"];
  var minya = ["Abu Qirqas", "El Idwa", "Beni Mazar", "Deir Mawas", "New Minya", "Maghagha", "Malawit Gharb", "Mallawi", "Matai", "Samalut"];
  var newVally = ["Kharga", "Balat", "Dakhla", "Farafra", "Baris", "Dakhla"];
  var asyot = ["Abnub", "Abu Tig", "El Badari", "El Fath", "El Ghanayem", "El Qusiya", "Dairut", "New Asyut", "Manfalut", "Sahel Selim", "Sodfa"];
  var redSea = ["Hurghada", "El Qusair", "Shalateen", "Halaib", "Marsa Alam", "Ras Gharib", "Safaga", "Bernes", "Alaki"];
  var sohag = ["Akhmim", "El Balyana", "El Kawtar", "El Maragha", "El Munsha", "Aserat", "Dar El Salam", "Girga", "Juhaynah West", "New Akhmim", "New Sohag", "Saqultah", "Tahta", "Tima"];
  var qena = ["Abu Tesht", "El Waqf", "Dishna", "Farshut", "New Qena", "Nag Hammadi", "Naqada", "Gebtu or Coptos", "Qus"];
  var luxor = ["Qurna", "Armant", "Esna", "Tiba", "El Boghdadi", "New Tiba"];
  var aswan = ["Abu Simbel", "Daraw", "Edfu", "Kom Ombo", "New Aswan", "New Tushka", "Nasser City", "El Basaliya", "El Radisia", "New Kalabsha", "Sebaiya"];
  var matroh = ["El Dabaa", "El Alamein", "El Alameins", "El Hamam", "El Negaila", "Sallum", "North Coast", "Sidi Barrani", "Siwa Oasis"];
  var daka = ["Aga", "El Gamaliya", "El Kurdi", "El Mansoura", "El Manzala", "El Matareya", "El Senbellawein", "Beni Ebeid", "Belqas", "Dikirnis", "Gamasa", "Maḥallat Damanah", "Minyet El Nasr", "Mit Ghamr", "Mit Salsil", "Nabaroh", "Shirbin", "Talkha", "Timay El Imdid"];
  let city = document.getElementById("cities").value;
  let sel = document.getElementById("locations");
  if(city == ""){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
  }
  if(city == "Cairo"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< cairo.length; i++){
      var opt = document.createElement('option');
      opt.value = cairo[i];
      opt.innerHTML = cairo[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Alexandria"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< alex.length; i++){
      var opt = document.createElement('option');
      opt.value = alex[i];
      opt.innerHTML = alex[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Giza"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< giza.length; i++){
      var opt = document.createElement('option');
      opt.value = giza[i];
      opt.innerHTML = giza[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Beheira"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< beheira.length; i++){
      var opt = document.createElement('option');
      opt.value = beheira[i];
      opt.innerHTML = beheira[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Kafr El Sheikh"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< kafr.length; i++){
      var opt = document.createElement('option');
      opt.value = kafr[i];
      opt.innerHTML = kafr[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Port Said"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< port.length; i++){
      var opt = document.createElement('option');
      opt.value = port[i];
      opt.innerHTML = port[i];
      sel.appendChild(opt);
    }
  }
  if(city == "North Sinai" || city == "South Sinai"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< Sinai.length; i++){
      var opt = document.createElement('option');
      opt.value = Sinai[i];
      opt.innerHTML = Sinai[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Gharbia"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< gharb.length; i++){
      var opt = document.createElement('option');
      opt.value = gharb[i];
      opt.innerHTML = gharb[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Monufia"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< mnofia.length; i++){
      var opt = document.createElement('option');
      opt.value = mnofia[i];
      opt.innerHTML = mnofia[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Qalyubia"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< qalyobia.length; i++){
      var opt = document.createElement('option');
      opt.value = qalyobia[i];
      opt.innerHTML = qalyobia[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Sharqia"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< sharqia.length; i++){
      var opt = document.createElement('option');
      opt.value = sharqia[i];
      opt.innerHTML = sharqia[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Ismailia"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< ismailia.length; i++){
      var opt = document.createElement('option');
      opt.value = ismailia[i];
      opt.innerHTML = ismailia[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Faiyum"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< fayom.length; i++){
      var opt = document.createElement('option');
      opt.value = fayom[i];
      opt.innerHTML = fayom[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Suez"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< suez.length; i++){
      var opt = document.createElement('option');
      opt.value = suez[i];
      opt.innerHTML = suez[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Damietta"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< domiat.length; i++){
      var opt = document.createElement('option');
      opt.value = domiat[i];
      opt.innerHTML = domiat[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Beni Suef"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< baniswef.length; i++){
      var opt = document.createElement('option');
      opt.value = baniswef[i];
      opt.innerHTML = baniswef[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Minya"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< minya.length; i++){
      var opt = document.createElement('option');
      opt.value = minya[i];
      opt.innerHTML = minya[i];
      sel.appendChild(opt);
    }
  }
  if(city == "New Valley"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< newVally.length; i++){
      var opt = document.createElement('option');
      opt.value = newVally[i];
      opt.innerHTML = newVally[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Asyut"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< asyot.length; i++){
      var opt = document.createElement('option');
      opt.value = asyot[i];
      opt.innerHTML = asyot[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Red Sea"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< redSea.length; i++){
      var opt = document.createElement('option');
      opt.value = redSea[i];
      opt.innerHTML = redSea[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Sohag"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< sohag.length; i++){
      var opt = document.createElement('option');
      opt.value = sohag[i];
      opt.innerHTML = sohag[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Qena"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< qena.length; i++){
      var opt = document.createElement('option');
      opt.value = qena[i];
      opt.innerHTML = qena[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Luxor"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< luxor.length; i++){
      var opt = document.createElement('option');
      opt.value = luxor[i];
      opt.innerHTML = luxor[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Aswan"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< aswan.length; i++){
      var opt = document.createElement('option');
      opt.value = aswan[i];
      opt.innerHTML = aswan[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Matruh"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< matroh.length; i++){
      var opt = document.createElement('option');
      opt.value = matroh[i];
      opt.innerHTML = matroh[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Dakahlia"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< daka.length; i++){
      var opt = document.createElement('option');
      opt.value = daka[i];
      opt .innerHTML = daka[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Gouna"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Gouna";
      opt.innerHTML = "Gouna";
      sel.appendChild(opt);
  }
  if(city == "North Coast"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "North Coast";
      opt.innerHTML = "North Coast";
      sel.appendChild(opt);
  }
  if(city == "Ain Sokhna"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Ain Sokhna";
      opt.innerHTML = "Ain Sokhna";
      sel.appendChild(opt);
  }
  if(city == "Marina"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Marina";
      opt.innerHTML = "Marina";
      sel.appendChild(opt);
  }
  if(city == "Ras Sedr"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Ras Sedr";
      opt.innerHTML = "Ras Sedr";
      sel.appendChild(opt);
  }
  if(city == "Dahab"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Dahab";
      opt.innerHTML = "Dahab";
      sel.appendChild(opt);
  }
  if(city == "Hurghada"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Hurghada";
      opt.innerHTML = "Hurghada";
      sel.appendChild(opt);
  }
  if(city == "Marsa Alam"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Marsa Alam";
      opt.innerHTML = "Marsa Alam";
      sel.appendChild(opt);
  }
  if(city == "El Alamein"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "El Alamein";
      opt.innerHTML = "El Alamein";
      sel.appendChild(opt);
  }
  if(city == "Sharm ElSheikh"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Sharm ElSheikh";
      opt.innerHTML = "Sharm ElSheikh";
      sel.appendChild(opt);
  }
  //Egypt End
  //Emarat
  var AbuDhabiLocation =  ["AL Raha", "Khalifa City", "AL Muroor", "Al Rowdah ana AL Mushrif", "AL karamah", 
"Khalidya", "AL Wahda", "Madinat Zayed", "AL Zahiyah and AL Markaziyah"];

var DubaiLocation = ["Abu Hail", "AL Awir First", "AL Awir Second", "Aleyas", "AL Bada'a", 
"AL Barsha", "AL Barsha first", "AL Barsha second", "AL Barsha third", "AL Barsha south first",
 "AL Barsha south second", "AL Barsha south third", "AL Barsha south fourth", 
"AL Barsha south fourth", "AL Barsha south fifth", "AL Buteen", "AL Corniche", 
"Al Dhagaya", "Al Faqa","Al Garhoud", "Al Hamriya, Dubai", 
"Al Hamriya Port", "Al Hathmah", "Al Hebiah First", "Al Hebiah Fourth", 
"Al Hebiah Fifth", "Al Hebiah Second", "Al Hebiah Sixth", "Al Hebiah Third", 
"Al Hudaiba","Al Jaddaf", "Al Jafiliya", "Al Karama", "Al Khabisi", "Al Khawaneej First", "Al Khawaneej Second",
 "Al Kifaf","Al Mamzar", "Al Manara",  
"Al Mankhool", "Al Merkad", "Al Mina", "Al Mizhar First", "Al Mizhar Second", "Al Muraqqabat", 
"Al Murar", "Al Mushrif" ,"Al Muteena", "Al Nahda First", "Al Nahda Second", "Al Nasr, Dubai", "Al Quoz First", 
"Al Quoz Industrial First", "Al Quoz Industrial Fourth", "Al Quoz Industrial Second", "Al Quoz Industrial Third", "Al Quoz Second", 
"Al Quoz Third", "Al Quoz Fourth", "Al Qusais First", 
"Al Qusais Industrial Fifth", "Al Qusais Industrial First", "Al Qusais Industrial Fourth", "Al Qusais Industrial Second", "Al Qusais Industrial Third", "Al Qusais Second","Al Qusais Third",
 "Al Raffa", "Al Ras", "Al Rashidiya", "Al Rigga", "Al Sabkha","Al Safa First", "Al Safa Second", "Al Safouh First",
 "Al Safouh Second", "Al Satwa", 
"Al Shindagha", "Al Souq Al Kabeer", "Al Twar First", "Al Twar Second", "Al Twar Third", "Al Warqa'a Fifth", "Al Warqa'a First", 
"Al Warqa'a Fourth", 
"Al Warqa'a Second", "Al Warqa'a Third", "Al Wasl", "Al Waheda", "Ayal Nasir", "Business Bay","Bu Kadra", 
"Downtown Dubai", 
"Dubai Investment Park First", "Dubai Investment Park Second", "Emirates Hill First", "Emirates Hill Second", "Emirates Hill Third", "Enkhali", "Hatta", "Hor Al Anz", "Hor Al Anz East", 
"Jebel Ali 1", "Jebel Ali 2", "Jebel Ali Industrial", "Jebel Ali Palm", "Jumeira First", "Palm Jumeira", "Jumeira Second", "Jumeira Third" ,"Marsa Dubai", "Mirdif",
 "Muhaisanah Fourth", "Muhaisanah Second", "Muhaisanah Third", 
"Muhaisnah First", "Nad Al Hammar", "Nadd Al Shiba Fourth", "Nadd Al Shiba Second", "Nadd Al Shiba Third", "Nad Shamma", "Naif", "Port Saeed", 
"Arabian Ranches", "Oud Al Muteena Third", "Ras Al Khor", "Ras Al Khor Industrial First", "Ras Al Khor Industrial Second", "Ras Al Khor Industrial Third",
"Rigga Al Buteen", "Trade Centre 1", 
"Trade Centre 2", "Umm Al Sheif", "Umm Hurair First", "Umm Hurair Second", "Umm Ramool", "Umm Suqeim First", "Umm Suqeim Second", "Umm Suqeim Third", "Wadi Alamardi", 
"Warsan First", "Warsan Second", "Yaraah", "Za'abeel First", "Za'abeel Second", "Margham", "Umm Nahad First", "	Umm Nahad Second",
"Umm Nahad Third", "Umm Nahad Fourth","Saih Al-Dahal", "Saih Al Salam", 
"Al Lisaili", "	Lehbab First"];


var ALAinLocation =  ["Al Bateen", "Al Buraimi", "Al Foah", "Al Hili - see Hili", "Al Jimi", 
"Al Saniya ", "Al Surooj", "Al Tawiyah", "Central District","Falaj Hazza", "Hili", "Magar Al Dhabi", "Munaseer, Muniseer, Munasir", "Saniya ", 
"Tawam", "Zakhir", "Al Koua", "Jafeer Al Jadeed" , "Oud Al Touba", "Umm Ghafa"];


var SharjahLocation =  ["Abu Tina", "Al Abar", "Al Azra", "Al Darari", "Al Falaj", 
"Al Fayha ", "Al Gaphia", "Al Gharayen 1", "Al Gharayen 2","Al Gharayen 3", "Al Gharayen 4", "Al Gharayen 5", "Al Ghubaiba", "Al Goaz ", 
"Al Hazana", "Al Jazat", "Al Juraina", "Al Juraina 1" , "Al Khalidiya", "Al Khan", "Al Khezamia", "Al Lyyah", "Al Majaz", "Al Mamzar", "Al Manakh", 
"Al Mansura ", "Al Musala", "Al Mirgab", "Al Naba","Al Nahda", "Al Nasseria", "Al Nekhailat", "Al Noaf", "Al Nud ", 
"Al Qadisia", "Al Qasimiyah", "Al Ramaqia", "Al Ramla" , "Al Ramtha", "Al Rifa", "Al Sabkha", "Al Sajaa", "Al Seef", "Al Shahba", 
"Al Sweihat ", "Al Tala", "Al Turfa", "Al Yarmook","Bu Danig", "Bu Shagara", "Dasman", "Elyash", "Industrial Area 1 ", 
"Industrial Area 2", "Industrial Area 3", "Industrial Area 4", "Industrial Area 5" , "Industrial Area ", "Industrial Area 7", "Industrial Area 8", "Industrial Area 9", "Industrial Area 10", "Industrial Area 11", "Industrial Area 12", 
"Industrial Area 13 ", "Industrial Area 14", "Industrial Area 15", "Industrial Area 16","Industrial Area 17", "Maysalon", "Mowafjah", "Mowailah Commercial", "Mowailah Camp ", 
"Rifa", "Sajaa", "Samnan", "Sharjah International Airport" , "Sharjah International Airport Free Zone", "Sharjah University City", "Sharqan"];

var AjmanLocation =  ["Ajman City Center", "Ajman Corniche", "Ajman Free Zone", "Ajman Khor", "Ajman Marina", 
"Ajman Pearl ", "Ajman Port", "Ajman Uptown", "Al Ameera Village","Al Bustan", "Al Butain", "Al Dhran", "Al Jurf", "Al Hamidiya ", 
"Al Hamriya", "Al Helio", "Al Muntazi", "Al Mushairef" , "Al Muwayhat", "Al Naemiyah", "Al Nakhil", "Al Naseem", "Al Owan", "Al Rashidiya", "Al Rifaahh", 
"Al Rowdha ", "Al Rumailah", "Al Sawan", "Al Zahra","Al Zora", "Awali City", "Emirates City", "Emirates City Extension", "Escape ", 
"Garden City", "Green City", "Hatta", "Ittihad Village" , "Manama", "Marmooka City", "Masfouta", "Mazeria", "Meadows Ajman", "Meidan Al Tallah", 
"Mushairef ", "Mushairef Commercial", "New Industrial Area", "Old Industrial Area","Safia Island", "Subaikah"];

var RasElkheimahLocation =  ["Al Darbijaniyah", "Al Dhait", "Al Hamra", "Al Hamra Village", "Al Hudaihbah", 
"Al Jazeera", "Al Juwais", "Al Kharan", "Al Nakheel","Al Saih", "Al Seer", "Al Soor", "Al Uraibi", "Al Zahra ", 
"Al Zaith", "Dafan Al Khor", "Dafan Al Nakheel", "Dahan " , "Jazeera Al Hamra", "Julan", "Julfar", "Khuzam", "Maareed", "Mamourah", "Nakheel", 
"Old Town RAK ", "Seih Al Burairat", "Seih Al Hudaibah", "Seih Al Uraibi"];


var FujairahLocation =  ["Al Faseel", "Al Gurfaa", "Al Hilal", "Al Ittihad", "Al Mahatta", 
"Al Sharia ", "Al Sharia 1", "Anajaimat", "Fujairah Free Zone","Ghalala", 
"Haleefath", "Ishwais", "Madhab", "Merashid ", 
"Owaid", "Port of Fujairah", "Rughaylat", "Rumaila" , "Safad", "Sakamkam", "Seh Al Rahi", "Town Center" ];


var UmmquwaeinLocation =  ["Al Abraq", "Al Labsah", "Al Adhib", "Al Ḩazaywah", "Al Adhīb", 
"Ar Ra`fah ", "Ar Rafa`ah", "Ar Rafāah", "Ar Ramlah","Ar Ramlah C", "Ar Rashidiyah", "Ar Rā‘fah", "As Salamah", "As Salamah C ", 
"As Surrah", "Biyatah", "Dhad al Arab", "Falaj Ibn Mu'alla" , "Falaj al Ali", "Falaj al Mu`alla", "Falj Al `Ali	", "Falq Al Ali", "Fili Maala", "Kabir", "Lazimah", 
"Madū Māj ", "Mintaqah al Hadithah", "Mintaqat ad Dar al Bayda' A", "Mintaqat ad Dar al Bayda' B","Mintaqat al Hawiyah", "Mintaqat al Humrah D", "Mintaqat al Humrah J", 
"Mintaqat al Madinah al Qadimah", "Mintaqat al Maydan ", 
"Mintaqat al `Ahd", "Mintaqat ar Ra's A", "Mintaqat ar Ra's B", "Mintaqat ar Ra's D" , "Mintaqat ar Ra's J", "Minţaqah", "Minţaqat Limghadar", "Minţaqat Umm al Qaywayn aţ Ţibbīyah", 
"Minţaqat ad Dār al Bayḑā’ A", "Minţaqat ad Dār al Bayḑā’ B", 
"Minţaqat al Khawr ", "Minţaqat al Ḩumrah A", "Minţaqat al Ḩumrah B", "Minţaqat al ‘Ahd	","Minţaqat ar Rawḑah", "Minţaqat ar Ra’s A", "Minţaqat ar Ra’s B", "Minţaqat ar Ra’s D",
 "Minţaqat ar Ra’s J", "Minţaqat ar Riqqah", "Muhadhdhib", "Oumm al Qaïwaïn", "Yumul al Quwain" , "Zarqa", "Awanat","Uwaynat"];

 if(city == "Abu Dhabi"){
  sel.innerHTML = "";
  var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "All";
    sel.appendChild(op);
  for (var i = 0; i< AbuDhabiLocation.length; i++){
    var opt = document.createElement('option');
    opt.value = AbuDhabiLocation[i];
    opt.innerHTML = AbuDhabiLocation[i];
    sel.appendChild(opt);
    }
  }
  if(city == "Dubai"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< DubaiLocation.length; i++){
      var opt = document.createElement('option');
      opt.value = DubaiLocation[i];
      opt.innerHTML = DubaiLocation[i];
      sel.appendChild(opt);
      }
    }
    if(city == "ALAin"){
      sel.innerHTML = "";
      var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
      var op = document.createElement('option');
      op.value = "";
        op.innerHTML = "All";
        sel.appendChild(op);
      for (var i = 0; i< ALAinLocation.length; i++){
        var opt = document.createElement('option');
        opt.value = ALAinLocation[i];
        opt.innerHTML = ALAinLocation[i];
        sel.appendChild(opt);
        }
      }
      if(city == "Sharjah"){
        sel.innerHTML = "";
        var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
        var op = document.createElement('option');
        op.value = "";
          op.innerHTML = "All";
          sel.appendChild(op);
        for (var i = 0; i< SharjahLocation.length; i++){
          var opt = document.createElement('option');
          opt.value = SharjahLocation[i];
          opt.innerHTML = SharjahLocation[i];
          sel.appendChild(opt);
          }
        }
        if(city == "Ajman"){
          sel.innerHTML = "";
          var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
          var op = document.createElement('option');
          op.value = "";
            op.innerHTML = "All";
            sel.appendChild(op);
          for (var i = 0; i< AjmanLocation.length; i++){
            var opt = document.createElement('option');
            opt.value = AjmanLocation[i];
            opt.innerHTML = AjmanLocation[i];
            sel.appendChild(opt);
            }
          }
          if(city == "Ras AlKheimah"){
            sel.innerHTML = "";
            var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
            var op = document.createElement('option');
            op.value = "";
              op.innerHTML = "All";
              sel.appendChild(op);
            for (var i = 0; i< RasElkheimahLocation.length; i++){
              var opt = document.createElement('option');
              opt.value = RasElkheimahLocation[i];
              opt.innerHTML = RasElkheimahLocation[i];
              sel.appendChild(opt);
              }
            }
            if(city == "Fujairah"){
              sel.innerHTML = "";
              var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
              var op = document.createElement('option');
              op.value = "";
                op.innerHTML = "All";
                sel.appendChild(op);
              for (var i = 0; i< FujairahLocation.length; i++){
                var opt = document.createElement('option');
                opt.value = FujairahLocation[i];
                opt.innerHTML = FujairahLocation[i];
                sel.appendChild(opt);
                }
              }
              if(city == "Umm al-Quwain"){
                sel.innerHTML = "";
                var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
                var op = document.createElement('option');
                op.value = "";
                  op.innerHTML = "All";
                  sel.appendChild(op);
                for (var i = 0; i< UmmquwaeinLocation.length; i++){
                  var opt = document.createElement('option');
                  opt.value = UmmquwaeinLocation[i];
                  opt.innerHTML = UmmquwaeinLocation[i];
                  sel.appendChild(opt);
                  }
                }
                //emarat End
                //Kwait
                var KuwatcityLocation =  ["Abdulla Al-Salem", "Adailiya", "Bnaid Al-Qar", "Daʿiya", "Dasma", 
"Doha ", "Doha Port", "Faiha'", "Failaka","Ghornata", "Jaber Al-Ahmad City", "Jibla", "Kaifan", "Khaldiya", 
"Mansūriya", "Mirgab", "Nahdha", "North West Sulaibikhat" , "Nuzha", "Qadsiya", "Qurtuba", "Rawda", "Shamiya", "Sharq", "Shuwaikh", 
"Shuwaikh Industrial Area ", "Shuwaikh Port", "Sulaibikhat", "Surra","Umm an Namil Island", "Yarmouk"];

var HwalliLocation =  ["Anjafa", "Bayān", "Bi'da", "Hawally", "Hittin", 
"Jabriya ", "Maidan Hawalli", "Mishrif", "Mubarak Al-Jabir","Nigra", "Rumaithiya", "Salam", "Salmiya", "Salwa", 
"Sha'ab", "Shuhada", "Siddiq", "South Surra" , "Zahra"];

var MubarakAlKabeerLocation  =  ["Abu Al Hasaniya", "Abu Futaira", "Adān", "Al Qurain", "Al-Qusour", 
"Fintās", "Funaitīs", "Misīla", "Mubarak Al-Kabeer","Sabah Al-Salem", "Sabhān", "South Wista", "Wista"];

var AhmadiLocation =  ["Abu Halifa", "Abdullah Port", "Ahmadi", "Ali As-Salim", "Aqila", 
"Bar Al Ahmadi ", "Bneidar", "Dhaher", "Fahaheel","Fahad Al-Ahmad", "Hadiya", "Jaber Al-Ali", "Jawaher Al Wafra	", "Jilei'a", 
"Khairan", "Mahbula", "Mangaf", "Miqwa'" , "New Khairan City","New Wafra", "Nuwaiseeb", "Riqqa", "Sabah Al-Ahmad City", "Sabah Al Ahmad Sea City", 
"Sabahiya", "Shu'aiba (North & South)", "South Sabahiya	", "Wafra","Zoor", "Zuhar" ];


var FarwniyaLocation =  ["Abdullah Al-Mubarak", "Airport District", "Andalous", "Ardiya", "Ardiya Herafiya", 
"Ardiya Industrial Area ", "Ashbelya", "Dhajeej", "Farwaniya","Fordous	", "Jleeb Al-Shuyoukh", "Khaitan", "Omariya", "Rabiya", 
"Rai", "Al-Riggae", "Rihab", "Sabah Al-Nasser" , "Sabaq Al Hajan"];


var JahraLocation =  ["Abdali", "Al Nahda / East Sulaibikhat", "Amghara	", "Bar Jahra", "Jahra", 
"Jahra Industrial Area", "Kabad", "Naeem", "Nasseem","Oyoun", "Qasr", "Saad Al Abdullah City", "Salmi", "Sikrab", 
"South Doha / Qairawān", "Subiya", "Sulaibiya", "Sulaibiya Agricultural Area" , "Taima", "Waha"];

if(city == "Kuwait City"){
  sel.innerHTML = "";
  var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "All";
    sel.appendChild(op);
  for (var i = 0; i< KuwatcityLocation.length; i++){
    var opt = document.createElement('option');
    opt.value = KuwatcityLocation[i];
    opt.innerHTML = KuwatcityLocation[i];
    sel.appendChild(opt);
    }
  }
  if(city == "Hawalli"){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< HwalliLocation.length; i++){
      var opt = document.createElement('option');
      opt.value = HwalliLocation[i];
      opt.innerHTML = HwalliLocation[i];
      sel.appendChild(opt);
      }
    }
    if(city == "Mubarak Al-Kabeer"){
      sel.innerHTML = "";
      var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
      var op = document.createElement('option');
      op.value = "";
        op.innerHTML = "All";
        sel.appendChild(op);
      for (var i = 0; i< MubarakAlKabeerLocation.length; i++){
        var opt = document.createElement('option');
        opt.value = MubarakAlKabeerLocation[i];
        opt.innerHTML = MubarakAlKabeerLocation[i];
        sel.appendChild(opt);
        }
      }
      if(city == "Ahmadi"){
        sel.innerHTML = "";
        var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
        var op = document.createElement('option');
        op.value = "";
          op.innerHTML = "All";
          sel.appendChild(op);
        for (var i = 0; i< AhmadiLocation.length; i++){
          var opt = document.createElement('option');
          opt.value = AhmadiLocation[i];
          opt.innerHTML = AhmadiLocation[i];
          sel.appendChild(opt);
          }
        }
        if(city == "Farwaniya"){
          sel.innerHTML = "";
          var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
          var op = document.createElement('option');
          op.value = "";
            op.innerHTML = "All";
            sel.appendChild(op);
          for (var i = 0; i< FarwniyaLocation.length; i++){
            var opt = document.createElement('option');
            opt.value = FarwniyaLocation[i];
            opt.innerHTML = FarwniyaLocation[i];
            sel.appendChild(opt);
            }
          }
          if(city == "Jahra"){
            sel.innerHTML = "";
            var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
            var op = document.createElement('option');
            op.value = "";
              op.innerHTML = "All";
              sel.appendChild(op);
            for (var i = 0; i< JahraLocation.length; i++){
              var opt = document.createElement('option');
              opt.value = JahraLocation[i];
              opt.innerHTML = JahraLocation[i];
              sel.appendChild(opt);
              }
            }
            //Kwait End
            //Saudi
            var RiyadhLocation = ["Al-Dirah ","Mi'kal","Manfuha","Manfuha Al-Jadidah","Al-'Oud","Al-Mansorah","Al-Margab","Salam","Jabrah","Al-Yamamah","'Otayyigah",
"Al-'Olayya","Al-Sulaymaniyyah","Al Izdihar","King Fahd District","Al-Masif","Al-Murooj","Al-Mugharrazat","Al-Wurood","Dharat Nemar","Tuwaiq","Hazm","Nemar","Deerab","Irqah","Al-Khozama",
"Al-Rabwah","Jarir","Al-Malaz","Al-Murabba'","Al-Shifa","Al-Mansuriyya","Al-Marwah","Al-Masani'","Al-Urayja","Al-Urayja Al-Wusta","Al-Urayja (West)","Shubra","Dharat Laban","Hijrat Laban",
"As-Suwaidi",
"As-Suwaidi (West)","Sultanah","Al-Malga","Al-Sahafa","Hittin","Al-Wadi","Al-Ghadir","Al-Nafil","Imam Muhammad ibn Saud University main campus","Al-Qayrawan","Al-Aqiq","Al-Shemaysi",
"Eleyshah","Al-Badi'ah","Syah","Al-Nasriyyah","Umm Sleym","Al-Ma'athar","Umm Al-Hamam (East)","Al-Olayya","Al-Nakheel",
"King Saud University main campus","Umm Al-Hamam (East)","Umm Al-Hamam (West)","Al-Ma'athar Al-Shimali ('North Ma'athar')","Al-Rahmaniyya",
"Al-Muhammadiyya","Al-Ra'id","Al-Ghannamiyyah","Uraydh","Al-Ha'ir","Ad Dar Al Baida","Taybah","Al Mansouriyah","Al-Naseem (East)","Al-Naseem (West)","As-Salam","Al-Manar",
"Al-Rimayah","Al-Nadheem","Al-Rayyan","Al-Rawdhah","Al-Qadisiyah","Al-M'aizliyyah","Al-Nahdhah","Gharnatah (Granada)","Qortubah (Cordoba)","Al-Hamra","Al-Qouds","Al-Selayy"
,"Ad Difa'","Al Iskan","Khashm Al-'Aan","Al-Sa'adah","Al-Fayha","Al-Manakh",];

var MakkahLocation = ["Mecca", "Jeddah", "Al Qunfudhah" , "Al Lith","Rabigh" ,"Al Jumum" ,"Khulays" ,"Al Kamil" ,"Al Khurmah" ,"Ranyah" ,"Turubah"];

var MadinahLocation = ["Medina" ,"Yanbu" ,"Al-`Ula" ,"Mahd adh Dhahab" ,"Badr" ,"Khaybar" ,"Al Hinakiyah"];

var AlQassimLocation = ["Buraidah" ,"Unaizah" ,"Ar Rass" ,"Al Mithnab" ,"Al Bukayriyah" ,"Al Badayea" ,"Asyah" ,"Al Nabhaniyah" ,"Uyun AlJiwa" ,"Riyadh Al Khabra" ,"Al Shimasiyah"];

var EasternProvinceLocation = ["Dammam" ,"Al Ahsa" ,"Hafar Al-Batin" ,"Jubail" ,"Qatif" ,"Khobar" ,"Khafji" ,"Ras Tanura" ,"Abqaiq" ,"Al Nairyah" ,"Qaryat al-Ulya"];

var AsirLocation = ["Abha" ,"Khamis Mushait" ,"Bisha" ,"Al-Namas" ,"Muhayil" , "Sarat Abidah" ,"Tathlith" ,"Rojal" ,"Ahad Rafidah" ,"Dhahran Al Janub" ,"Balqarn" ,"Al Majaridah"];

var TabukLocation =["Tabuk" ,"Al Wajh" ,"Duba" ,"Tayma" ,"Umluj" ,"Haql"];

var HailLocation = ["Ha'il" ,"Baqaa" , "Al Khazaiah" ,"Al Shinan"];

var NorthernBordersLocation = ["Arar" ,"Rafha" ,"Turaif"];

var JizanLocation = ["Al Dayer" ,"Ahad al Masarihah" ,"Al Edabi" ,"Al Aridhah" ,"Al Darb"];

var NajranLocation =["Najran" ,"Sharurah" ,"Hubuna" ,"Badr Al Janub" ,"Yadamah" ,"Thar" ,"Khubash" ,"Al Kharkhir"];

var AlBahahLocation = ["Al Bahah" ,"Baljurashi" ,"Al Mandaq" ,"Al Makhwah" ,"Al Aqiq" ,"Qilwah" ,"Al Qara" ];

var AljawfLocation = ["Sakakah" ,"Qurayyat" ,"Dumat al-Jandal"];

if(city == "Riyadh"){
  sel.innerHTML = "";
  var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "All";
    sel.appendChild(op);
  for (var i = 0; i< RiyadhLocation.length; i++){
    var opt = document.createElement('option');
    opt.value = RiyadhLocation[i];
    opt.innerHTML = RiyadhLocation[i];
    sel.appendChild(opt);
    }
  }
  if(city == "Makkah "){
    sel.innerHTML = "";
    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "All";
      sel.appendChild(op);
    for (var i = 0; i< MakkahLocation.length; i++){
      var opt = document.createElement('option');
      opt.value = MakkahLocation[i];
      opt.innerHTML = MakkahLocation[i];
      sel.appendChild(opt);
      }
    }
    if(city == "Al Madinah"){
      sel.innerHTML = "";
      var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
      var op = document.createElement('option');
      op.value = "";
        op.innerHTML = "All";
        sel.appendChild(op);
      for (var i = 0; i< MadinahLocation.length; i++){
        var opt = document.createElement('option');
        opt.value = MadinahLocation[i];
        opt.innerHTML = MadinahLocation[i];
        sel.appendChild(opt);
        }
      }
      if(city == "Al-Qassim"){
        sel.innerHTML = "";
        var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
        var op = document.createElement('option');
        op.value = "";
          op.innerHTML = "All";
          sel.appendChild(op);
        for (var i = 0; i< AlQassimLocation.length; i++){
          var opt = document.createElement('option');
          opt.value = AlQassimLocation[i];
          opt.innerHTML = AlQassimLocation[i];
          sel.appendChild(opt);
          }
        }
        if(city == "Eastern Province"){
          sel.innerHTML = "";
          var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
          var op = document.createElement('option');
          op.value = "";
            op.innerHTML = "All";
            sel.appendChild(op);
          for (var i = 0; i< EasternProvinceLocation.length; i++){
            var opt = document.createElement('option');
            opt.value = EasternProvinceLocation[i];
            opt.innerHTML = EasternProvinceLocation[i];
            sel.appendChild(opt);
            }
          }
          if(city == "'Asir "){
            sel.innerHTML = "";
            var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
            var op = document.createElement('option');
            op.value = "";
              op.innerHTML = "All";
              sel.appendChild(op);
            for (var i = 0; i< AsirLocation.length; i++){
              var opt = document.createElement('option');
              opt.value = AsirLocation[i];
              opt.innerHTML = AsirLocation[i];
              sel.appendChild(opt);
              }
            }
            if(city == "Tabuk"){
              sel.innerHTML = "";
              var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
              var op = document.createElement('option');
              op.value = "";
                op.innerHTML = "All";
                sel.appendChild(op);
              for (var i = 0; i< TabukLocation.length; i++){
                var opt = document.createElement('option');
                opt.value = TabukLocation[i];
                opt.innerHTML = TabukLocation[i];
                sel.appendChild(opt);
                }
              }
              if(city == "Ha'il "){
                sel.innerHTML = "";
                var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
                var op = document.createElement('option');
                op.value = "";
                  op.innerHTML = "All";
                  sel.appendChild(op);
                for (var i = 0; i< HailLocation.length; i++){
                  var opt = document.createElement('option');
                  opt.value = HailLocation[i];
                  opt.innerHTML = HailLocation[i];
                  sel.appendChild(opt);
                  }
                }
                if(city == "Northern Borders"){
                  sel.innerHTML = "";
                  var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
                  var op = document.createElement('option');
                  op.value = "";
                    op.innerHTML = "All";
                    sel.appendChild(op);
                  for (var i = 0; i< NorthernBordersLocation.length; i++){
                    var opt = document.createElement('option');
                    opt.value = NorthernBordersLocation[i];
                    opt.innerHTML = NorthernBordersLocation[i];
                    sel.appendChild(opt);
                    }
                  }
                  if(city == "Jizan"){
                    sel.innerHTML = "";
                    var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
                    var op = document.createElement('option');
                    op.value = "";
                      op.innerHTML = "All";
                      sel.appendChild(op);
                    for (var i = 0; i< JizanLocation.length; i++){
                      var opt = document.createElement('option');
                      opt.value = JizanLocation[i];
                      opt.innerHTML = JizanLocation[i];
                      sel.appendChild(opt);
                      }
                    }
                    if(city == "Najran"){
                      sel.innerHTML = "";
                      var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
                      var op = document.createElement('option');
                      op.value = "";
                        op.innerHTML = "All";
                        sel.appendChild(op);
                      for (var i = 0; i< NajranLocation.length; i++){
                        var opt = document.createElement('option');
                        opt.value = NajranLocation[i];
                        opt.innerHTML = NajranLocation[i];
                        sel.appendChild(opt);
                        }
                      }
                      if(city == "Al Bahah"){
                        sel.innerHTML = "";
                        var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
                        var op = document.createElement('option');
                        op.value = "";
                          op.innerHTML = "All";
                          sel.appendChild(op);
                        for (var i = 0; i< AlBahahLocation.length; i++){
                          var opt = document.createElement('option');
                          opt.value = AlBahahLocation[i];
                          opt.innerHTML = AlBahahLocation[i];
                          sel.appendChild(opt);
                          }
                        }
                        if(city == "Al Jawf"){
                          sel.innerHTML = "";
                          var op2 = document.createElement('option');
    op2.value = "";
    op2.disabled = 'true';
    op2.selected ='true';
    op2.hidden = 'true';
      op2.innerHTML = "Location";
      sel.appendChild(op2);
                          var op = document.createElement('option');
                          op.value = "";
                            op.innerHTML = "All";
                            sel.appendChild(op);
                          for (var i = 0; i< AljawfLocation.length; i++){
                            var opt = document.createElement('option');
                            opt.value = AljawfLocation[i];
                            opt.innerHTML = AljawfLocation[i];
                            sel.appendChild(opt);
                            }
                          }
                      
}
function setType(){
  var cat = document.getElementById('unit').value;
  var res = ['Apartment', 'Duplex', "Villa", "Chalet", "Cabin", "Town house", "Twin house", "Condominium", "Cottage", "Mansion", "Barndominium", "Roof", "Penthouse", "IVilla", "Residential Land", "Hotel appartment", "While building", "Bulk sale/rent units", "Full floor", "Half floor", "Compounds"];
  var com = ["Warehouse", "Whole building", "Commercial land", "Showroom", "Retail shop", "Full floor", "Half floor", "Factory", "Mall", "Retail unit in a mall", "Villa", "Staff accommodation", "Bulk sale/rent units"];
  var adm = ["Office space", "Warehouse", "Administrative land", "Full floor", "Half floor", "Whole building", "Factory", "Mall", "Villa", "Staff accommodation", "Bulk sale/rent units", "Co-working space"];
  var med = ["Medical building", "Medical land", "Clinic", "Full floor", "Half floor", "Whole building", "Medical centre unit", "Hospital", "Villa", "Staff accommodation", "Bulk sale/rent units"];
  var cit = document.getElementById("unitType");
if(cat == ""){
  cit.innerHTML = "";
  var op3 = document.createElement('option');
    op3.value = "";
    op3.disabled = 'true';
    op3.selected ='true';
    op3.hidden = 'true';
      op3.innerHTML = "Unit type";
      cit.appendChild(op3);
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "All";
    cit.appendChild(op);
}
if(cat == "Residential"){
  cit.innerHTML = "";
  var op3 = document.createElement('option');
    op3.value = "";
    op3.disabled = 'true';
    op3.selected ='true';
    op3.hidden = 'true';
      op3.innerHTML = "Unit type";
      cit.appendChild(op3);
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "All";
    cit.appendChild(op);
  for (var i = 0; i< res.length; i++){
    var opt = document.createElement('option');
    opt.value = res[i];
    opt.innerHTML = res[i];
    opt.setAttribute('id', res[i]);
    cit.appendChild(opt);
  }
}
if(cat == "Commercial"){
  cit.innerHTML = "";
  var op3 = document.createElement('option');
    op3.value = "";
    op3.disabled = 'true';
    op3.selected ='true';
    op3.hidden = 'true';
      op3.innerHTML = "Unit type";
      cit.appendChild(op3);
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "All";
    cit.appendChild(op);
  for (var i = 0; i< com.length; i++){
    var opt = document.createElement('option');
    opt.value = com[i];
    opt.innerHTML = com[i];
    opt.setAttribute('id', com[i]);
    cit.appendChild(opt);
  }
}
if(cat == "Administrative"){
  cit.innerHTML = "";
  var op3 = document.createElement('option');
    op3.value = "";
    op3.disabled = 'true';
    op3.selected ='true';
    op3.hidden = 'true';
      op3.innerHTML = "Unit type";
      cit.appendChild(op3);
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "All";
    cit.appendChild(op);
  for (var i = 0; i< adm.length; i++){
    var opt = document.createElement('option');
    opt.value = adm[i];
    opt.innerHTML = adm[i];
    opt.setAttribute('id', adm[i]);
    cit.appendChild(opt);
  }
}
if(cat == "Medical"){
  cit.innerHTML = "";
  var op3 = document.createElement('option');
    op3.value = "";
    op3.disabled = 'true';
    op3.selected ='true';
    op3.hidden = 'true';
      op3.innerHTML = "Unit type";
      cit.appendChild(op3);
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "All";
    cit.appendChild(op);
  for (var i = 0; i< med.length; i++){
    var opt = document.createElement('option');
    opt.value = med[i];
    opt.innerHTML = med[i];
    opt.setAttribute('id', med[i]);
    cit.appendChild(opt);
  }
}
}
document.getElementById("unit").addEventListener("change", setType);
function fetchData() {
  document.getElementById('0%').style.display = "block";
  var num = 0;
  var counter = 0;
  var counter2 = 0;
  var country = document.getElementById('countries').value;
  var isflat = document.getElementById("unitType").value;
  var loc = document.getElementById("locations").value; 
  var ci = document.getElementById("cities").value;
  var ty = document.getElementById("type").value;
  var frarea = document.getElementById("fromArea").value;
  var tarea = document.getElementById("toArea").value;
  var fr = document.getElementById("from").value;
  var t = document.getElementById("to").value;
  var u = document.getElementById("unit").value;
  var pay = document.getElementById("Pay").value;
  var Pr = "";
  var area = "";
  var typ = document.getElementById("unit").value;
  var iselevator = getch("IsElevator");
  var issec = getch("IsSecure");
  var isair = getch("IsAir");
  var isbus = getch("IsBus");
  var ismetro = getch("IsMetro");
  var isgreatView = getch("IsGreat");
  var isfire = getch("IsFire");
  var islarge = getch("IsLarge");
  var isdog = getch("IsDog");
  var isplay = getch("IsPlay");
  var isswim = getch("IsSwim");
  var isbbq = getch("IsBbq");
  var isroof = getch("IsRoof");
  var ismain = getch("IsMain");
  var isbeach = getch("IsBeach");
  var islake = getch("IsLake");
  var isnile = getch("IsNile");
  var iswifi = getch("IsWifi");
  var isgarden = getch("IsGarden");
  var issports = getch("IsSports");
  var isschool = getch("IsSchool");
  var ishospital = getch("IsHospital");
  var iscafe = getch("IsCafe");
  var isswimable = getch("IsSwimable");
  var isgym = getch("IsGym");
  var issauna = getch("IsSauna");
  var elevator = "";
  var sec = "";
  var air = "";
  var greatView = "";
  var fire = "";
  var large = "";
  var dog = "";
  var play = "";
  var swim = "";
  var bbq = "";
  var roof = "";
  var isflat2 = "";
  var payment = "";
  let main = "";
  let beach = "";
  let lake = "";
  let nile = "";
  let wifi = "";
  let garden = "";
  let sports = "";
  let school = "";
  let hospital = "";
  let cafe = "";
  let swimmable = "";
  let gym = "";
  let sauna = "";
  let bus = "";
  let metro = "";
  var finish = document.getElementById('finish').value;
  var bed = document.getElementById("bed").value;
  var bath = document.getElementById("bath").value;
  firebase
    .database()
    .ref("Ads")
    .once("value", function (snapshot) {
      num = snapshot.numChildren();
      console.log(num);
      snapshot.forEach((childSnapshot) => {
        scrol();
        kk = childSnapshot.key;
        if(country == ""){cntry = childSnapshot.val().Country;}
        else{cntry = country;}
        if(bed == ""){bedrooms = childSnapshot.val().bedRooms;}
        else{bedrooms = bed;}
        if(bath == ""){bathrooms = childSnapshot.val().bathRooms;}
        else{bathrooms = bath;}
        if(finish == ""){finishing = childSnapshot.val().Finishing;
        console.log(finish + "   Finish")}
        else{finishing = finish;
        console.log(finish + "   Finish");}
        if(isflat == ""){isflat2 = childSnapshot.val().Unit;
        console.log(isflat2);}
        else{
          isflat2 = isflat;
        }
        if(pay == ""){
          payment = childSnapshot.val().payment;
        }
        else if(pay == "Both"){
          payment = childSnapshot.val().payment;
        }
        else{
          payment = pay;
        }
        if(loc == ""){loca = childSnapshot.val().location;}
        else{loca = loc;}
        console.log(loca);
        if(ci == ""){city = childSnapshot.val().City;}
          else{city = ci;
          }
          if(ty == ""){type = childSnapshot.val().Type;}
          else{type = ty;
          }
          if(fr == "" && t == ""){
            from = Number.MIN_VALUE;
            to = Number.MAX_SAFE_INTEGER;
          }
          else{
            from = parseInt(fr);
            to = parseInt(t);
          }
          if(frarea == "" && tarea == ""){
            fromArea = Number.MIN_VALUE;
            toArea = Number.MAX_VALUE;
          }
          else{
            fromArea = parseInt(frarea);
            toArea = parseInt(tarea);
          }
          if(u==""){unit = childSnapshot.val().unit}
          else{unit =u;
          }
          if(typ == ""){type2 = childSnapshot.val().UnitType;}
          else{type2 = typ;
            }
            if (isair == false) {
              air = childSnapshot.val().Air;
            }
            else{air = isair;}
            if (isbus == false) {
              bus = childSnapshot.val().bus;
            }
            else{bus = isbus;}
            if (ismetro == false) {
              metro = childSnapshot.val().metro;
            }
            else{metro = ismetro;}
            if (iselevator == false) {
              elevator = childSnapshot.val().elevator;
            }
            else{elevator = iselevator;}
            if (isbbq == false) {
              bbq = childSnapshot.val().bbq;
            }
            else{bbq = isbbq;}
            if (isdog == false) {
              dog = childSnapshot.val().dogParks;
            }
            else{dog = isdog;}
            if (isfire == false) {
              fire = childSnapshot.val().fire;
            }
            else{fire = isfire;}
            if (isgreatView == false) {
              greatView = childSnapshot.val().greatView;
            }
            else{greatView = isgreatView;}
            if (islarge == false) {
              large = childSnapshot.val().largeWindow;
            }
            else{large = islarge;}
            if (isplay == false) {
              play = childSnapshot.val().playGround;
            }
            else{play = isplay;}
            if (isroof == false) {
              roof = childSnapshot.val().roof;
            }
            else{roof = isroof;}
            if (issec == false) {
              sec = childSnapshot.val().secure;
            }
            else{sec = issec;}
            if (isswim == false) {
              swim = childSnapshot.val().swimmingPool;
            }
            else{swim = isswim;}
            if (ismain == false) {
              main = childSnapshot.val().mainStreet;
            }
            else{main = ismain;}
            if (isbeach == false) {
              beach = childSnapshot.val().beachfront;
            }
            else{beach = isbeach;}
            if (islake == false) {
              lake = childSnapshot.val().lake;
            }
            else{lake = islake;}
            if (isnile == false) {
              nile = childSnapshot.val().nile;
            }
            else{nile = isnile;}
            if (iswifi == false) {
              wifi = childSnapshot.val().wifi;
            }
            else{wifi = iswifi;}
            if (isgarden == false) {
              garden = childSnapshot.val().garden;
            }
            else{garden = isgarden;}
            if (issports == false) {
              sports = childSnapshot.val().sportsClup;
            }
            else{sports = issports;}
            if (isschool == false) {
              school = childSnapshot.val().school;
            }
            else{school = isschool;}
            if (ishospital == false) {
              hospital = childSnapshot.val().hospital;
            }
            else{hospital = ishospital;}
            if (iscafe == false) {
              cafe = childSnapshot.val().cafe;
            }
            else{cafe = iscafe;}
            if (isswimable == false) {
              swimmable = childSnapshot.val().swimable;
            }
            else{swimmable = isswimable;}
            if (isgym == false) {
              gym = childSnapshot.val().gym;
            }
            else{gym = isgym;}
            if (issauna == false) {
              sauna = childSnapshot.val().sauna;
            }
            else{sauna = issauna;}
        if(childSnapshot.val().Accepted == "Yes"){
          if(checkTime(childSnapshot.val().DeadLine)){
            if(cntry == childSnapshot.val().Country){
              if(childSnapshot.val().City == city){
                if(childSnapshot.val().Type == type){
                  Pr = parseInt(childSnapshot.val().price);
                  if(Pr >= from && Pr <= to){
                    if(childSnapshot.val().UnitType == type2){
                      console.log(air);
                      console.log(elevator);
                      console.log(bbq);
                      console.log(dog);
                      console.log(fire);
                      console.log(greatView);
                      console.log(large);
                      console.log(play);
                      console.log(roof)
                      console.log(sec);
                      console.log(swim);
                      console.log(isflat2);
                      if(air === childSnapshot.val().Air){
                        
                        if(elevator === childSnapshot.val().elevator){
                          if(bbq === childSnapshot.val().bbq){
                            if(dog === childSnapshot.val().dogParks){
                              if(fire === childSnapshot.val().fire){
                                if(greatView === childSnapshot.val().greatView){
                                  if(large === childSnapshot.val().largeWindow){
                                    if(play === childSnapshot.val().playGround){
                                      if(roof === childSnapshot.val().roof){
                                        if(sec === childSnapshot.val().secure){
                                          if(swim === childSnapshot.val().swimmingPool){
                                            if(main === childSnapshot.val().mainStreet){
                                              if(beach === childSnapshot.val().beachfront){
                                                if(lake === childSnapshot.val().lake){
                                                  if(nile === childSnapshot.val().nile){
                                                    if(wifi === childSnapshot.val().wifi){
                                                      if(garden === childSnapshot.val().garden){
                                                        if(sports === childSnapshot.val().sportsClup){
                                                          if(school === childSnapshot.val().school){
                                                            if(hospital === childSnapshot.val().hospital){
                                                              if(cafe === childSnapshot.val().cafe){
                                                                if(swimmable === childSnapshot.val().swimable){
                                                                  if(gym === childSnapshot.val().gym){
                                                                    if(sauna === childSnapshot.val().sauna){
                                                                      if(loca == childSnapshot.val().location){
                                                                        if(isflat2 == childSnapshot.val().Unit){
                                                                          if(payment == childSnapshot.val().payment || childSnapshot.val().payment == "Both"){
                                                                            area = parseInt(childSnapshot.val().area);
                                            if(area >= fromArea && area <= toArea){
                                              if(finishing === childSnapshot.val().Finishing){
                                                if(bedrooms == childSnapshot.val().bedRooms){
                                                  if(bathrooms == childSnapshot.val().bathRooms){
                                                    if(bus == childSnapshot.val().bus){
                                                      if(metro == childSnapshot.val().metro){
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
                                                  let rating = childSnapshot.val().rate;
                                                  //document.getElementById('loading').style.display = "none";
                                                  document.getElementById('0%').style.display = "none";
                        document.getElementById('50%').style.display = "block";
                                                  AddAds(
                                                    title,
                                                    description,
                                                    time,
                                                    location,
                                                    appID,
                                                    price,
                                                    image,
                                                    Name,
                                                    type,
                                                    rating
                                                  );
                                                  check2(counter);
                                                });
                                              });
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
    document.getElementById('features').style.display = "none";
  }
  if(para > 0){
    document.getElementById('noRes').style.display = "none";
    document.getElementById('features').style.display = "block";
  }
}
function clear2(){
  document.getElementById('noRes').style.display = "none";
  document.getElementById('features').style.display = "block";
}
function clear() {
  document.getElementById("adHeader").innerHTML = "";
}
function scrol(){
  var elmntToView = document.getElementById("toScroll");
elmntToView.scrollIntoView({behavior: "smooth",inline: "nearest"}); 
}
//document.getElementById("search").addEventListener("click", scrol);
document.getElementById("search").addEventListener("click", check);
document.getElementById("search").addEventListener("click", clear);
document.getElementById("search").addEventListener("click", clear2);
document.getElementById("countries").addEventListener("change", setCit);
document.getElementById("cities").addEventListener("change", setLoc);

document.getElementById("countries").addEventListener("change", cityCounter);

//document.getElementById("cities").addEventListener("click", setLoc);

