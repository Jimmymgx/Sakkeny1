
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
  
  document.getElementById('loading').style.display = "block";
  var pay  = document.getElementById("Pay").value;
  var isflat = document.getElementById("unitType").value;
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
    if(ci == "" && ty == "" && fr == "" && t == "" && u == "" && iselevator == false && issec == false && isair == false && isgreatView == false && isfire == false && islarge == false && isdog == false && isplay == false && isswim == false && isbbq == false && isroof == false && loc == "" && isflat == "" && (pay == "" || pay == "Both") && frarea == "" && tarea == "" && finish == "" && bed == "" && bath == "" && ismain == false && isbeach == false && islake == false && isnile == false && iswifi == false && isgarden == false && issports == false && isschool == false && ishospital == false && iscafe == false && isswimable == false && isgym == false && issauna == false){
      alert('You have to Make the filter');
      window.scrollTo(0, 300);
    }

    else{
      if(fr == "" && t == "" && frarea == "" && tarea == ""){
        fetchData();
      }
      else if (fr == "" && t == "" ){
        if(frarea == "" || tarea == ""){
          alert("This is wrong you have to enter a range of Area");
        }
        else {
          if(!isNaN(frarea)){
            if(!isNaN(tarea)){
             if (tarea >= frarea){
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
      else if (frarea == "" && tarea == ""){
        if(fr == "" || t == ""){
          alert("This is wrong you have to enter a range of price");
        }
        else {
          if(!isNaN(fr)){
            if(!isNaN(t)){
             if (t >= fr){
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
      else{
        if(fr == "" || t == ""){
          alert("This is wrong you have to enter a range of price");
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
                  alert("This is wrong you have to enter a range of Area");
                }
                else {
                  if(!isNaN(frarea)){
                    if(!isNaN(tarea)){
                     if (tarea >= frarea){
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
          r.innerHTML =" Rate : " + '<span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'  
      }else if(rating>0 && rating<1){
          r.innerHTML =" Rate : " + '<span class="fa fa-star-half-o checked"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
      }else if(rating == 1){
          r.innerHTML =" Rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
      }
      else if(rating > 1 && rating<2){
          r.innerHTML =" Rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'  
      }else if(rating ==2){
          r.innerHTML = " Rate : " +'<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
      }
      else if (rating > 2 && rating <3){
          r.innerHTML = " Rate : " +'<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'  
      }else if(rating ==3){
          r.innerHTML =" Rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
      }
      else if (rating > 3 && rating <4){
          r.innerHTML =" Rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star"></span>'  
      }else if(rating ==4){
          r.innerHTML =" Rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>'   
      }
      else if (rating > 4 && rating <5){
          r.innerHTML =" Rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span>'  
      }else if (rating == 5){
          r.innerHTML =" Rate : " + '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>'  
      }else{
          
          r.innerHTML =" Rate : " + '<span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'  
      
      }
      //r.innerHTML = " Rate : " +rating + " / 5";
      name1=name.split(' ');
      spanLeft.append(name1[0]);
      spanLeft.appendChild(t);
      let img = document.createElement('img');
      img.setAttribute('src',image);
      img.setAttribute('class','testi-meta text-muted');
      img.style.width = '100px';
      img.style.height ='40px';
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
  spanLeft.appendChild(img);
  divRight.appendChild(spanRight);
  divFoot.appendChild(divLeft);
  divFoot.appendChild(divRight);
  divWrap.appendChild(adFig);
  divWrap.appendChild(divBody);
  divWrap.appendChild(divFoot);
  divMain.appendChild(divWrap);
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
  
  
  
  document.getElementById('adHeader').appendChild(divSize);
  cityCounter();
  
}
function cityCounter(){
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
          }
      }); 
      document.getElementById("cities").options[i + 2].innerHTML = cit[i] + "  (" + counter + ")";   
  });
  //document.getElementById(cit[i]).innerHTML = cit[i] + "  (" + counter + ")";
  }
  
}
function setLoc(){
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
    var op = document.createElement('option');
    op.value = "";
    op.disabled;
    op.selected;
    op.hidden;
      op.innerHTML = "Location";
      sel.appendChild(op);
      
  }
  if(city == "Cairo"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< cairo.length; i++){
      var opt = document.createElement('option');
      opt.value = cairo[i];
      opt.innerHTML = cairo[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Alexandria"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< alex.length; i++){
      var opt = document.createElement('option');
      opt.value = alex[i];
      opt.innerHTML = alex[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Giza"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< giza.length; i++){
      var opt = document.createElement('option');
      opt.value = giza[i];
      opt.innerHTML = giza[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Beheira"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< beheira.length; i++){
      var opt = document.createElement('option');
      opt.value = beheira[i];
      opt.innerHTML = beheira[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Kafr El Sheikh"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< kafr.length; i++){
      var opt = document.createElement('option');
      opt.value = kafr[i];
      opt.innerHTML = kafr[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Port Said"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< port.length; i++){
      var opt = document.createElement('option');
      opt.value = port[i];
      opt.innerHTML = port[i];
      sel.appendChild(opt);
    }
  }
  if(city == "North Sinai" || city == "South Sinai"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< Sinai.length; i++){
      var opt = document.createElement('option');
      opt.value = Sinai[i];
      opt.innerHTML = Sinai[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Gharbia"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< gharb.length; i++){
      var opt = document.createElement('option');
      opt.value = gharb[i];
      opt.innerHTML = gharb[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Monufia"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< mnofia.length; i++){
      var opt = document.createElement('option');
      opt.value = mnofia[i];
      opt.innerHTML = mnofia[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Qalyubia"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< qalyobia.length; i++){
      var opt = document.createElement('option');
      opt.value = qalyobia[i];
      opt.innerHTML = qalyobia[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Sharqia"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< sharqia.length; i++){
      var opt = document.createElement('option');
      opt.value = sharqia[i];
      opt.innerHTML = sharqia[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Ismailia"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< ismailia.length; i++){
      var opt = document.createElement('option');
      opt.value = ismailia[i];
      opt.innerHTML = ismailia[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Faiyum"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< fayom.length; i++){
      var opt = document.createElement('option');
      opt.value = fayom[i];
      opt.innerHTML = fayom[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Suez"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< suez.length; i++){
      var opt = document.createElement('option');
      opt.value = suez[i];
      opt.innerHTML = suez[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Damietta"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< domiat.length; i++){
      var opt = document.createElement('option');
      opt.value = domiat[i];
      opt.innerHTML = domiat[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Beni Suef"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< baniswef.length; i++){
      var opt = document.createElement('option');
      opt.value = baniswef[i];
      opt.innerHTML = baniswef[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Minya"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< minya.length; i++){
      var opt = document.createElement('option');
      opt.value = minya[i];
      opt.innerHTML = minya[i];
      sel.appendChild(opt);
    }
  }
  if(city == "New Valley"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< newVally.length; i++){
      var opt = document.createElement('option');
      opt.value = newVally[i];
      opt.innerHTML = newVally[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Asyut"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< asyot.length; i++){
      var opt = document.createElement('option');
      opt.value = asyot[i];
      opt.innerHTML = asyot[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Red Sea"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< redSea.length; i++){
      var opt = document.createElement('option');
      opt.value = redSea[i];
      opt.innerHTML = redSea[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Sohag"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< sohag.length; i++){
      var opt = document.createElement('option');
      opt.value = sohag[i];
      opt.innerHTML = sohag[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Qena"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< qena.length; i++){
      var opt = document.createElement('option');
      opt.value = qena[i];
      opt.innerHTML = qena[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Luxor"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< luxor.length; i++){
      var opt = document.createElement('option');
      opt.value = luxor[i];
      opt.innerHTML = luxor[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Aswan"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< aswan.length; i++){
      var opt = document.createElement('option');
      opt.value = aswan[i];
      opt.innerHTML = aswan[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Matruh"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< matroh.length; i++){
      var opt = document.createElement('option');
      opt.value = matroh[i];
      opt.innerHTML = matroh[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Dakahlia"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
    op.disabled = 'true';
    op.selected ='true';
    op.hidden = 'true';
      op.innerHTML = "Location";
      sel.appendChild(op);
      var op2 = document.createElement('option');
      op2.value = "";
        op2.innerHTML = "All";
        sel.appendChild(op2);
    for (var i = 0; i< daka.length; i++){
      var opt = document.createElement('option');
      opt.value = daka[i];
      opt.innerHTML = daka[i];
      sel.appendChild(opt);
    }
  }
  if(city == "Gouna"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Gouna";
      opt.innerHTML = "Gouna";
      sel.appendChild(opt);
  }
  if(city == "North Coast"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "North Coast";
      opt.innerHTML = "North Coast";
      sel.appendChild(opt);
  }
  if(city == "Ain Sokhna"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Ain Sokhna";
      opt.innerHTML = "Ain Sokhna";
      sel.appendChild(opt);
  }
  if(city == "Marina"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Marina";
      opt.innerHTML = "Marina";
      sel.appendChild(opt);
  }
  if(city == "Ras Sedr"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Ras Sedr";
      opt.innerHTML = "Ras Sedr";
      sel.appendChild(opt);
  }
  if(city == "Dahab"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Dahab";
      opt.innerHTML = "Dahab";
      sel.appendChild(opt);
  }
  if(city == "Hurghada"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Hurghada";
      opt.innerHTML = "Hurghada";
      sel.appendChild(opt);
  }
  if(city == "Marsa Alam"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Marsa Alam";
      opt.innerHTML = "Marsa Alam";
      sel.appendChild(opt);
  }
  if(city == "El Alamein"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "El Alamein";
      opt.innerHTML = "El Alamein";
      sel.appendChild(opt);
  }
  if(city == "Sharm ElSheikh"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
      var opt = document.createElement('option');
      opt.value = "Sharm ElSheikh";
      opt.innerHTML = "Sharm ElSheikh";
      sel.appendChild(opt);
  }
}
function fetchData() {
  var num = 0;
  var counter = 0;
  var counter2 = 0;
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
        kk = childSnapshot.key;
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
                                                document.getElementById('loading').style.display = "none";
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
document.getElementById("search").addEventListener("click", check);
document.getElementById("search").addEventListener("click", clear);
document.getElementById("search").addEventListener("click", clear2);
document.getElementById("cities").addEventListener("change", setLoc);
//document.getElementById("cities").addEventListener("click", setLoc);

