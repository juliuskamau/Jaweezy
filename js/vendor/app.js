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
			$('#lightSlider').lightSlider({
				gallery:true,
				item:1,
				loop:true,
				thumbItem:9,
				slideMargin:0,
				enableDrag: false,
				currentPagerPosition:'left',
				onSliderLoad: function(el) {
					el.lightGallery({
						selector: '#lightSlider .lslide'
					});
				}   
			});  
		  });

	}
};
MOBILESEARCH = {
	bindMobileSearch: function() {
		$(function(e) {
			var $open = $('.js-searchOpen');
			var $close = $('.searchClose');
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

		var hidWidth;
		var scrollBarWidths = 40;
		
		var widthOfList = function(){
		  var itemsWidth = 0;
		  $('.list li').each(function(){
			var itemWidth = $(this).outerWidth();
			itemsWidth+=itemWidth;
		  });
		  return itemsWidth;
		};
		
		var widthOfHidden = function(){
		  return (($('.wrapper-tabs').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
		};
		
		var getLeftPosi = function(){
		  return $('.list').position().left;
		};
		
		var reAdjust = function(){
		  if (($('.wrapper-tabs').outerWidth()) < widthOfList()) {
			$('.scroller-right').show();
		  }
		  else {
			$('.scroller-right').hide();
		  }
		  
		  if (getLeftPosi()<0) {
			$('.scroller-left').show();
		  }
		  else {
			$('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
			  $('.scroller-left').hide();
		  }
		}
		
		reAdjust();
		
		$(window).on('resize',function(e){  
			  reAdjust();
		});
		
		$('.scroller-right').click(function() {
		  
		  $('.scroller-left').fadeIn('slow');
		  $('.scroller-right').fadeOut('slow');
		  
		  $('.list').animate({left:"+="+widthOfHidden()+"px"},'slow',function(){
		
		  });
		});
		
		$('.scroller-left').click(function() {
		  
			$('.scroller-right').fadeIn('slow');
			$('.scroller-left').fadeOut('slow');
		  
			  $('.list').animate({left:"-="+getLeftPosi()+"px"},'slow',function(){
			  
			  });
		});    


	}
};

CARTICON = {
	bindCartIcon: function() {
		$('a.remove').click(function(){
			event.preventDefault();
			$( this ).parent().parent().parent().hide( 400 );
		   
		  })
		var counter=0;
		
		$(document).ready(function() {
		  $('.cart-buttons').click(function() {
			$('.product .product_wrap img').addClass('added');
			counter++;
			
			var buttonCount = setTimeout(function(){
			$('.cart span').attr('data-count', counter);
		  }, 1000);
			
			var removeClass = setTimeout(function(){
			$('.product .product_wrap img, .cart span').removeClass('added');
		  }, 1500);
		  })
		  
		});
	}
};

GOOGLEMAP = {
	bindGoogleMap: function() {
		google.maps.event.addDomListener(window, 'load', init);
		function init() {
			var mapOptions = {
				zoom: 11,
				center: new google.maps.LatLng(40.6700, -73.9400), // New York
				styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
			};
			var mapElement = document.getElementById('map');
			var map = new google.maps.Map(mapElement, mapOptions);
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.6700, -73.9400),
				map: map,
				title: 'Snazzy!'
			});
		}
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
	CARTICON.bindCartIcon();
	GOOGLEMAP.bindGoogleMap();
	
};






$(document).foundation();
window.onload = onLoad();