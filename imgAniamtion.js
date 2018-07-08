
var config = {
  url: 'https://ue.qzone.qq.com/touch/proj-qzone-app/stores/img/multi-like-animate/demo-2.png',
  width: 144,
  height: 144,
  fps: 20,
  loop: false
}
var now = 0;
var then = Date.now();
var interval = 1000 / config.fps;
var delta = 0;
var rafId = '';

var parentEle = document.querySelector('.animation');
var canvasEle = document.createElement('canvas');

parentEle.appendChild(canvasEle);
canvasEle.width = config.width;
canvasEle.height = config.height;
var ctx = canvasEle.getContext('2d');
var raf = window.requestAnimationFrame;
var start = 0;
var imgWidth = 0;

var img = document.createElement('img');
img.src = config.url;

function play() {
  if (start >= imgWidth) {
    start = 0;
    config.loop || window.cancelAnimationFrame(rafId);
    return;
  }
  ctx.clearRect(0, 0, config.width, config.height);
  ctx.drawImage(img, start, 0, config.width, config.height, 0, 0, config.width, config.height);
  start += config.width;
}

function tick() {
  rafId = raf(tick);
  now = Date.now();　　
  delta = now - then;　　
  if (delta > interval) {
    then = now - (delta % interval);
    play();
  }
}

img.onload = function() {
  imgWidth = img.width;
  tick();
}