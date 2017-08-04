var dayten = document.querySelector("#dayten"); 
var dayunit = document.querySelector("#dayunit");
var hourten = document.querySelector("#hourten");
var hourunit = document.querySelector("#hourunit");
var mten = document.querySelector("#mten");
var munit = document.querySelector("#munit");
var sten = document.querySelector("#sten");
var sunit = document.querySelector("#sunit");
setInterval(function countDown() {
      var now  = new Date();
      var theEnd = new Date( 2017, 8, 10, 0, 0);
      var millisecond = theEnd.getTime() - now.getTime();
      if (millisecond > 0) {
            var day = Math.floor(millisecond / 1000 / 60 / 60 / 24);
            var hour = Math.floor(millisecond / 1000 / 60 / 60 % 24);
            var minu = Math.floor(millisecond /1000 / 60 % 60);
            var second = Math.floor(millisecond / 1000 % 60);
            if(day >= 0) {
                  dayten.src = 'imgs/' + Math.floor(day / 10) + '.png';
                  dayunit.src = 'imgs/' + day % 10 + '.png';
            }
            if(hour >= 0) {
                  hourten.src = 'imgs/' + Math.floor(hour / 10) + '.png';
                  hourunit.src = 'imgs/' + hour % 10 + '.png';
            }
            if(minu >= 0) {
                  mten.src = 'imgs/' + Math.floor(minu / 10) + '.png';
                  munit.src = 'imgs/'+ minu % 10 +'.png';
            }
            if (second >= 0) {
                  sten.src = 'imgs/' + Math.floor(second / 10) + '.png';
                  sunit.src = 'imgs/' + second % 10 + '.png';                  
            }
      }
}, 1000);