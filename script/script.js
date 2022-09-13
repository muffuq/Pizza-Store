function openCity(evt, cityName) {
     
    var tabcontentt = document.getElementById("tabcontentt");
    tabcontentt.style.display = "none";

    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();

function openmenu() {
   var menu = document.getElementById("menuuu")
   var button = document.getElementById("menu-mobilec");
   button.style.display = "flex";
   menu.style.display = "flex";
}

function closemenu(){
  var menu = document.getElementById("menuuu");
  var button = document.getElementById("menu-mobilec");
  button.style.display = "none";
  menu.style.display = "none";
}