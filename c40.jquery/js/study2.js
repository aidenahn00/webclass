document.addEventListener('DOMContentLoaded', ()=>{});

$(document).ready(()=>{
    $('h1').css('color', 'red');
});

$('.a').css('color', 'red');
let txt = $('.a').html();
// alert(txt);
$('.a').text('<i>새로운내용</i>');

let href = $('.b').attr('href');
$('.b').attr('href', 'https://naver.com');

$('.c').addClass('on');
$('.c').removeClass('on');
$('.b').next().addClass('on');
$('.c').prev().html('네이버');
$('.c').prev().html('네이버');
$('.c').parent().css('background-color', 'beige');

$('#btn').click(()=>{
    $('.frame').css('color', 'blue');
});

// $('#btn').on('click', ()=>{
    // $('.frame').css('color', 'blue');
// });

// 5개의 li 태그가 그냥 선택됨
$('.list>li').click(function(){
    let idx = $(this).index();
    alert(idx);
});