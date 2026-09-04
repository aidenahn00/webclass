document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabs > div');
    const tabContents = document.querySelectorAll('.tab-contents > div');

    tabs.forEach((el, i) => {   
        el.addEventListener('click', () => {
            tabs.forEach(el=>el.classList.remove('on'));
            el.classList.toggle('on');
            tabContents.forEach(el=>el.classList.remove('on'));
            tabContents[i].classList.toggle('on');
        });
    });

    // tabs.forEach((el, i)=>el.addEventListener('mouseleave', (event) => {
    //     event.target.classList.toggle('on');
    //     tabContents[i].classList.toggle('on');
    // }));
});