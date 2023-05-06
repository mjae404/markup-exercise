const bannerArea = document.querySelector('.banner_wrap');
const bannerButton = document.getElementById('bannerCloseButton');

function stickyNavigation() {
    const height = document.querySelector('.swiper_main_wrap').offsetHeight;

    if (window.scrollY >= height) {
        bannerArea.classList.add('fixed');
    } else {
        bannerArea.classList.remove('fixed');
    }
}

window.addEventListener('scroll', stickyNavigation);


bannerButton.addEventListener('click', function () {
	bannerArea.classList.remove('active');
});