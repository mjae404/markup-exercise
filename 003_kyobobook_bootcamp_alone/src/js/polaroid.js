var scroll = window.requestAnimationFrame;
var images = document.querySelectorAll('.show');

function isInViewport(element) {
    var rectangle = element.getBoundingClientRect();
    return (
        rectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight)
)
}

function handleVisibility() {
    images.forEach(function (image) {
        if (isInViewport(image)) {
            image.classList.add("visible");
        } else {
            image.classList.remove("visible");
        }
    })
    scroll(handleVisibility);
}
handleVisibility();