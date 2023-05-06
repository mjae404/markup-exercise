var swiper = new Swiper(".swiper_main", {
    loop: true,
    autoplay: true,
    dragable: true,
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },
});

const btn = document.querySelector('.swiper_button_play');
btn.onclick = function (e) {
    if(btn.classList.contains('on')){
        btn.classList.remove('on');
        swiper.autoplay.stop();
    }else{
        btn.classList.add('on');
        swiper.autoplay.start();
    }
};
const siteMoreBtn = document.querySelector('.header_site_more_button');
const siteMoreList = document.querySelector('.header_site_more_list');
const body = document.querySelector('body');
siteMoreBtn.onclick = function (e) {
    if(siteMoreBtn.classList.contains('on')){
        siteMoreBtn.classList.remove('on');
        siteMoreList.classList.remove('on');
    } else {
        siteMoreBtn.classList.add('on');
        siteMoreList.classList.add('on');
    }
}

body.onclick = function (e) {
    if(!(e.target).classList.contains('on')){
        siteMoreBtn.classList.remove('on');
        siteMoreList.classList.remove('on');
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    var interval = window.setInterval(rollingCallback, 3000);
})
function rollingCallback(){
    document.querySelector('.hot_word_list .prev').classList.remove('prev');

    let current = document.querySelector('.hot_word_list .current');
    current.classList.remove('current');
    current.classList.add('prev');

    let next = document.querySelector('.hot_word_list .next');
    if(next.nextElementSibling == null){
        document.querySelector('.hot_word_list li:first-child').classList.add('next');
    }else{
        next.nextElementSibling.classList.add('next');
    }
    next.classList.remove('next');
    next.classList.add('current');
}

var swiperSlideWrap = document.getElementsByClassName("swiper_book_list_container");

for( var i = 0; i < swiperSlideWrap.length; i++ ){
    var slider = swiperSlideWrap[i].childNodes[1];
    var swiper = new Swiper(slider, {
        loop: true,
        dragable: true,
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
}