
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
function sendM(email, t){
        Email.send({
          Host: "mail.sakkeny.com",
          Username: "ads@sakkeny.com",
          Password: "1-Sakkeny-1",
            To: email,
            From: "ads@sakkeny.com",
            Subject: "Your Ad " + t,
            Body: "Your Ad "+ t + " is after review process and it'll be accepted or diclined within 48 hours<br><br> Thanks for using Sakkeny <br> To see the Terms and conditions go to <br> https://sakkeny.com/terms-and-conditions.html <br> To see the privacy policy go to <br> https://sakkeny.com/privacy.html",
        })
            .then(function (message) {
            //alert("mail sent successfully")
            });
    }
    function sendM2(email, t){
      Email.send({
        Host: "mail.sakkeny.com",
        Username: "ads@sakkeny.com",
        Password: "1-Sakkeny-1",
          To: email,
          From: "ads@sakkeny.com",
          Subject: "Your request " + t,
          Body: "There's a new ad uploaded that match your request " + t +" check it out after 48 hours",
      })
          .then(function (message) {
          //alert("mail sent successfully")
          });
  }
  function checkRequests(){
    //alert('Under process');
    //Current
    var city = document.getElementById("cities").value;
    var location = document.getElementById("locations").value;
    var unittype = document.getElementById("unitType").value;
    var unit = document.getElementById("unitT").value;
    var bedrooms = document.getElementById("bed").value;
    var bathrooms = document.getElementById("bath").value;
    var finishing = document.getElementById("finish").value;
    var unitfor = "";
    var payment = "";
    if(document.getElementById("rent").checked){
      unitfor = "Rent";
    }
    else if (document.getElementById("sale").checked){
      unitfor = "Sale";
    }
    else{
      unitfor = "Old rent";
    }
    if(document.getElementById("cash").checked){
      payment = "Cash";
    }
    else if (document.getElementById("install").checked){
      payment = "Installment";
    }
    else{
      payment = "Both";
    }
    var elevator = getch("IsElevator");
    var sec = getch("IsSecure");
    var air = getch("IsAir");
    var greatView = getch("IsGreat");
    var fire = getch("IsFire");
    var large = getch("IsLarge");
    var dog = getch("IsDog");
    var play = getch("IsPlay");
    var swim = getch("IsSwim");
    var bbq = getch("IsBbq");
    var roof = getch("IsRoof");
    var main = getch("IsMain");
    var beach = getch("IsBeach");
    var lake = getch("IsLake");
    var nile = getch("IsNile");
    var wifi = getch("IsWifi");
    var garden = getch("IsGarden");
    var sports = getch("IsSports");
    var school = getch("IsSchool");
    var hospital = getch("IsHospital");
    var cafe = getch("IsCafe");
    var swimable = getch("IsSwimable");
    var gym = getch("IsGym");
    var sauna = getch("IsSauna");
    var price = document.getElementById("price").value;
    var area = document.getElementById("area").value;
    firebase
    .database()
    .ref("requests")
    .once("value", function (snapshot) {
      snapshot.forEach((childSnapshot) => {
        let k = childSnapshot.key;
        let loc = childSnapshot.val().location;
      let ci = childSnapshot.val().City;
      let bed = childSnapshot.val().bedRooms;
      let bath = childSnapshot.val().bathRooms;
      let finish = childSnapshot.val().Finishing;
      let iselevator = childSnapshot.val().elevator;
      let issec = childSnapshot.val().secure;
      let isair = childSnapshot.val().Air;
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
  if (isair == false) {
    ai = air;
  }
  else{ai= isair;}
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
  function checkValidity(){
    var cash = document.getElementById("cash").checked;
    var inst = document.getElementById("install").checked;
    var both = document.getElementById("both").checked;
    var tt = document.getElementById("unitT").value;
    var title = document.getElementById("title").value;
    var desc = document.getElementById("comments").value;
    var loc = document.getElementById("locations").value;
    var city = document.getElementById("cities").value;
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
                              if(Sale == true || Rent == true || old == true) {
                                if(numberOfFiles <= 10){
                                  if(numberOfFiles != 0){
                                    if(numberOfFiles2 != 0){
                                      if (unitt != ""){
                                        if(tt != ""){
                                          if(cash == true || inst == true || both == true) {
                                          addAd();
                                          //checkRequests();
                                          }
                                          else{
                                            alert("You have to choose the payment method");
                                          }
                                        }
                                        else{
                                          alert("You have to choose the unit type");
                                        }
                                      }
                                      else{
                                        alert("You have to choose the unit Category");
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
                                alert("You have to Specify is that Apartment for rent or sale or old rent");
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
  var loc = document.getElementById("locations").value;
  var city = document.getElementById("cities").value;
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
    swimable: isswimable,
    gym: isgym,
    sauna: issauna,
    price: secondprice + " " + term,
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
    UnitType: unitt, 
    Unit: tt,
    payment: pay
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
  function showTerm(){
    if(document.getElementById("rent").checked || document.getElementById("oldRent").checked){
      document.getElementById("terms").style.display = "block";
      document.getElementById("Egp").style.display = "none";
    }
    else{
      document.getElementById("terms").style.display = "none";
      document.getElementById("Egp").style.display = "block";
    }
  }
  function hideTerm(){
    
      document.getElementById("terms").style.display = "none";
      document.getElementById("Egp").style.display = "block";
  }
document.getElementById("add2").addEventListener("click", checkValidity);
document.getElementById("cities").addEventListener("change", setLoc);
document.getElementById("rent").addEventListener("change", showTerm);
document.getElementById("oldRent").addEventListener("change", showTerm);
document.getElementById("sale").addEventListener("change", hideTerm);
//document.getElementById("setActive").addEventListener("click", makeLoader);