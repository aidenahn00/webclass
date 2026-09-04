document.addEventListener('DOMContentLoaded', function () {

    const popup = document.querySelector('.popup');
    const buttonPopupNottoday = document.querySelector('.popup .controller .button-nottoday-popup');
    const buttonPopupClose = document.querySelector('.popup .controller .button-close-popup');

    buttonPopupNottoday.addEventListener('click', function () {
        popup.classList.add('off');
    });

    buttonPopupClose.addEventListener('click', function () {
        popup.classList.add('off');
    });


    let second = 5;
    setTimeout(function () {
        popup.classList.add('off');
    }, second * 1000);

    let popupSecond = document.querySelector('.popup-second');

    // popupSecond.innerHTML = second;
    // setInterval(function(){
    //     second--;
    //     popupSecond.innerHTML = second;
    // }, 1000);


    // 재귀 함수
    function autoClosePopupSystem() {
        popupSecond.innerHTML = second;
        second--;
        if (second === 0) {
            setTimeout(function(){
                popup.classList.add('off');
            }, 600);
            return
        }
        setTimeout(function () {
            autoClosePopupSystem();
        }, 1000);
    }

    autoClosePopupSystem();


});