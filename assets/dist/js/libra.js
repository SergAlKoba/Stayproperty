$(document).ready(function(){

    $('.property-item h4').matchHeight({
        byRow: true
    });

    var tableHeight = $('.fix thead').height();

    $('.table-body').css({
        'padding-top': tableHeight
    });

    $('.fix').css({
        'height': tableHeight
    });

});


$(window).resize(function(){

    var tableHeight = $('.fix thead').height();

    $('.table-body').css({
        'padding-top': tableHeight
    });

    $('.fix').css({
        'height': tableHeight
    });

});