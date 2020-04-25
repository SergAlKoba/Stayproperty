$(document).ready(function(){

    $('.news-item h3').matchHeight({
        byRow: true
      });
    
      $('.news-item article').matchHeight({
        byRow: true
    });

  if($(window).width() < 1024){

    $('.customer-item article').readmore({
      speed: 175,
      maxHeight: 155,
      moreLink: '<a href="javascript:void(0)">Развернуть</a>',
      lessLink: '<a href="javascript:void(0)">Свернуть</a>'
    });

  }

    $('.company-slider').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-strelka"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-strelkaleft"></i></button>',
    });

    if($(window).width() >= 1024){

      $('.customer-item article').readmore({
        speed: 175,
        maxHeight: 155,
        moreLink: '<a href="#">Развернуть</a>',
        lessLink: '<a href="#">Свернуть</a>'
      });

    }

    jcf.replaceAll();

    $('.increase').on('click', function(){
      var increase = $(this).data('increase');
      $('.popup-increase').addClass('active');
      $('.popup-increase').find('img').attr('src', increase);
    });

});