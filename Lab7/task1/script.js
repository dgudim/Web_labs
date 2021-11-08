const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const project = urlParams.get('project')
//get project name from url params
//console.log(project);
window.onscroll = function() {myFunction()};

var header = document.getElementById("nav");
var content = document.getElementById("content");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("content_sticky");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("content_sticky");
  }
}

