document.addEventListener('DOMContentLoaded', function(){
    const train = document.querySelector('.train');
    const btnPrev = document.querySelector('#btn-prev');
    const btnNext = document.querySelector('#btn-next');

    let slideNumber = document.querySelectorAll('.train > div').length;
    let slideCount = 0;

    function nextSlide() {
        slideCount++;
        train.style.transition = 'all .8s ease 0s';
        train.style.transform = `translateX(${(-100/slideNumber)*slideCount}%)`;
        if (slideCount === 4) {
            setTimeout(()=>{
                train.style.transition = 'none';
                train.style.transform = `translateX(0%)`;
                slideCount = 0;
            }, 810);
        }


    }




    btnNext.addEventListener('click', ()=>{
        nextSlide();
    });

    let timer = setInterval(()=>{
        nextSlide();
    }, 1000);

    train.addEventListener('mouseenter', function(){
        clearInterval(timer);
    });

    train.addEventListener('mouseleave', function(){
        timer = setInterval(()=>{
            nextSlide();
        }, 1000);
    });

    btnPrev.addEventListener('click', ()=>{
        slideCount--;
        train.style.transition = 'all .8s ease 0s';
        train.style.transform = `translateX(${(-100/slideNumber)*slideCount}%)`;
        if (slideCount < 0) {
            setTimeout(()=>{
                train.style.transition = 'none';
                train.style.transform = `translateX(0%)`;
                slideCount = 5;
            }, 810);
        }


        // slideCount--;
        // train.style.transition = 'all .8s ease 0s';
        // if (slideCount < 0) {
        //     slideCount = 5;
        //     train.style.transition = 'none';
        //     train.style.transform = `translateX(0%)`;
        // }
        // train.style.transform = `translateX(${(-100/slideNumber)*slideCount}%)`;
    });

});