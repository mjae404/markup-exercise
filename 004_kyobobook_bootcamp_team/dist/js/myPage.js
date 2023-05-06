// 레이어 열고 닫기
var layerButtons = document.querySelectorAll(".layer_button");
var layerCloseButtons = document.querySelectorAll(".layer_button_close");

const layerOpen = function (item) {
    let targetLayerId = this.getAttribute('data-target-layer');
    document.getElementById(targetLayerId).classList.add('on');
    body.classList.add('hidden');
}

layerButtons.forEach(layerButtons => {
    layerButtons.addEventListener('click', layerOpen);
})

const layerClose = function (item) {
    let targetLayerId = this.getAttribute('data-target-layer');
    document.getElementById(targetLayerId).classList.remove('on');
    body.classList.remove('hidden');
}

layerCloseButtons.forEach(layerCloseButtons => {
    layerCloseButtons.addEventListener('click', layerClose);
})


// 탭
const tabs = document.querySelectorAll('.tab .area_tab_item');
const panels = document.querySelectorAll('.tab .slide_wrap');

const onTabClick = function () {
    tabs.forEach(tab => tab.classList.remove('active'))
    this.classList.add('active')

    panels.forEach(panel => panel.classList.remove('active'))
    const panelId = this.getAttribute('data-panel')
    document.getElementById(panelId).classList.add('active')
}

tabs.forEach(tab => {
    tab.addEventListener('click', onTabClick);
})

const popup_tabs2 = document.querySelectorAll('#basicPopup1 .area_tab_item');
const popup_tabs3 = document.querySelectorAll('#basicPopup2 .area_tab_item');
const popup_tabs4 = document.querySelectorAll('#picksPopup .area_tab_item');
const popup_panels2 = document.querySelectorAll('#basicPopup1 .layer_tab_contents');
const popup_panels3 = document.querySelectorAll('#basicPopup2 .layer_tab_contents');
const popup_panels4 = document.querySelectorAll('#picksPopup .layer_tab_contents');

const onTabClick2 = function () {
    popup_tabs2.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active')

    popup_panels2.forEach(panel => panel.classList.remove('active'));
    const panelId = this.getAttribute('data-panel');
    document.getElementById(panelId).classList.add('active');
}

popup_tabs2.forEach(tab => {
    tab.addEventListener('click', onTabClick2);
})

const onTabClick3 = function () {
    popup_tabs3.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');

    popup_panels3.forEach(panel => panel.classList.remove('active'));
    const panelId = this.getAttribute('data-panel');
    document.getElementById(panelId).classList.add('active');
}

popup_tabs3.forEach(tab => {
    tab.addEventListener('click', onTabClick3);
})

const onTabClick4 = function () {
    popup_tabs4.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');

    popup_panels4.forEach(panel => panel.classList.remove('active'));
    const panelId = this.getAttribute('data-panel');
    document.getElementById(panelId).classList.add('active');
}

popup_tabs4.forEach(tab => {
    tab.addEventListener('click', onTabClick4);
})

const bookCover = document.querySelectorAll('.layer_swiper_book_cover_wrap');
const close = document.querySelectorAll('.layer_swiper_story_button_close');

function togglePopup(toggle) {
    [].forEach.call(toggle, function( elem, idx ){
        elem.addEventListener('click', function( e ){
            var tg = e.target.closest('.layer_swiper_slide');
            if (tg.classList.contains('active')) {
                tg.classList.remove('active');
            } else {
                tg.classList.add('active');
            }
        })
    });
}

togglePopup(bookCover);
togglePopup(close);

const completeButton = document.getElementById('completeButton');
const toastArea =  document.getElementById('completeToast');
const toastAreaWrap =  document.getElementById('reasonToastWrap');
const choosePopup =  document.getElementById('choosePopup');

completeButton.addEventListener('click', function () {
    toastAreaWrap.classList.add('on');
    toastArea.classList.add('on');

    setTimeout(() => {
        toastAreaWrap.classList.remove('on');
        toastArea.classList.remove('on');
        choosePopup.classList.remove('on');
        body.classList.remove('hidden');
    }, 3000);
});