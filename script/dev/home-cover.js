// @codekit-prepend '../dev/lottie.js';
// @codekit-prepend '../../assets/lottie-v1.js';

var elHomeCover = document.querySelector('.home-bgline');
//var elHomeFeatures = document.querySelector('.home-sectionfeatures');

if(elHomeCover){
    window.addEventListener('load', function() {
        elHomeCover.classList.add('style-ready');
        //elHomeFeatures.classList.add('style-ready');
    });
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
}

