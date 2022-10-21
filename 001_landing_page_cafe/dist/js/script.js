// 글자 애니메이션
function textShow() {
    var textShow = document.querySelectorAll(".text_show");

    for (var i = 0; i < textShow.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = textShow[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            textShow[i].classList.add("active");
        } else {
            textShow[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", textShow);

// 헤더 스크립트
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-64px";
    }
    prevScrollpos = currentScrollPos;
}