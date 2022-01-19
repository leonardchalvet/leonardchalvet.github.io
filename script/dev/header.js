var elNav = document.querySelector('#nav');
var elCross = document.querySelector('.header-cross');


window.addEventListener('scroll', function() {
 var y = window.scrollY;
 if ( y >= 1 ) {
  elNav.classList.add('style-scroll');
  elNav.classList.remove('style-open');
 } else {
  elNav.classList.remove('style-scroll');
 }
});


elCross.addEventListener('click', function (event) {
  if ( elNav.classList.contains('style-open') ) {
    elNav.classList.remove('style-open');
   } else {
    elNav.classList.add('style-open');
   }
});



let elDropdown = document.querySelectorAll('.header-li');
elDropdown.forEach(function (el) {
  el.addEventListener('click', function (event) {
    if(el.classList.contains('style-open')){
      elDropdown.forEach(function (el) {
        el.classList.remove('style-open');
      });
    } else {
      el.classList.add('style-open');
    }
  })
});