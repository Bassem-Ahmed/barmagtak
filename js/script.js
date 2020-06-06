$(function(){
    'use strict'
    // start adjust slider height
    var viewPortHeight = $(window).height();
    $('header .slider').height(viewPortHeight - ($('nav').height()));
    // end adjust slider height

    // start smoth scroll to section
    $('.links a').click(function(){
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000)
    })
    // end smoth scroll to section
    // trigger Nice scroll
    $("body").niceScroll({
        cursorcolor:"#c00409",
        cursorborder:"none",
        cursorborderradius:0
    });
    //
    // start auto slider for testemonials
    function autoSlider(){
        $('.t-slider .active').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                })
            }else{
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active');
                    $('.t-slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                })
            }
        })
    };
    autoSlider();
    //
    
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
        } else {
        $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 1300);
    });
    //
})
