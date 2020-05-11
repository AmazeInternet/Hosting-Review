let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

document.getElementById("button-overlay").onclick = function () {
  
  document.getElementById("button-overlay").style.display = "none";
  document.getElementById("button-hide").style.display = "none";
  document.getElementById("revealed").style.display = "initial";
}