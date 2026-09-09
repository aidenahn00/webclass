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