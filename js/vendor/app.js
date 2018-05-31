/* ------------------------------------------------
    JAWEEZY APP JS COMPILED BY ZILOJO
	
 * @license Copyright (c) 2018-2030, Jaweezy. All rights reserved.
 * This work is subject to the terms at http://https://www.zilojo.com/ or for
 * Jaweezy.com
 ----------------------------------------- */

IMAGEGALLERY = {
	bindImageGallery: function() {
		$(document).ready(function() {
			$(document).ready(function() {
				if ($("#image-gallery").length) {
					$('#image-gallery').lightSlider({
						gallery: true,
						item: 1,
						thumbItem: 9,
						slideMargin: 0,
						mode: 'slide',
						auto: true,
						onSliderLoad: function() {
							$('#image-gallery').removeClass('cS-hidden');
						}
					});
				}
			});
		});
	}
};
TWEENMAX = {
	bindTweenMax: function() {
		$(document).ready(function() {
			TweenMax.from(".logo", 0.5, {
				opacity: 0,
				x: -200
			});
			TweenMax.from(".search", 0.5, {
				opacity: 0,
				y: 200,
				delay: 0.5
			});
			TweenMax.from(".cart", 0.5, {
				opacity: 0,
				x: 200,
				delay: 0.7
			});
			TweenMax.from(".ws_gestures", 0.5, {
				opacity: 0,
				y: 200,
				delay: 0.9
			});
			TweenMax.staggerFrom(".tabs li", 0.5, {
				opacity: 0,
				y: 200,
				delay: 0.11
			}, 0.2);
			TweenMax.staggerFrom(".row .large-3", 0.5, {
				opacity: 0,
				y: 200,
				delay: 0.13
			}, 0.2);
		});
	}
};
PRELOADER = {
	bindPreLoader: function() {
		function reveal() {
			// window sizes
			var winsize = {
				width: window.innerWidth,
				height: window.innerHeight
			};
			// if animating return
			if (this.isAnimating) {
				return false;
			}
			this.isAnimating = true;
			var widthVal, heightVal, transform;
			var pageDiagonal = Math.sqrt(Math.pow(winsize.width, 2) + Math.pow(winsize.height, 2));
			widthVal = heightVal = pageDiagonal + 'px';
			transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,' + pageDiagonal + 'px,0)';
			var revealerWrapper = document.getElementById("revealer");
			revealerWrapper.style.width = widthVal;
			revealerWrapper.style.height = heightVal;
			revealerWrapper.style.WebkitTransform = revealerWrapper.style.transform = transform;
			revealerWrapper.style.opacity = 1;
			setTimeout(function() {
				revealerWrapper.style.opacity = 0;
			}, 1600);
			setTimeout(function() {
				$("#loader-wrapper").fadeOut();
			}, 750);
		}
		$(window).ready(function() {
			if ($('body').hasClass("background_blue")) {
				reveal();
			}
			$("body").addClass("loaded");
		});
	}
};
LIGHTSLIDER = {
	bindLightSlider: function() {
		$(document).ready(function() {
			if ($("#lightSlider").length) {
				$('#lightSlider').lightSlider({
					gallery: true,
					item: 1,
					auto: true,
					pause: 4000,
					loop: true,
					slideMargin: 0,
					thumbItem: 9
				});
			}
		});
	}
};
MOBILESEARCH = {
	bindMobileSearch: function() {
		$(function(e) {
			var $open = $('.js-searchOpen');
			var $close = $('.searchClose,.search-overlay');
			var $body = $('body');
			var $lay = $('.search-overlay');
			var $input = $('.search-form > .search');
			$open.on('click', function(e) {
				e.preventDefault();
				$body.addClass('-hide');
				$lay.addClass('-show');
				$input.focus();
			});
			$close.on('click', function(e) {
				e.preventDefault();
				$body.removeClass('-hide');
				$lay.removeClass('-show');
			});
		});
	}
};
MOBILEMENUHACK = {
	bindMobileMenuHack: function() {
		$('.tabs li  a').click(function(e) {
			$('.off-canvas-wrap').removeClass('move-right');
		})
	}
};
SCROLLDOWNTABS = {
	bindScrollDownTabs: function() {
		$("ul.tabs  li a").click(function() {
			$('html, body').animate({
				scrollTop: $(".tabs-content").offset().top - 80
			}, 1000);
		});
	}
};
var onLoad = function() {
	IMAGEGALLERY.bindImageGallery();
	TWEENMAX.bindTweenMax();
	PRELOADER.bindPreLoader();
	LIGHTSLIDER.bindLightSlider();
	MOBILESEARCH.bindMobileSearch();
	MOBILEMENUHACK.bindMobileMenuHack();
	SCROLLDOWNTABS.bindScrollDownTabs();
};
$(document).foundation();
window.onload = onLoad();