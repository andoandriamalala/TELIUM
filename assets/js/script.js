// aos animate
AOS.init();

// Change menu background on scrolling
$(document).scroll(function() {
  if ($(document).scrollTop() > 100) {
      $("nav").addClass("navbar-scrolled");
  } else {
      $("nav").removeClass("navbar-scrolled");
  }
});

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

  $('.header_background, .moove_back').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

function moveImg() {
  x += (lFollowX - x) * 1 / 60;
  y += (lFollowY - y) * 1 / 60;
  
  translate = 'translate(' + (x * -1)  + 'px, ' + (y * -1) + 'px)';


  $('#animated_logo, .moove_top').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveImg);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();
moveImg();


// smooth scroll
// const math = {
//   lerp: (a, b, n) => {
//     return (1 - n) * a + n * b;
//   },
//   norm: (value, min, max) => {
//     return (value - min) / (max - min);
//   }
// };

// const config = {
//   height: window.innerHeight,
//   width: window.innerWidth
// };

// class Smooth {
//   constructor() {
//     this.bindMethods();

//     this.data = {
//       ease: 0.1,
//       current: 0,
//       last: 0,
//       rounded: 0
//     };

//     this.dom = {
//       el: document.querySelector("[data-scroll]"),
//       content: document.querySelector("[data-scroll-content]")
//     };

//     this.rAF = null;

//     this.init();
//   }

//   bindMethods() {
//     ["scroll", "run", "resize"].forEach(
//       (fn) => (this[fn] = this[fn].bind(this))
//     );
//   }

//   setStyles() {
//     Object.assign(this.dom.el.style, {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       height: "100%",
//       width: "100%",
//       overflow: "hidden"
//     });
//   }

//   setHeight() {
//     document.body.style.height = `${
//       this.dom.content.getBoundingClientRect().height
//     }px`;
//   }

//   resize() {
//     this.setHeight();
//     this.scroll();
//   }

//   preload() {
//     imagesLoaded(this.dom.content, (instance) => {
//       this.setHeight();
//     });
//   }

//   scroll() {
//     this.data.current = window.scrollY;
//   }

//   run() {
//     this.data.last += (this.data.current - this.data.last) * this.data.ease;
//     this.data.rounded = Math.round(this.data.last * 100) / 100;

//     const diff = this.data.current - this.data.rounded;
//     const acc = diff / config.width;
//     const velo = +acc;
//     const skew = velo * 7.5;

//     this.dom.content.style.transform = `translate3d(0, -${this.data.rounded}px, 0) skewY(${skew}deg)`;

//     this.requestAnimationFrame();
//   }

//   on() {
//     this.setStyles();
//     this.setHeight();
//     this.addEvents();

//     this.requestAnimationFrame();
//   }

//   off() {
//     this.cancelAnimationFrame();

//     this.removeEvents();
//   }

//   requestAnimationFrame() {
//     this.rAF = requestAnimationFrame(this.run);
//   }

//   cancelAnimationFrame() {
//     cancelAnimationFrame(this.rAF);
//   }

//   destroy() {
//     document.body.style.height = "";

//     this.data = null;

//     this.removeEvents();
//     this.cancelAnimationFrame();
//   }

//   resize() {
//     this.setHeight();
//     this.data.rounded = this.data.last = this.data.current;
//   }

//   addEvents() {
//     window.addEventListener("resize", this.resize, { passive: true });
//     window.addEventListener("scroll", this.scroll, { passive: true });
//   }

//   removeEvents() {
//     window.removeEventListener("resize", this.resize, { passive: true });
//     window.removeEventListener("scroll", this.scroll, { passive: true });
//   }

//   init() {
//     this.preload();
//     this.on();
//   }
// }

// new Smooth();


// typeritter 
var i = 0;
// var A = 0;
		var tag = document.getElementById("text");
		var html = document.getElementById("text").innerHTML;
		var attr = tag.setAttribute("data", html);
		var txt = tag.getAttribute("data");
		var speed = 50;

		function typeWriter() {
		  if (i <= txt.length) {
		    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		    //console.log(document.getElementById("text").innerHTML);
		}

typeWriter();

