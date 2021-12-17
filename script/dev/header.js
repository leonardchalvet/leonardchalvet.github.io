var elNav = document.querySelector('#nav');
window.addEventListener('scroll', function() {
 var y = window.scrollY;
 if ( y >= 1 ) {
  elNav.classList.add('style-scroll');
 } else {
  elNav.classList.remove('style-scroll');
 }
});



var elCross = document.querySelector('.header-cross');


elCross.addEventListener('click', event => {
  if ( elNav.classList.contains('style-open') ) {
    elNav.classList.remove('style-open');
    console.log('salut');
   } else {
    elNav.classList.add('style-open');
   }
});