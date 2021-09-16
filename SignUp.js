const con = require("./Config");
firebase.initializeApp(con);
firebase.analytics();
firebase.auth.Auth.Persistence.LOCAL
$("#signu").click(function(){
    var email = $("#emailid").val();
    var pass = $("#password").val();
    var confirm = $("#cpassword").val();
    if(pass == confirm){
        firebase.auth().createUserWithEmailAndPassword(email, pass)
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : "+ errorMessage);
    // ..
    });
    }
});