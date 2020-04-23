$(document).ready(function(){

    $('.manager-slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    $('.foto-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    var fotoFilter = $('.foto-filter li.active').html();
    $('.foto-filter .filter-title').html(fotoFilter);

    $('.foto-filter li').on('click', function(){
        $('.foto-filter li').removeClass('active');
        $(this).addClass('active');
        $('.foto-filter .filter-title').html($(this).html());
        $('.foto-filter ul').removeClass('open');
    });

    $('.foto-filter .filter-title').on('click', function(){
        $(this).next('ul').toggleClass('open');
    });

    $('.specifications .tabs-link li').on('click', function(){
        var specificationsTab = $(this).data('tab');
        $('.specifications .tabs-link li').removeClass('active');
        $(this).addClass('active');
        $('.specifications .tabs-item').removeClass('active');
        $('.' + specificationsTab).addClass('active');
    });

    $('.main-specifications .tabs-link li').on('click', function(){
        var mainSpecificationsTab = $(this).data('tab');
        $('.main-specifications .tabs-link li').removeClass('active');
        $(this).addClass('active');
        $('.main-specifications .tabs-item').removeClass('active');
        $('.' + mainSpecificationsTab).addClass('active');
    });

    $('.properties-slider').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
        responsive: [
          {
              breakpoint: 1023,
              settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
              }
          },
          {
              breakpoint: 767,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
              }
          }
        ]
    });

    $('.presentation-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.presentation-slider-nev',
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    $('.presentation-slider-nev').slick({
        vertical: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.presentation-slider',
        focusOnSelect: true
    });
    


    var presentationFilter = $('.presentation-filter li.active').html();
    $('.presentation-filter .filter-title').html(presentationFilter);

    $('.presentation-filter li').on('click', function(){
        $('.presentation-filter li').removeClass('active');
        $(this).addClass('active');
        $('.presentation-filter .filter-title').html($(this).html());
        $('.presentation-filter ul').removeClass('open');
        $('.specifications-slider').get(0).slick.setPosition();
    });

    $('.presentation-filter .filter-title').on('click', function(){
        $(this).next('ul').toggleClass('open');
    });

    $('.specifications-slider').slick({
        rows: 5,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    if($(window).width() >= 1024){

        $('.specifications-slider').slick('unslick');      

    }



    $('.construction-for').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    $('.construction-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
              }
            }
          ]
    });

    $('.construction-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var construction = $('.construction-nav .slick-center .nav-link').data('construction');
        $('.construction-for').removeClass('active');
        $('.' + construction).addClass('active');
        $('.' + construction).get(0).slick.setPosition();
    });


    $('.youtube').on('click', function(){
        var dataVideo = $(this).data('video');
        $('.popup-video').addClass('active');
        $('.popup-video').find('iframe').attr('src', dataVideo);
    });

    $('.play').on('click', function(){
        var dataVideo = $(this).data('video');
        $('.popup-video').addClass('active');
        $('.popup-video').find('iframe').attr('src', dataVideo);
    });

});

