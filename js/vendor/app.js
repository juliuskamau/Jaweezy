$(document).ready(function() {
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        mode: 'slide',
        auto:true,
        onSliderLoad: function() {
           $('#image-gallery').removeClass('cS-hidden');
        
        }  
    });
});

$(document).foundation();