

function burgermenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener('click', (event) => {
  var x = document.getElementById("myTopnav");
  var b = document.getElementById("myicon");
  if(!x.contains(event.target) && !b.contains(event.target)) {
    x.className = "topnav";
  }
});
