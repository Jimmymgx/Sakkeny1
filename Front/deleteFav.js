document.getElementById("del").addEventListener("click", delFromFav);
function delFromFav(){
        firebase.database().ref('Favorites').orderByChild("user").equalTo(localStorage.getItem("currMail")).once('value', function (snapshot) {
            snapshot.forEach(childSnapshot => {
              if(childSnapshot.val().Ad == localStorage.getItem("appID")){
                childSnapshot.ref.remove();
                window.location.reload();
              }
            });
        });
}