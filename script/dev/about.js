
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

    let faqEl = document.querySelectorAll('.aboutv2-sectionfaq_el');
    faqEl.forEach(function (el, index) {
        
        el.addEventListener('click', function (event) {
            if(el.classList.contains('style-open')){
                faqEl.forEach(function (el) {
                    el.classList.remove('style-open');
                })
            } else {
                faqEl.forEach(function (el) {
                    el.classList.remove('style-open');
                })
                el.classList.add('style-open');
            }
        });
    });


    let filterDropdownEl = document.querySelectorAll('.aboutv2-sectionjob_dropdownlicontent');
    filterDropdownEl.forEach(function (el, index) {
        el.addEventListener('click', function (event) {
            if(el.classList.contains('style-active')){
                el.classList.remove('style-active');
            } else {
                el.classList.add('style-active');
            }

            let nbActive = 0;
            document.querySelectorAll('.aboutv2-sectionjob_li').forEach(function (el1, index) {
                el1.style.display = "none"
            });
            document.querySelectorAll('.aboutv2-sectionjob_li').forEach(function (el1, index) {
                let tag = $(el1).find('.aboutv2-sectionjob_litag:last-child div').text();
                console.log(tag);
                filterDropdownEl.forEach(function (el2, index) {
                    if(el2.classList.contains('style-active')){
                        nbActive++;
                        if($(el2).text().toLowerCase() === tag.toLowerCase() ) {
                            el1.style.display = ""
                        }
                    }
                });
            });

            if(nbActive === 0) {
                document.querySelectorAll('.aboutv2-sectionjob_li').forEach(function (el1, index) {
                    el1.style.display = ""
                });
            }
        });
    });
    
}