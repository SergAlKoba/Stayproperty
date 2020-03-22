$(document).ready(function(){

    $('.manager-slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    $('.sorting-view li').on('click', function(){
        var dataList = $(this).data('list');
        $('.sorting-view li').removeClass('active');
        $('.catalog').removeClass('th');
        $('.catalog').removeClass('list');
        $('.catalog').addClass(dataList);
    });


    $('.youtube').on('click', function(){
        var dataVideo = $(this).data('video');
        $('.popup-video').addClass('active');
        $('.popup-video').find('iframe').attr('src', dataVideo);
      });

});