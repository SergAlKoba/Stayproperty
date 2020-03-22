$(document).ready(function(){

    $('.manager-slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    $('.causes-slider').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
        responsive: [
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

    jcf.replaceAll();

    $('.does-go-for').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.does-go-nav'
    });

    $('.does-go-nav').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.does-go-for',
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    $('.conditions-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });


    if($(window).width() >= 1024){
  
        $('.causes-slider').slick('unslick');
        $('.conditions-slider').slick('unslick');
  
    }

    $('.datepicker-here').datepicker();

});

