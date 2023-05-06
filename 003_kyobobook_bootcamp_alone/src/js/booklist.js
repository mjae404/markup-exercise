document.addEventListener("DOMContentLoaded", function () {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4
    };

    // IMAGE ANIMATION
    let revealCallback = (entries) => {
        entries.forEach((entry) => {
            let container = entry.target;

            if (entry.isIntersecting) {
                container.classList.add("animating");
                return;
            }

            if (entry.boundingClientRect.top > 0) {
                container.classList.remove("animating");
            }
        });
    };

    let revealObserver = new IntersectionObserver(revealCallback, options);

    document.querySelectorAll(".reveal").forEach((reveal) => {
        revealObserver.observe(reveal);
    });

    // TEXT ANIMATION
    let fadeupCallback = (entries) => {
        entries.forEach((entry) => {
            let container = entry.target;
            container.classList.add("not_fading_up");

            if (entry.isIntersecting) {
                container.classList.add("fading_up");
                return;
            }

            if (entry.boundingClientRect.top > 0) {
                container.classList.remove("fading_up");
            }
        });
    };

    let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

    document.querySelectorAll(".fadeup").forEach((fadeup) => {
        fadeupObserver.observe(fadeup);
    });
});

const imgWrap =document.querySelectorAll('.reveal');

for (let i = 0; i < imgWrap.length; i++) {
    imgWrap[i].addEventListener('mouseenter', (e) => {
        let parent = e.target.parentElement;
        let textWrap = parent.querySelector('.book_title');
        textWrap.classList.add('opacity');
    });
    imgWrap[i].addEventListener('mouseleave', (e) => {
        let parent = e.target.parentElement;
        let textWrap = parent.querySelector('.book_title');
        textWrap.classList.remove('opacity');
    });
}