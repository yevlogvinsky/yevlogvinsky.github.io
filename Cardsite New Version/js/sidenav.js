function w3_open() {
  document.getElementById("mainWindow").style.marginLeft = "25%";
  document.getElementById("sideNav").style.width = "25%";
  document.getElementById("sideNav").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
  document.getElementById("mainWindow").style.transition = "all 0.3s";  
}
function w3_close() {
  document.getElementById("mainWindow").style.marginLeft = "0%";
  document.getElementById("sideNav").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}