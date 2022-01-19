


let elSectionFaq = document.querySelector('.faq-sectionfaq');

if(elSectionFaq){
    let tabFaq = document.querySelectorAll('.faq-sectionhero_tab');
    tabFaq.forEach(function (tab, index) {
        
        tab.addEventListener('click', function (event) {
            
            tabFaq.forEach(function (tab) {
                tab.classList.remove('style-active');
            })
            tab.classList.add('style-active');
            
            lists = document.querySelectorAll('.faq-sectionfaq_list');
            lists.forEach(function (list) {
                list.classList.remove('style-show');
                document.querySelector('.faq-sectionfaq_list:nth-child(' + (index+1) +')').classList.add('style-show');
            });
            
        });
    });


    let faqQ = document.querySelectorAll('.faq-sectionfaq_q');
    faqQ.forEach(function (el, index) {
        
        el.addEventListener('click', function (event) {
            if(el.classList.contains('style-open')){
                faqQ.forEach(function (el) {
                    el.classList.remove('style-open');
                })
            } else {
                faqQ.forEach(function (el) {
                    el.classList.remove('style-open');
                })
                el.classList.add('style-open');
            }
        });
    });

    let tabActive =  document.querySelector('.faq-sectionhero_tab:nth-child(1)');
        tabActive.click();
}

