document.addEventListener('DOMContentLoaded', () => {
    const buttonParent = document.querySelector('.font-control');
    const buttonFontBig = document.querySelector('#button-font-big');
    const buttonFontSmall = document.querySelector('#button-font-small');
    const numberBox = document.querySelector('#number-box');
    const htmlElement = document.querySelector('html');
    const buttonToggle = document.querySelector('#button-toggle');
    let fontSizeBase = 20;

    numberBox.innerHTML = fontSizeBase+'px';

    // 메뉴 트렌지션
    buttonToggle.addEventListener('click', () => {
        buttonParent.classList.toggle('on');
    });

    // 아이콘 이미지 변경 기능
    let buttonState = false; // 이미지가 메뉴 상태임을 뜻함 true가 되면 x이미지 상태를 뜻함
    buttonToggle.addEventListener('click', function() {
        if (!buttonState) {
            this.children[0].setAttribute('src', './img/close.svg');
            this.children[0].setAttribute('alt', '닫기');
            buttonState = true;
        } else {
            this.children[0].setAttribute('src', './img/menu.svg');
            this.children[0].setAttribute('alt', '메뉴');
            buttonState = false;
        }
        // if (buttonParent.classList.contains('on')) {
        //     buttonToggle.children[0].setAttribute('src', './img/menu.svg');
        // } else {
        //     buttonToggle.children[0].setAttribute('src', './img/close.svg');
        // }
    });

    // 폰트 크기 40 이하로 크게 변경
    buttonFontBig.addEventListener('click', () => {
        if (fontSizeBase >= 40) return;
        fontSizeBase++;
        htmlElement.style.fontSize = fontSizeBase+'px';
        numberBox.innerHTML = `${fontSizeBase}px`;
    });

    // 폰트 크기 12 이상으로 작게 변경
    buttonFontSmall.addEventListener('click', () => {
        if (fontSizeBase <= 12) return;
        fontSizeBase--;
        htmlElement.style.fontSize = fontSizeBase+'px';
        numberBox.innerHTML = `${fontSizeBase}px`;
    });
});