var button = document.querySelector('.header_more_button');
var header = document.querySelector('.header');
var docker = document.querySelector('.docker_menu');

const height = document.querySelector('.header').offsetHeight - document.querySelector('.header_nav_list').offsetHeight;
function headerLayer(e){
    e.addEventListener('click', function( e ){
        var tg = e.target.closest('.header_more_list_wrap');
        tg.classList.contains('on') ? tg.classList.remove('on') : tg.classList.add('on');
    })
}

headerLayer(button);

// 스크롤 감지
var prevScrollTop = 0;
document.addEventListener("scroll", function(){
    var nextScrollTop = window.pageYOffset || 0;
    if (nextScrollTop > prevScrollTop){
        docker.classList.remove('fixed');
    } else if (nextScrollTop < prevScrollTop) {
        docker.classList.add('fixed');
    }

    if (window.scrollY >= height) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

    prevScrollTop = nextScrollTop;
});

