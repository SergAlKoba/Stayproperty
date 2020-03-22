$(document).ready(function(){

    $('.manager-slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });


    $('.directions-slider').slick({
        rows: 2,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    if($(window).width() < 1024){

        $('.about-us article').readmore({
            speed: 175,
            maxHeight: 237,
            moreLink: '<a href="#">Развернуть</a>',
            lessLink: '<a href="#">Свернуть</a>'
        });

    }

    $('.datepicker-here').datepicker();

    $('.experience-item .img').matchHeight({
        byRow: false
    });

    $('.directions-item .icon').matchHeight({
        byRow: false
    });

    if($(window).width() >= 1024){

        $('.directions-slider').slick('unslick');
  
    }

    $('.customers-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
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

    if($(window).width() >= 768){
  
        $('.reviews-slider article').readmore({
          speed: 175,
          maxHeight: 145,
          moreLink: '<a href="#">Развернуть</a>',
          lessLink: '<a href="#">Свернуть</a>'
        });
  
      }
  
    $('.reviews-slider').slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      //adaptiveHeight: true,
      nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
      responsive: [
        {
            breakpoint: 1023,
            settings: {
              dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
              dots: true,
              nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
              prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
            }
        }
      ]
    });

    $('.reviews-slider article').readmore({
        speed: 175,
        maxHeight: 155,
        moreLink: '<a href="#">Развернуть</a>',
        lessLink: '<a href="#">Свернуть</a>'
    });

    if($(window).width() >= 768){

        $('.reviews-slider article').readmore({
          speed: 175,
          maxHeight: 135,
          moreLink: '<a href="#">Развернуть</a>',
          lessLink: '<a href="#">Свернуть</a>'
        });
    
      }
    
      if($(window).width() >= 1028){
    
        $('.reviews-slider article').readmore({
          speed: 175,
          maxHeight: 188,
          moreLink: '<a href="#">Развернуть</a>',
          lessLink: '<a href="#">Свернуть</a>'
        });
    
    }

    $('.partners-item').matchHeight({
        byRow: true
    });

    $('.partners-slider').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
        responsive: [
          {
              breakpoint: 1399,
              settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
              }
          },
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
                centerMode: false,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
              }
          }
        ]
      });


});

