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
  document.getElementById("doRate").addEventListener("click", Rate);
  function Rate(){
      let rateVal = 0;
      let counter = 0;
      let sum = 0;
      let finRate = 0;
      if(document.getElementById("star1").checked){
        rateVal = 1;
      }
      if(document.getElementById("star2").checked){
        rateVal = 2;
      }
      if(document.getElementById("star3").checked){
        rateVal = 3;
      }
      if(document.getElementById("star4").checked){
        rateVal = 4;
      }
      if(document.getElementById("star5").checked){
        rateVal = 5;
      }
      var curUser = localStorage.getItem("currMail");
      var acc = localStorage.getItem("account");
      var data = {
        user: curUser,
        rate: acc,
        val:rateVal
      }
      firebase.database().ref('ratings').push(data);
      firebase.database().ref('ratings').orderByChild("rate").equalTo(localStorage.getItem('account')).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
            counter += 1;
            console.log(counter);
            sum += parseInt(childSnapshot.val().val);
            console.log(sum);
            
          });
          finRate = parseInt(sum) / parseInt(counter);
    console.log(finRate);
      firebase.database().ref('users').orderByChild("email").equalTo(localStorage.getItem('account')).once('value', function (snapshot) {
        snapshot.forEach(childSnapshot => {
            childSnapshot.ref.update({rate: finRate});
      });
      window.location.reload();
        });
         
    });
  }