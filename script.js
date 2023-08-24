var swiper = new swiper(".myswiper-1", {
    slidesPerView :1,
    spaceBetween: 30,
    loop:true,
    loopfillGroupsthelank:true,
    paginatiion: {
        el:" .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEL:".swiper-button-next" ,
        prevEL:".swiper-button-prev" ,
     }
});
var swiper = new swiper(".myswiper-1", {
    slidesPerView :3,
    spaceBetween: 20,
    loop:true,
    loopfillGroupsWithblank:true,
    navigation: {
        nextEL:".swiper-button-next" ,
        prevEL:".swiper-button-prev" ,
     },
     breakpoints : {
        0: {
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,  
        },
       950: {
        slidesPerView:3,
       }
     }
});

let tabInputs = document.querySelectorAll('.tabInput');

tabInputs.forEach(function(input) {

    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })

});
