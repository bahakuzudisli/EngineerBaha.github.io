$(document).ready(function() {
    var updatePager = function(currentIndex, slider) {
        $('#pager').text((currentIndex + 1) + '/' + slider.getSlideCount()); 
    }

    var slider = $("#slider").bxSlider({
        auto: true, 
        minSlides: 1, 
        maxSlides: 1, 
        slideWidth: 540, 
        slideMargin: 10, 
        randomStart: true, 
        moveSlides: 1, 
        pause: 3000, 
        pager: false,
        onSliderLoad: function(currentIndex) {
            updatePager(currentIndex, slider);
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            updatePager(newIndex, slider);
        }
    });
});
