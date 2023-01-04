
// slider
// $('.carousel.carousel-slider').carousel({
//   fullWidth: false,
//   indicators: true,
//   noWrap: true,
//   pressed: true,
// });
// autoplay();
// function autoplay() {
//     $('.carousel').carousel('next');
//     setTimeout(autoplay, 8000);
// }

// nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}
// dropdown
$(document).ready(function () {
  $('.dropdown-trigger').dropdown({
      constrainWidth: false,
      hover: true, 
      belowOrigin: true,
      alignment: 'left',
      autoTrigger: true,
      coverTrigger: true,
      closeOnClick: false,
  });
  });
// scrollspy
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

// modal
// document.addEventListener('DOMContentLoaded', function() {
//   var mod = document.querySelectorAll('#mission');
//   mod.close(),
//   M.Modal.init(mod,{
    
//     // startingTop:'4%',
//     // endingTop:'30%',
//     inDuration:1000,
//     outDuration:1000,
//     dismissible: true
//   });
// });

$(document).ready(function(){
  $('.modal').modal();
});
// modal auto start
$(document).ready(function(){
  $('.modal').modal({
    opacity: 0.8,
    preventScrolling: false,
    dismissible: false,
    inDuration: '500',
    startingTop: '-10%',
    endingTop: '5%',
  });
  $('#job').modal('open');
});
// collasible
$(document).ready(function(){
  $('.collapsible').collapsible();
});
      

// sidenav
$(document).ready(function(){
  $('.sidenav').sidenav({
      edge: 'left',
      preventScrolling: true,
      draggable: false,
  });
});

// home slides
var slider = document.querySelector(".slider")
M.Slider.init(slider,{
    height: 300,
    interval: 3000,
    indicators: false,
    duration: 500,
});
// materialboxed
$(document).ready(function(){
  $('.materialboxed').materialbox();
});
// parallax
$(document).ready(function(){
  $('.parallax').parallax();
});

      
//ads slides
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); 
}

// $(document).ready(function () {
// $('.dropdown-trigger').dropdown({
//     constrainWidth: false,
//     hover: true, 
//     belowOrigin: false,
//     alignment: 'left'
// });
// });

