var mi_btn1 = document.querySelector('.mi_btn1');
var mi_mid1 = document.querySelector('.mi_mid1');
var mi_btn2 = document.querySelector('.mi_btn2');
var mi_mid2 = document.querySelector('.mi_mid2');
var mi_btn3 = document.querySelector('.mi_btn3');
var mi_mid3 = document.querySelector('.mi_mid3');
var mi_btn4 = document.querySelector('.mi_btn4');
var mi_mid4 = document.querySelector('.mi_mid4');
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
    mi_mid4.style.display = 'none';
    mi_btn1.style.color = '#ffffff';
    mi_btn2.style.color = '#ff962a';
    mi_btn3.style.color = '#ff962a';
    mi_btn4.style.color = '#ff962a';
    reset();
    mi_btn1.style.backgroundImage = "url(./imgs/botton_hover.png)";
    mi_btn2.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn3.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn4.style.backgroundImage = "url(./imgs/botton.png)";
});

mi_btn2.addEventListener('click', function (){
    mi_mid2.style.display = 'block';
    mi_mid3.style.display = 'none';
    mi_mid1.style.display = 'none';
    mi_mid4.style.display = 'none';
    mi_btn2.style.color = '#ffffff';
    mi_btn1.style.color = '#ff962a';
    mi_btn3.style.color = '#ff962a';
    mi_btn4.style.color = '#ff962a';
    reset();
    mi_btn2.style.backgroundImage = "url(./imgs/botton_hover.png)";
    mi_btn1.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn3.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn4.style.backgroundImage = "url(./imgs/botton.png)";
});

mi_btn3.addEventListener('click', function (){
    mi_mid3.style.display = 'block';
    mi_mid1.style.display = 'none';
    mi_mid2.style.display = 'none';
    mi_mid4.style.display = 'none';
    mi_btn3.style.color = '#ffffff';
    mi_btn2.style.color = '#ff962a';
    mi_btn1.style.color = '#ff962a';
    mi_btn4.style.color = '#ff962a';
    reset();
    mi_btn3.style.backgroundImage = "url(./imgs/botton_hover.png)";
    mi_btn2.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn1.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn4.style.backgroundImage = "url(./imgs/botton.png)";
});

mi_btn4.addEventListener('click', function (){
    mi_mid4.style.display = 'block';
    mi_mid1.style.display = 'none';
    mi_mid2.style.display = 'none';
    mi_mid3.style.display = 'none';
    mi_btn4.style.color = '#ffffff';
    mi_btn2.style.color = '#ff962a';
    mi_btn3.style.color = '#ff962a';
    mi_btn1.style.color = '#ff962a';
    reset();
    mi_btn4.style.backgroundImage = "url(./imgs/botton_hover.png)";
    mi_btn2.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn1.style.backgroundImage = "url(./imgs/botton.png)";
    mi_btn3.style.backgroundImage = "url(./imgs/botton.png)";
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


// 风采连队的滚动
var div1= document.querySelector('.fc_bar');
var div2 = document.querySelector('.fc_scroll');
var div3 = document.querySelector('.fc_mid');
var li1 = document.querySelector('.fc_li'); //div4
var li2 = document.querySelector('.fc_li2');//div5
var li3 = document.querySelector('.fc_li3');
var li4 = document.querySelector('.fc_li4');
var li5 = document.querySelector('.fc_li5');

//滚动
    div2.onmousedown = function (ev) {
        var iMaxTop = div1.offsetHeight - div2.offsetHeight;
        var ev = ev || event;
        var disY = ev.clientY - this.offsetTop;
        document.onmousemove = function(ev) {
            var ev = ev || event;
            var T = ev.clientY - disY;
            if (T < 0) {
                T = 0;
            } else if (T > iMaxTop) {
                T = iMaxTop;
            }
            div2.style.top = T + 'px';
            var iScale = T / iMaxTop;
            li1.style.top = (div3.clientHeight - li1.offsetHeight) * iScale + 'px';
            li2.style.top = (div3.clientHeight - li2.offsetHeight) * iScale + 'px';
            li3.style.top = (div3.clientHeight - li3.offsetHeight) * iScale + 'px';
            li4.style.top = (div3.clientHeight - li4.offsetHeight) * iScale + 'px';
            li5.style.top = (div3.clientHeight - li5.offsetHeight) * iScale + 'px';
        }
        document.onmouseup = function () {
            document.onmousemove = document.onmouseup =  null;
        }
        return false;
    }

//点击箭头
// var rightArrow = document.querySelector('.rightArrow');
// var leftArrow = document.querySelector('.leftArrow');
// var fc_content = document.querySelector('.fc_content');

// function animate(offset) {
//     fc_content.style.left = parseInt(fc_content.style.left) + offset + 'px';
// }
// rightArrow.addEventListener('click',function () {
//     //if来判断是否到达终点,4是fc_li下li的个数,改个数,改数字.
//     if (parseInt(fc_content.style.left) > -4*(li1.offsetWidth)) {
//         animate(-li1.offsetWidth);//li1的宽度
//     }
// })
//     leftArrow.addEventListener('click',function () {
//         if (parseInt(fc_content.style.left) < 0) {
//             animate(li1.offsetWidth);
//         }   
// })
//连队风采点击放大效果

var fc_pic = document.querySelector('.fc_pic');
var row1 = document.querySelector('.row1');
var row2 = document.querySelector('.row2');
var row3 = document.querySelector('.row3');
var row4 = document.querySelector('.row4');
var row6 = document.querySelector('.row6');
var row7 = document.querySelector('.row7');
var row8 = document.querySelector('.row8');
var row9 = document.querySelector('.row9');
row1.onclick = function() {
    openNew();
}
row2.onclick = function() {
    openNew();
}
row3.onclick = function() {
    openNew();
}
row4.onclick = function() {
    openNew();
}
row6.onclick = function() {
    openNew();
}
row7.onclick = function() {
    openNew();
}
row8.onclick = function() {
    openNew();
}
row9.onclick = function() {
    openNew();
}

fc_pic.onclick = function () {
    openNew();
}
function openNew() {
    var oMask = document.createElement("div");
    oMask.id = "mask";
    document.body.appendChild(oMask);
    var oBig = document.createElement("div");
    oBig.id = "fc_big";
    document.body.appendChild(oBig);
    //要加入的内容在下面写
    oBig.innerHTML = "<div class = 'big_close'></div><div class = 'big_pic'></div><div class = 'big_word'><p class = 'word_ti'>五营二连一排</p><p class = 'word_co'>齐步走通常是部队的训练内容，但现在随着军训的普及，“齐步走”正融入到我们的日常生活之中，由于齐步走不仅能够塑造人的良好体型，提高服从意识，所以对齐步走得训练越来越多。</p></div>"
    var oClose = document.querySelector('.big_close');
    oMask.onclick = oClose.onclick = function () {
    document.body.removeChild(oMask);
    document.body.removeChild(oBig);
    }
}