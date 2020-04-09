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
})
