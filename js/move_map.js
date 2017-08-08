let frame = document.querySelector(".main_map_frame");
let map = document.querySelector("#cqupt_map");
let realMap = document.querySelector("#real_map");
let big = document.querySelector('.big');
let small = document.querySelector('.small');
let bs = 1;

map.addEventListener('mousedown', function (e) {});
map.onmousedown = function (e) {
    e = e || window.event;
    let mL = realMap.offsetLeft,   //获取map起始的left值
        mT = realMap.offsetTop,    //获取map起始的top值
        startX = e.clientX,     //鼠标起点left值
        startY = e.clientY,     //鼠标起点top值
        frameW = frame.offsetWidth,
        frameH = frame.offsetHeight,
        minL = frame.offsetWidth - realMap.offsetWidth,    //map往右滑动的最大距离
        minH = frame.offsetHeight - realMap.offsetHeight;  //map往下滑动的最大距离
    let targetX,targetY;    //最终map的left和top值
    document.onmousemove = function (e) {
        e = e || window.event;
        var endX = e.clientX,   //鼠标终点left值
            endY = e.clientY,   //鼠标终点top值
            _X = startX - endX, //鼠标变动的水平距离
            _Y = startY - endY; //鼠标变动的垂直距离
        targetX = mL - _X;
        targetY = mT - _Y;
        if (targetX < 0) {          //对最终值left进行判断
            if (targetX >= minL) {
                targetX = targetX;
            } else {
                targetX = minL;
            }
        } else {
            targetX = 0;
        }
        if (targetY < 0) {          //对最终值top进行判断
            console.log(targetY)
            if (targetY >= minH) {
                targetY = targetY;
            } else {
                targetY = minH;
            }
        } else {
            targetY = 0;
        }
        realMap.style.left = targetX + 'px';
        realMap.style.top = targetY + 'px';
        document.onmouseup = function () {
            this.onmousemove = null;
        };
    };
    return false;
};

big.addEventListener('click', function () {
    bs += 1;
    switch (bs) {
        case 1: 
                realMap.style.width = "876px";
                realMap.style.height = "429px";
                break;
        case 2: 
                realMap.style.width = "1752px";
                realMap.style.height = "858px";
                break;
        case 3: 
                realMap.style.width = "3504px";
                realMap.style.height = "1716px";
                break;
    }
    
});

small.addEventListener('click', function () {
    bs -= 1;
    switch (bs) {
        case 0: realMap.style.top = 0;
                realMap.style.left = 0;
                realMap.style.width = "876px";
                realMap.style.height = "429px";
                bs += 1;
                break;
        case 1: realMap.style.top = 0;
                realMap.style.left = 0;
                realMap.style.width = "876px";
                realMap.style.height = "429px";
                break;
        case 2: realMap.style.top = 0;
                realMap.style.left = 0;
                realMap.style.width = "1752px";
                realMap.style.height = "858px";
                break;
    }
});