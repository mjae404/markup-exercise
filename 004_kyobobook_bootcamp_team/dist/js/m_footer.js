var footerButton = document.querySelector('.footer_company_info_button');
var familyButton = document.querySelector('.footer_family_button');

function footerCompanyInfoLayer(e){
    e.addEventListener('click', function( e ){
        var tg = e.target.closest('.footer_company_wrap');
        tg.classList.contains('on') ? tg.classList.remove('on') : tg.classList.add('on');
    })
}

function footerFamilyLayer(e){
    e.addEventListener('click', function( e ){
        var tg = e.target.closest('.footer_family_list_wrap');
        tg.classList.contains('on') ? tg.classList.remove('on') : tg.classList.add('on');
    })
}

footerCompanyInfoLayer(footerButton);
footerFamilyLayer(familyButton);