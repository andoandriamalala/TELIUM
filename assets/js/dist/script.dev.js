"use strict";

// parallax animation
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
  $('.header_background').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  window.requestAnimationFrame(moveBackground);
}

function moveImg() {
  x += (lFollowX - x) * 1 / 60;
  y += (lFollowY - y) * 1 / 60;
  translate = 'translate(' + x * -1 + 'px, ' + y * -1 + 'px)';
  console.log(translate);
  $('#animated_logo').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  window.requestAnimationFrame(moveImg);
}

$(window).on('mousemove click', function (e) {
  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = 20 * lMouseX / 100; // 100 : 12 = lMouxeX : lFollow

  lFollowY = 10 * lMouseY / 100;
});
moveBackground();
moveImg();