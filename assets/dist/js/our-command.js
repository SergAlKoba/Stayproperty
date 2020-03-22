$(document).ready(function(){

    $('.property-slider').slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
        responsive: [
        {
            breakpoint: 1279,
            settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
            }
        },
        {
            breakpoint: 1023,
            settings: {
                dots: true,
                slidesToShow: 1,
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

    $('.company-slider').slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    $('.office-slider').slick({
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
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

    $('.office-item .text').matchHeight({
        byRow: true
    });

    $('.office-item .contact').matchHeight({
        byRow: true
    });

    if($(window).width() >= 768){

      $('.property-item h4').matchHeight({
        byRow: true
      });

    }

    if($(window).width() >= 1024){

        $('.office-slider').slick('unslick');      

    }

    jcf.replaceAll();

    $('.map_js').on('click', function(){
        var mapData = $(this).data('map');
        $('.popup-map').addClass('active');
        $('.popup-map').find('iframe').attr('src', mapData);
    });

});