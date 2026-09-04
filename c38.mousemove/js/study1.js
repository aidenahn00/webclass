const mouseCursor = document.querySelector('.mouseCursor');
const tooltipBox = document.querySelector('.tooltip-box');
let cursorState = false;

document.addEventListener('mousemove', (e) => {

    if (!cursorState) {
        mouseCursor.style.display = 'block';
        cursorState = true;
    }

    // 마우스를 움직일 때마다 실행되는 소스코드
    mouseCursor.style.left = e.clientX + 'px';
    mouseCursor.style.top = e.clientY + 'px';
});


document.addEventListener('mousedown', (e) => {
    mouseCursor.innerHTML = `<img src="./img/clicked.png" alt="클릭 마우스 커서">`;
});
document.addEventListener('mouseup', (e) => {
    mouseCursor.innerHTML = `<img src="./img/default.png" alt="기본 마우스 커서">`;
});


document.addEventListener('mousemove', (e) => {
    // 마우스를 움직일 때마다 실행되는 소스코드
    tooltipBox.style.left = (e.clientX + 120) + 'px';
    tooltipBox.style.top = e.clientY + 'px';
});



const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(el => {
    el.addEventListener('mouseenter', () => {
        tooltipBox.style.display = 'block';
        tooltipBox.innerHTML = el.getAttribute('data-tooltip');
        mouseCursor.innerHTML = `<img src="./img/clicked.png" alt="클릭 마우스 커서">`;
    });
    el.addEventListener('mouseleave', () => {
        tooltipBox.style.display = 'none';
        tooltipBox.innerHTML = '';
        mouseCursor.innerHTML = `<img src="./img/default.png" alt="기본 마우스 커서">`;
    });

});