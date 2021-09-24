
document.getElementById("Logout").addEventListener("click",doSignOut);
function doSignOut(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "index.html";
        localStorage.setItem("currMail", "");
      }).catch((error) => {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });

}