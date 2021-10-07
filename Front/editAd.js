console.log(localStorage.getItem('appID'));
document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
   event.preventDefault();
   document.getElementById("addEdit").click();
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
  firebase.initializeApp(firebaseConfig);
  var counter = 0;
  var number = 0;
var db = firebase.database();
var ref = firebase.database().ref('Ads');
document.getElementById("unitType").addEventListener("change", setType);
document.getElementById("countries").addEventListener("change", setCit);
document.getElementById("cities").addEventListener("change", setLoc);
function setType(){
  var cat = document.getElementById('unitType').value;
  var res = ['Apartment', 'Duplex', "Villa", "Chalet", "Cabin", "Town house", "Twin house", "Condominium", "Cottage", "Mansion", "Barndominium", "Roof", "Penthouse", "IVilla", "Residential Land", "Hotel appartment", "While building", "Bulk sale/rent units", "Full floor", "Half floor", "Compounds"];
  var com = ["Warehouse", "Whole building", "Commercial land", "Showroom", "Retail shop", "Full floor", "Half floor", "Factory", "Mall", "Retail unit in a mall", "Villa", "Staff accommodation", "Bulk sale/rent units"];
  var adm = ["Office space", "Warehouse", "Administrative land", "Full floor", "Half floor", "Whole building", "Factory", "Mall", "Villa", "Staff accommodation", "Bulk sale/rent units", "Co-working space"];
  var med = ["Medical building", "Medical land", "Clinic", "Full floor", "Half floor", "Whole building", "Medical centre unit", "Hospital", "Villa", "Staff accommodation", "Bulk sale/rent units"];
  var cit = document.getElementById("unitT");
if(cat == ""){
  cit.innerHTML = "";
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "";
    cit.appendChild(op);
}
if(cat == "Residential"){
  cit.innerHTML = "";
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "";
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
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "";
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
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "";
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
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      cit.appendChild(op);
  }
  if(country == "Egypt"){
    cit.innerHTML = "";
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
      sel.appendChild(op);
  }
  if(city == "Cairo"){
    sel.innerHTML = "";
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
      var op = document.createElement('option');
      op.value = "";
        op.innerHTML = "";
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
        var op = document.createElement('option');
        op.value = "";
          op.innerHTML = "";
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
          var op = document.createElement('option');
          op.value = "";
            op.innerHTML = "";
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
            var op = document.createElement('option');
            op.value = "";
              op.innerHTML = "";
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
              var op = document.createElement('option');
              op.value = "";
                op.innerHTML = "";
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
                var op = document.createElement('option');
                op.value = "";
                  op.innerHTML = "";
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
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
      var op = document.createElement('option');
      op.value = "";
        op.innerHTML = "";
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
        var op = document.createElement('option');
        op.value = "";
          op.innerHTML = "";
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
          var op = document.createElement('option');
          op.value = "";
            op.innerHTML = "";
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
            var op = document.createElement('option');
            op.value = "";
              op.innerHTML = "";
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
  var op = document.createElement('option');
  op.value = "";
    op.innerHTML = "";
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
    var op = document.createElement('option');
    op.value = "";
      op.innerHTML = "";
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
      var op = document.createElement('option');
      op.value = "";
        op.innerHTML = "";
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
        var op = document.createElement('option');
        op.value = "";
          op.innerHTML = "";
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
          var op = document.createElement('option');
          op.value = "";
            op.innerHTML = "";
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
            var op = document.createElement('option');
            op.value = "";
              op.innerHTML = "";
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
              var op = document.createElement('option');
              op.value = "";
                op.innerHTML = "";
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
                var op = document.createElement('option');
                op.value = "";
                  op.innerHTML = "";
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
                  var op = document.createElement('option');
                  op.value = "";
                    op.innerHTML = "";
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
                    var op = document.createElement('option');
                    op.value = "";
                      op.innerHTML = "";
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
                      var op = document.createElement('option');
                      op.value = "";
                        op.innerHTML = "";
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
                        var op = document.createElement('option');
                        op.value = "";
                          op.innerHTML = "";
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
                          var op = document.createElement('option');
                          op.value = "";
                            op.innerHTML = "";
                            sel.appendChild(op);
                          for (var i = 0; i< AljawfLocation.length; i++){
                            var opt = document.createElement('option');
                            opt.value = AljawfLocation[i];
                            opt.innerHTML = AljawfLocation[i];
                            sel.appendChild(opt);
                            }
                          }
                      
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
function Del(link){
  firebase.database().ref('images').orderByChild("link").equalTo(link).once('value', function (snapshot){
      snapshot.forEach(childSnapshot => {
          delStor(childSnapshot.val().link);
          childSnapshot.ref.remove();
      });
  });    
  document.getElementById('ImgDeleted').innerHTML = "The Img has been successfully Deleted";
  document.getElementById('ImgDeleted').style.display = 'block';
  setTimeout(() => {
    document.getElementById('ImgDeleted').style.display = 'none';
  }, 5000);}
function putImg(image){
  
  var but = document.createElement('div');
  but.style.maxWidth = '100px';
  but.style.maxHeight = '100px';
  but.style.marginRight = '20px';
  but.style.marginTop = '50px';
  but.setAttribute('class','col-md-5 col-sm-8'); 
  console.log(image);
  but.innerHTML = '<img  style = "max-width:100px; max-hight:100px;"src="' + image + '" />';
  console.log("but");
  localStorage.setItem("imagesAd", parseInt(localStorage.getItem("imagesAd")) + 1);
  console.log(localStorage.getItem("imagesAd"));
  document.getElementById("divForImg").appendChild(but);
  but.addEventListener("click", function (){
    Del(image);
    but.style.display = "none";
    localStorage.setItem("imagesAd", parseInt(localStorage.getItem("imagesAd")) -1);
    console.log(localStorage.getItem("imagesAd"));
  });
}
function fetchAllData(){
  localStorage.setItem("imagesAd", 0);
    ref.orderByKey().equalTo(localStorage.getItem('appID')).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
          document.getElementById('countries').value = childSnapshot.val().Country;
          setCit();
          document.getElementById('cities').value = childSnapshot.val().City;
            document.getElementById("title").value = childSnapshot.val().Title;
            setLoc();
            document.getElementById("locations").value = childSnapshot.val().location;
            document.getElementById("comments").value = childSnapshot.val().Description;
            document.getElementById("area").value = parseInt(childSnapshot.val().area);
          document.getElementById("finish").value = childSnapshot.val().Finishing;
          document.getElementById("floor").value = childSnapshot.val().floor;
          document.getElementById("unitType").value = childSnapshot.val().UnitType;
          setType();
          document.getElementById("unitT").value = childSnapshot.val().Unit;
          document.getElementById("bed").value = childSnapshot.val().bedRooms;
          document.getElementById("bath").value = childSnapshot.val().bathRooms;
          if(childSnapshot.val().Type == "Rent"){document.getElementById("rent").checked = true}
          else if(childSnapshot.val().Type == "Sale"){
            document.getElementById("sale").checked = true;
          }
          else{
            document.getElementById("oldRent").checked = true;
          }
          if(childSnapshot.val().payment == "Cash"){document.getElementById("cash").checked = true}
          else if (childSnapshot.val().payment == "Installment"){
            document.getElementById("install").checked = true;
          }
          else{
            document.getElementById("both").checked = true;
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
          if(childSnapshot.val().mainStreet== false){document.getElementById("IsMain").checked = false}
          else{
            document.getElementById("IsMain").checked = true;
          }
          if(childSnapshot.val().beachFront== false){document.getElementById("IsBeach").checked = false}
          else{
            document.getElementById("IsBeach").checked = true;
          }
          if(childSnapshot.val().lake== false){document.getElementById("IsLake").checked = false}
          else{
            document.getElementById("IsLake").checked = true;
          }
          if(childSnapshot.val().nile== false){document.getElementById("IsNile").checked = false}
          else{
            document.getElementById("IsNile").checked = true;
          }
          if(childSnapshot.val().wifi== false){document.getElementById("IsWifi").checked = false}
          else{
            document.getElementById("IsWifi").checked = true;
          }
          if(childSnapshot.val().garden== false){document.getElementById("IsGarden").checked = false}
          else{
            document.getElementById("IsGarden").checked = true;
          }
          if(childSnapshot.val().sportsClup == false){document.getElementById("IsSports").checked = false}
          else{
            document.getElementById("IsSports").checked = true;
          }
          if(childSnapshot.val().school== false){document.getElementById("IsSchool").checked = false}
          else{
            document.getElementById("IsSchool").checked = true;
          }
          if(childSnapshot.val().hospital== false){document.getElementById("IsHospital").checked = false}
          else{
            document.getElementById("IsHospital").checked = true;
          }
          if(childSnapshot.val().cafe== false){document.getElementById("IsCafe").checked = false}
          else{
            document.getElementById("IsCafe").checked = true;
          }
          if(childSnapshot.val().bus== false){document.getElementById("IsBus").checked = false}
          else{
            document.getElementById("IsBus").checked = true;
          }
          if(childSnapshot.val().metro== false){document.getElementById("IsMetro").checked = false}
          else{
            document.getElementById("IsMetro").checked = true;
          }
          if(childSnapshot.val().swimable== false){document.getElementById("IsSwimable").checked = false}
          else{
            document.getElementById("IsSwimable").checked = true;
          }
          if(childSnapshot.val().gym== false){document.getElementById("IsGym").checked = false}
          else{
            document.getElementById("IsGym").checked = true;
          }
          if(childSnapshot.val().sauna== false){document.getElementById("IsSauna").checked = false}
          else{
            document.getElementById("IsSauna").checked = true;
          }
          document.getElementById("price").value = parseInt(childSnapshot.val().price);
        })
    });
    firebase.database().ref('images').orderByChild("main").equalTo(localStorage.getItem("appID")).once('value', function (snapshot) {
      snapshot.forEach(childSnapshot => {
        if(childSnapshot.val().Des != "Contract"){
          image = childSnapshot.val().link;
          check = true;
          putImg(image);
          console.log(image);
        }
      });
      if(check == false){
      }
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
    var cash = document.getElementById("cash").checked;
    var inst = document.getElementById("install").checked;
    var both = document.getElementById("both").checked;
    var tt = document.getElementById("unitT").value;
    var title = document.getElementById("title").value;
    var desc = document.getElementById("comments").value;
    var loc = document.getElementById("locations").value;
    var city = document.getElementById("cities").value;
    var country = document.getElementById("countries").value;
    var flr = document.getElementById("floor").value;
    var bed = document.getElementById("bed").value;
    var bath = document.getElementById("bath").value;
    var finish = document.getElementById("finish").value;
    var pric = document.getElementById("price").value;
    var are = document.getElementById("area").value;
    var Rent = document.getElementById("rent").checked;
    var Sale = document.getElementById("sale").checked;
    var old = document.getElementById('oldRent').checked;
    var numberOfFiles = document.getElementById('images').files.length;
    var unitt = document.getElementById("unitType").value;
    if (title != ""){
      if(desc != ""){
        if(country != ""){
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
                                if(Sale == true || Rent == true || old == true) {
                                  if((numberOfFiles + parseInt(localStorage.getItem("imagesAd"))) <= 10){
                                    if((numberOfFiles + parseInt(localStorage.getItem("imagesAd"))) != 0){
                                        if (unitt != ""){
                                          if(tt != ""){
                                            if(cash == true || inst == true || both == true) {
                                            addAd();
                                            //checkRequests();
                                            }
                                            else{
                                              document.getElementById('ErrorMessage').innerHTML = 'Error: You have to choose the payment method';
                                              document.getElementById('ErrorMessage').style.display = 'block';
                
                                            }
                                          }
                                          else{
                                            document.getElementById('ErrorMessage').innerHTML = 'Error: You have to choose the unit type';
                                              document.getElementById('ErrorMessage').style.display = 'block';
                                          }
                                        }
                                        else{
                                          document.getElementById('ErrorMessage').innerHTML = 'Error: You have to choose the unit Category';
                                          document.getElementById('ErrorMessage').style.display = 'block';
                                        }
                                     
                                    }
                                    else{
                                      document.getElementById('ErrorMessage').innerHTML = 'Error: You have to upload at least 1 image to the Ad';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                                    }
                                    
                                  }
                                  else{
                                    document.getElementById('ErrorMessage').innerHTML = 'Error: The maximum number of images to the Ad is 10 images';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                                  }
                                }
                                else{
                                  document.getElementById('ErrorMessage').innerHTML = 'Error: You have to Specify is that Apartment for rent or sale or old rent';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                                }
                              }
                              else{
                                document.getElementById('ErrorMessage').innerHTML = 'Error: Invalid Area';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                              }
                            }
                            else{
                              document.getElementById('ErrorMessage').innerHTML = 'Error: You have to add The Area';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                            }
                          }
                          else{
                            document.getElementById('ErrorMessage').innerHTML = 'Error: Invalid price';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                          }
                        }
                        else{
                          document.getElementById('ErrorMessage').innerHTML = 'Error: You have to add The Price';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                        }
                      }
                      else{
                        document.getElementById('ErrorMessage').innerHTML = 'Error: You have to add The finishing';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                      }
                    }
                    else{
                      document.getElementById('ErrorMessage').innerHTML = 'Error: You have to add The number of bathrooms';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                    }
                  }
                  else{
                    document.getElementById('ErrorMessage').innerHTML = 'Error: You have to add The number of bedrooms';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                  }
                }
                else{
                  document.getElementById('ErrorMessage').innerHTML = 'Error: Invalid floor input';
                                      document.getElementById('ErrorMessage').style.display = 'block';
                }
              }
              else{
                document.getElementById('ErrorMessage').innerHTML = 'Error: You have to add The floor';
                                      document.getElementById('ErrorMessage').style.display = 'block';
              }
            }
            else{
              document.getElementById('ErrorMessage').innerHTML = 'Error: You have to add Location';
                                      document.getElementById('ErrorMessage').style.display = 'block';
            }
          }
          else{
            document.getElementById('ErrorMessage').innerHTML = 'Error: You have to choose city';
                                      document.getElementById('ErrorMessage').style.display = 'block';
          }
        }
        else{
          document.getElementById('ErrorMessage').innerHTML = 'Error: you have to choose Country';
                                      document.getElementById('ErrorMessage').style.display = 'block';
        }
      }
      else{
        document.getElementById('ErrorMessage').innerHTML = 'Error: You have to add Description';
                                      document.getElementById('ErrorMessage').style.display = 'block';
      }
    }
    else{
      document.getElementById('ErrorMessage').innerHTML = 'Error: You have to add Title';
                                      document.getElementById('ErrorMessage').style.display = 'block';
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
          firebase.storage().ref(`images/${arr[i].name}`).put(arr[i]).then(data => {
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
              setTimeout(function(){window.location.href = "MyAccount.html"; },3000);
            }
            });
        });
        
        }
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
          var loc = document.getElementById("locations").value;
          var city = document.getElementById("cities").value;
          var country = document.getElementById("countries").value;
          var flr = document.getElementById("floor").value;
          var bed = document.getElementById("bed").value;
          var bath = document.getElementById("bath").value;
          var finish = document.getElementById("finish").value;
          var term = "EGP";
          var Typ = "";
          var pay = "";
          if(document.getElementById("rent").checked){
            Typ = "Rent";
            term = "EGP / Month";
            if(document.getElementById("long").checked){
              term = "EGP / Year";
            }
          }
          else if (document.getElementById("sale").checked){
            Typ = "Sale";
          }
          else{
            Typ = "Old rent";
            term = "EGP / month";
            if(document.getElementById("long").checked){
              term = "EGP / Year";
            }
          }
          if(document.getElementById("cash").checked){
            pay = "Cash";
          }
          else if (document.getElementById("install").checked){
            pay = "Installment";
          }
          else{
            pay = "Both";
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
          var isbus = getch("IsBus");
          var ismetro = getch("IsMetro");
          var issauna = getch("IsSauna");
          var pric = document.getElementById("price").value;
          var secondprice = pric;
          var are = document.getElementById("area").value;
          var secondarea = are + " Meter";
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var dead = today.getFullYear()+'-'+(today.getMonth()+4)+'-'+today.getDate();
          var unitt = document.getElementById("unitType").value;
          var tt = document.getElementById("unitT").value;
  ref.orderByKey().equalTo(localStorage.getItem('appID')).once('value', function (snapshot) {
    snapshot.forEach(childSnapshot => {
        var data = {
          location: loc,
          Country: country,
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
          mainStreet: ismain,
          beachfront: isbeach,
          lake: islake,
          nile: isnile,
          wifi: iswifi,
          garden: isgarden,
          sportsClup: issports,
          school: isschool,
          hospital: ishospital,
          cafe: iscafe,
          bus: isbus,
          metro: ismetro,
          swimable: isswimable,
          gym: isgym,
          sauna: issauna,
          price: secondprice + " " + term,
          area: secondarea,
          UserID: currentusermail,
          Title: title,
          Description: desc,
          IsDone: "Flase",
          Type: Typ,
          UnitType: unitt, 
          Unit: tt,
          payment: pay
          }
          childSnapshot.ref.update(data);
          console.log("Hereee");
    
    })});
    var numberOfFiles = document.getElementById('images').files.length;
    if(numberOfFiles != 0){
      number = document.getElementById('images').files.length;
      console.log("Noooooow");
      uploadImages(localStorage.getItem("appID"));
    }
    else{
      setTimeout(function(){window.location.href = "MyAccount.html";},3000);
    }

  makeLoader();
  //setTimeout(function(){window.location.href = "MyAccount.html"; },3000);
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
document.getElementById("addEdit").addEventListener("click", checkValidity);
if (window.addEventListener) {
    window.addEventListener('load', fetchAllData());
} else if (window.attachEvent) {
    window.attachEvent('onload', fetchAllData());
} else {
    window.onload = fetchAllData();
}