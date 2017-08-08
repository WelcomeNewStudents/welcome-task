var mi_btn1 = document.querySelector('.mi_btn1');
var mi_mid1 = document.querySelector('.mi_mid1');
var mi_btn2 = document.querySelector('.mi_btn2');
var mi_mid2 = document.querySelector('.mi_mid2');

mi_btn1.addEventListener('click', function (){
    mi_mid1.style.display = 'block';
    mi_mid2.style.display = 'none';
    mi_btn1.style.color = '#ffffff';
    mi_btn2.style.color = '#ff962a';
    mi_btn1.style.backgroundImage = "url(./imgs/botton_hover.png)";
    mi_btn2.style.backgroundImage = "url(./imgs/botton.png)";
});

mi_btn2.addEventListener('click', function (){
    mi_mid2.style.display = 'block';
    mi_mid1.style.display = 'none';
    mi_btn2.style.color = '#ffffff';
    mi_btn1.style.color = '#ff962a';
    mi_btn2.style.backgroundImage = "url(./imgs/botton_hover.png)";
    mi_btn1.style.backgroundImage = "url(./imgs/botton.png)";
});