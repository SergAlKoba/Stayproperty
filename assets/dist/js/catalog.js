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

    $('.partners-item').matchHeight({
      byRow: true
    });

    $('.manager-slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    if($(window).width() >= 768){

        $('.property-item h4').matchHeight({
          byRow: true
        });
  
    }

    
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