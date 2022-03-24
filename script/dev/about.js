
if( document.querySelector('.aboutv2-sectionprocess') ) {
    function sliderHorizontalScroll(){
        let section = document.querySelector('.aboutv2-sectionprocess');
        let containerEl = document.querySelector('.aboutv2-sectionprocess_slider');
        let el = document.querySelector('.aboutv2-sectionprocess_el:nth-child(1)');
        let grid = document.querySelector('.aboutv2-sectionprocess .wrapper');
    
        /* INIT HEIGHT SECTION */
        section.style.height = (containerEl.clientWidth - (grid.clientWidth - el.clientHeight) + 'px');
    
        /* ON SCROLL */
        window.addEventListener('scroll', function(){
            let a = section.offsetTop;
            let b = 200;
            let c = window.pageYOffset;
            let scrollValue = c - a + b;
    
            if(scrollValue > 0 && scrollValue <= (containerEl.clientWidth - grid.clientWidth)){
                containerEl.style.transform = "translateX(-" + scrollValue + "px" + ")";
            } else if (scrollValue < 0){
                containerEl.style.transform = "translateX(0px)";
            } else if (scrollValue > (containerEl.clientWidth - grid.clientWidth)){
                containerEl.style.transform = "translateX(calc(-100% + " + grid.clientWidth + 'px))';
            };
        })
    }
    if (window.matchMedia("(min-width: 767px)").matches) {
        window.addEventListener('load', function() {
            sliderHorizontalScroll();
        })
    }

    
}