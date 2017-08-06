window.onload = function () {
    let video = document.getElementById('my_video');
    let playBtn = document.getElementById('playBtn');
    console.log(video.duration)
    console.log(video.paused, video.currentTime);
    
    check();
    playBtn.addEventListener('click', function () {
        let video = document.getElementById('my_video');
        let playBtn = document.getElementById('playBtn');
        if (!video.paused) {
            video.pause();
            check();
        } else {
            video.play();
            check();
        }
    });
}

function check() {
    let video = document.getElementById('my_video');
    let playBtn = document.getElementById('playBtn');
    if (!video.paused) {
        playBtn.title = '暂停';
        playBtn.getElementsByTagName('img')[0].src = 'imgs/s_stop.png';
    } else {
        playBtn.title = '播放';
        playBtn.getElementsByTagName('img')[0].src = 'imgs/s_bofang.png';
    }
}

