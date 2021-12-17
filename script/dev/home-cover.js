var elHomecover = document.querySelector('.home-bgline');
window.addEventListener('load', function() {
    elHomecover.classList.add('style-ready');
});


// @codekit-prepend '../dev/lottie.js';
// @codekit-prepend '../../assets/lottie-v1.js';
var params = {
    container: document.getElementById('lottie'),
    renderer: 'canvas',
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
        filterSize: {
        width: '400%',
        height: '400%',
        x: '-100%',
        y: '-100%',
        }
    }
};

var anim;

anim = lottie.loadAnimation(params);

anim.addEventListener('complete', function() {
    anim.playSegments([150,359], true)
})
anim.play();
