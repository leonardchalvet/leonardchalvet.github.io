// @codekit-prepend '../../assets/vimeo.js';

var iframe = document.querySelector('#player');
var player = new Vimeo.Player(iframe);



window.addEventListener('load', function() {
  
  player.setLoop(true);
  player.setMuted(true);

  setTimeout(function(){
    player.play();
  }, 1000);
});
