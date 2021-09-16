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
  function checkV(){
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var name = fname + " " + lname;
    var mail = document.getElementById("email").value;
    var mob = document.getElementById("phone").value;
    var feedBack = document.getElementById("comments").value;
    if(fname != ""){
      if(lname != ""){
        if(mail != ""){
          mob = mob.trim();
          len = mob.length;
          start = mob.startsWith("01");
          if(mob != ""){
            if (!isNaN(mob)){
              if(len == 11){
                if(start){
                  if(feedBack != ""){
                    sendF();
                  }
                  else{
                    alert("You have to enter the feedback to submit it");    
                  } 
                }
                else{
                  alert("Invalid phone number");  
                }
              }
              else{
                alert("Invalid phone number");    
              }
            }
            else{
              alert("Invalid phone number");  
            }
          }
          else{
            alert("You have to enter your phone number to submit your feedback");  
          }
        }
        else{
          alert("You have to enter your email to submit your feedback");
        }
      }
      else{
        alert("You have to enter your last name to submit your feedback");
      }
    }
    else{
      alert("You have to enter your first name to submit your feedback");
    }
  }
  function sendF(){
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var name = fname + " " + lname;
    var mail = document.getElementById("email").value;
    var mob = document.getElementById("phone").value;
    var feedBack = document.getElementById("comments").value;
    var data = {
      name: name,
      email: mail,
      phoneNum: mob,
      feedback: feedBack,
      Accepted: "No"
    }
    firebase.database().ref('feedbacks').push(data);
    makeLoader();
    setTimeout(function(){window.location.href = "index.html";},5000);
  }
  function makeLoader(){
    
    document.getElementById("bo").innerHTML = "";
    var main = document.createElement("div");
    main.classList.add("toWait");
    var text = document.createElement("h1");
    text.innerHTML = "We're getting your feedback now <br/>Please Wait ......";
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
  document.getElementById("send").addEventListener('click',checkV);
