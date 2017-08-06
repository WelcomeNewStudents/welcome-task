var mi_btn1 = document.querySelector('.mi_btn1');
var mi_mid1 = document.querySelector('.mi_mid1');
var mi_btn2 = document.querySelector('.mi_btn2');
var mi_mid2 = document.querySelector('.mi_mid2');
var mi_btn3 = document.querySelector('.mi_btn3');
var mi_mid3 = document.querySelector('.mi_mid3');
var xunlian = document.querySelector('.xunlian');
var zhishi = document.querySelector('.zhishi');
var jilv = document.querySelector('.jilv');
var content = document.querySelector('.content');
var knowledge = document.querySelector('.knowledge');
var discipline = document.querySelector('.discipline');
var underline1 = document.querySelector('.underline1');
var underline2 = document.querySelector('.underline2');
var underline3 = document.querySelector('.underline3');
var ll = document.querySelector('.mid3_title').querySelectorAll('li');
var scroll_w= document.querySelector('.scroll_w');
var scroll = document.querySelector('.scroll');
var kn1 = document.querySelector('.knowledge_kn1');
var kn2 = document.querySelector('.knowledge_kn2');
var di1 = document.querySelector('.discipline_di1');
var di2 = document.querySelector('.discipline_di2');
var scroll_ww= document.querySelector('.scroll_ww');
var scrolll = document.querySelector('.scrolll');

mi_btn1.addEventListener('click', function (){
    mi_mid1.style.display = 'block';
    mi_mid2.style.display = 'none';
    mi_mid3.style.display = 'none';
    reset();
    mi_btn1.style.backgroundImage = "url(./imgs/botton_hover.png)";
    mi_btn2.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn3.style.backgroundImage = "url(./imgs/botton.png)";
});

mi_btn2.addEventListener('click', function (){
    mi_mid2.style.display = 'block';
    mi_mid3.style.display = 'none';
    mi_mid1.style.display = 'none';
    reset();
    mi_btn2.style.backgroundImage = "url(./imgs/botton_hover.png)";
    mi_btn1.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn3.style.backgroundImage = "url(./imgs/botton.png)";
});

mi_btn3.addEventListener('click', function (){
    mi_mid3.style.display = 'block';
    mi_mid1.style.display = 'none';
    mi_mid2.style.display = 'none';
    reset();
    mi_btn3.style.backgroundImage = "url(./imgs/botton_hover.png)";
    mi_btn2.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn1.style.backgroundImage = "url(./imgs/botton.png)";
});

function removeClass(obj, cls) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
    obj.className = obj.className.replace(reg, ' ');
}

function check() {
    if (content.style.display == 'block') {
        xunlian.className += ' ' +'active1';
        underline1.className += ' ' + 'active2';   
        removeClass(zhishi,'active1');
        removeClass(underline2,'active2');
        removeClass(jilv,'active1');
        removeClass(underline3,'active2');
    } else if (knowledge.style.display == 'block') {
        zhishi.className += ' ' + 'active1';
        underline2.className += ' ' + 'active2';
        removeClass(xunlian,'active1');
        removeClass(underline1,'active2');
        removeClass(jilv,'active1');
        removeClass(underline3,'active2');
    } else if (discipline.style.display == 'block') {
        jilv.className += ' ' + 'active1';
        underline3.className += ' ' + 'active2';
        removeClass(xunlian,'active1');
        removeClass(underline1,'active2');
        removeClass(zhishi,'active1');
        removeClass(underline2,'active2');
    }
}

check();

for (let i = 0; i < ll.length; i++) {
    ll[i].onclick = function () {
        switch (i) {
            case 0: content.style.display = 'block';
                    knowledge.style.display = 'none';
                    discipline.style.display = 'none';
                    reset();
                    check();
                    break;
            case 1: knowledge.style.display = 'block';
                    content.style.display = 'none';
                    discipline.style.display = 'none';
                    reset();
                    check();
                    break;
            case 2: discipline.style.display = 'block';
                    content.style.display = 'none';
                    knowledge.style.display = 'none';
                    reset();
                    check();
                    break;
        }
    }
}

/*滚动条*/
scroll.onmousedown = function (ev) {
    var ev = ev || event;
    var iMaxTop = scroll_w.offsetHeight - scroll.offsetHeight;
    var disY = ev.clientY - this.offsetTop;
    document.onmousemove = function (ev) {
        var ev = ev || event;
        var T = ev.clientY - disY;
        if (T < 0) {
            T = 0;
        } else if (T > iMaxTop) {
            T = iMaxTop;
        }
        scroll.style.top = T + 'px';
        var iScale = T / iMaxTop;
        kn2.style.top = (kn1.clientHeight - kn2.offsetHeight) * iScale + 'px';
        }
        document.onmouseup = function () {
            document.onmousemove = document.onmouseup =  null;
        }
    return false;
}

scrolll.onmousedown = function (ev) {
    var ev = ev || event;
    var iMaxTop = scroll_ww.offsetHeight - scrolll.offsetHeight;
    var disY = ev.clientY - this.offsetTop;
    document.onmousemove = function (ev) {
        var ev = ev || event;
        var T = ev.clientY - disY;
        if (T < 0) {
            T = 0;
        } else if (T > iMaxTop) {
            T = iMaxTop;
        }
        scrolll.style.top = T + 'px';
        var iScale = T / iMaxTop;
        di2.style.top = (di1.clientHeight - di2.offsetHeight) * iScale + 'px';
        }
        document.onmouseup = function () {
            document.onmousemove = document.onmouseup =  null;
        }
    return false;
}

function reset() {
    scrolll.style.top = 0;
    scroll.style.top = 0;
    di2.style.top = 0;
    kn2.style.top = 0;
}
