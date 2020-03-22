$(document).ready(function(){

    $('.sun span').mouseenter(function(){
      $('.sun span').prev().addClass('active');
    });
    
    $('.sun span').mouseleave(function(){
      $('.sun span').prev().removeClass('active');
    });

    $('.banner-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    $('.new-objects-slider').slick({
      dots: true,
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

    $('.causes-slider').slick({
      dots: true,
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

    $('.offers-slider').slick({
      dots: true,
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

    $('.objectsTabs').responsiveTabs({
      startCollapsed: 'accordion',
    });

    $('.r-tabs-anchor').on('click', function(){
      $('.new-objects-slider').get(0).slick.setPosition();
      $('.new-objects-slider').get(1).slick.setPosition();
    });

    if($(window).width() >= 1024){

      $('.new-objects-slider').slick('unslick');

      $('.causes-slider').slick('unslick');

      $('.offers-slider').slick('unslick');

    }

    $('.new-objects-slider p').matchHeight({
      byRow: true
    });

    $('.new-objects-slider h3').matchHeight({
      byRow: true
    });

    $('.new-objects-slider .item-text').matchHeight({
      byRow: true
    });

    $('.offers-item p').matchHeight({
      byRow: true
    });

    $('.offers-item h3').matchHeight({
      byRow: true
    });

    $('.offers-item .item-text').matchHeight({
      byRow: true
    });

    $('.partners-item').matchHeight({
      byRow: true
    });

    if($(window).width() >= 768){

      $('.property-item h4').matchHeight({
        byRow: true
      });

      $('.reviews-slider article').readmore({
        speed: 175,
        maxHeight: 145,
        moreLink: '<a href="#">Развернуть</a>',
        lessLink: '<a href="#">Свернуть</a>'
      });

    }

  $('.reviews-slider').slick({
    dots: false,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
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
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1,
            nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
          }
      }
    ]
  });

  $('.news-slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
          prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
        }
      },
      {
          breakpoint: 1023,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
      },
      {
          breakpoint: 767,
          settings: {
            arrows: false,
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1,
          }
      }
    ]
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

  $('.manager-slider').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
  });

  $('.news-slider h3').matchHeight({
    byRow: true
  });

  $('.news-slider article').readmore({
      speed: 175,
      maxHeight: 155,
      moreLink: '<a href="#">подробнее</a>',
      lessLink: '<a href="#">cвернуть</a>'
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

  if($(window).width() >= 1280){

    $('.news-slider article').readmore({
      speed: 175,
      maxHeight: 120,
      moreLink: '<a href="#">подробнее</a>',
      lessLink: '<a href="#">cвернуть</a>'
    });

  }
  
  $('.youtube').on('click', function(){
    var dataVideo = $(this).data('video');
    $('.popup-video').addClass('active');
    $('.popup-video').find('iframe').attr('src', dataVideo);
  });

});