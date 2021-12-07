var elNav = document.querySelector('#nav');
window.addEventListener('scroll', function() {
 var y = window.scrollY;
 if ( y >= 1 ) {
  elNav.classList.add('style-scroll');
 } else {
  elNav.classList.remove('style-scroll');
 }
});