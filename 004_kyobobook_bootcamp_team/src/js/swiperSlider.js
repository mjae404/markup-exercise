const headerTab = new Swiper('.header_tab_list_wrapper', {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true
});

const headerNav = new Swiper('.header_nav_list_wrap', {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true
});

const swiper = new Swiper('.swiper_pattern_info', {
    slidesPerView: "auto",
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiper3 = new Swiper('.layer_swiper', {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
});

const tabList = new Swiper('.area_tab_list_wrapper', {
    slidesPerView: "auto",
});

var mySlideWrap = document.getElementsByClassName("myslider");

for( var i = 0; i < mySlideWrap.length; i++ ){
    var slider = mySlideWrap[i];
    var myswiper = new Swiper(slider, {
        slidesPerView: "auto",
        spaceBetween: 20,
    });
}