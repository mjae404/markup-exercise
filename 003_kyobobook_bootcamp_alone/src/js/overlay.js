function posY(elm) {
	var test = elm,
		top = 0;

	while (!!test && test.tagName.toLowerCase() !== "body") {
		top += test.offsetTop;
		test = test.offsetParent;
	}

	return top;
}

function viewPortHeight() {
	var de = document.documentElement;

	if (!!window.innerWidth) {
		return window.innerHeight;
	} else if (de && !isNaN(de.clientHeight)) {
		return de.clientHeight;
	}

	return 0;
}

function scrollY() {
	if (window.pageYOffset) {
		return window.pageYOffset;
	}
	return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function checkVisible(elm, eval) {
	eval = eval || "visible";
	var vpH = viewPortHeight(), // Viewport Height
		st = scrollY(), // Scroll Top
		y = posY(elm),
		elementHeight = elm.offsetHeight;

	if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
	if (eval == "above") return ((y < (vpH + st)));
}

let sectionsVisible = '';

// Onscroll

const onscroll = function(e) {
	let texts = document.querySelectorAll('.visual_moving_image_line span');
	let sections = document.querySelectorAll('.showcase_detail_item');

	for (let test of texts) {
		const isVisible = checkVisible(test);
		test.classList.toggle('animate', isVisible);
	}

	for (let section of sections) {
		const isVisible = checkVisible(section);
		section.classList.toggle('animate', isVisible);
	}
};

window.onscroll = onscroll;
onscroll();