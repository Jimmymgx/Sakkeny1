function show (){
    document.getElementById("ccc").style.display = "block";
    document.getElementById("num").style.display = "block";
    document.getElementById("showNum").style.display = "none";
    document.getElementById("Whats").style.display = "block";
}
document.getElementById("showNum").addEventListener("click", show);
