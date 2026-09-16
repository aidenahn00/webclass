$(document).ready(function(){

    let fontSizeBase = 20;
    const htmlElement = $('html');
    const buttonFontBig = $('#button-font-big');
    const buttonFontSmall = $('#button-font-small');
    const numberBox = $('#number-box');
    const buttonToggle = $('#button-toggle');
    const buttonParent = $('.font-control');

    numberBox.html(fontSizeBase+'px');

    // 폰트 크기 40 이하로 크게 변경
    buttonFontBig.click(() => {
        if (fontSizeBase >= 40) return;
        fontSizeBase++;
        htmlElement.css('font-size', fontSizeBase+'px');
        numberBox.html(`${fontSizeBase}px`);
    });

    // 폰트 크기 12 이상으로 작게 변경
    buttonFontSmall.click(() => {
        if (fontSizeBase <= 12) return;
        fontSizeBase--;
        htmlElement.css('font-size', fontSizeBase+'px');
        numberBox.html(`${fontSizeBase}px`);
    });

    // 메뉴 트렌지션
    buttonToggle.click(() => {
        buttonParent.toggleClass('on');
    });
   
    // 아이콘 이미지 변경 기능
    let buttonState = false; // 이미지가 메뉴 상태임을 뜻함 true가 되면 x이미지 상태를 뜻함
    buttonToggle.click( function() {
        if (!buttonState) {
            // $(this).children().first().attr('src', './img/close.svg');
            // $(this).children().first().attr('alt', '닫기');
            // $(this).children('img').attr('src', './img/close.svg');
            // $(this).children('img').attr('alt', '닫기');
            $(this).find('img').attr('src', './img/close.svg');
            $(this).find('img').attr('alt', '닫기');

            // 체이닝 기법
            $(this).find('img').attr('src', './img/close.svg').attr('alt', '닫기');

            buttonState = true;
        } else {
            // $(this).children().first().attr('src', './img/menu.svg');
            // $(this).children().first().attr('alt', '메뉴');
            // $(this).children('img').attr('src', './img/menu.svg');
            // $(this).children('img').attr('alt', '메뉴');
            $(this).find('img').attr('src', './img/menu.svg');
            $(this).find('img').attr('alt', '메뉴');

            // 체이닝 기법
            $(this).find('img').attr('src', './img/menu.svg').find('img').attr('alt', '메뉴');

            buttonState = false;
        }
    });

});