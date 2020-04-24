$(document).ready(function(){

    $('.office ul li ul').parent().addClass('drop');
    $('.currency-transfer li ul').parent().addClass('drop');
    $('.header-bottom nav li ul').parent().addClass('drop');
    $('.mobile-menu nav li ul').parent().addClass('drop');

    jcf.replaceAll();

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 30000,
        step: 1000,
        values: [ 2800, 25000 ],
        slide: function( event, ui ) {
          $( ".amount-left" ).text( ui.values[ 0 ] );
          $( ".amount-right" ).text( ui.values[ 1 ] );
        }
      });
      $( ".amount-left" ).text( $( "#slider-range" ).slider( "values", 0 ) );
      $( ".amount-right" ).text( $( "#slider-range" ).slider( "values", 1 ) );

    $( "#slider-range2" ).slider({
        range: true,
        min: 0,
        max: 150,
        values: [ 23, 120 ],
        slide: function( event, ui ) {
          $( ".amount-left2" ).text( ui.values[ 0 ] );
          $( ".amount-right2" ).text( ui.values[ 1 ] );
        }
      });
      $( ".amount-left2" ).text( $( "#slider-range2" ).slider( "values", 0 ) );
      $( ".amount-right2" ).text( $( "#slider-range2" ).slider( "values", 1 ) );

    $( "#slider-range3" ).slider({
        range: true,
        min: 0,
        max: 600,
        values: [ 100, 500 ],
        slide: function( event, ui ) {
          $( ".amount-left3" ).text( ui.values[ 0 ] );
          $( ".amount-right3" ).text( ui.values[ 1 ] );
        }
      });
      $( ".amount-left3" ).text( $( "#slider-range3" ).slider( "values", 0 ) );
      $( ".amount-right3" ).text( $( "#slider-range3" ).slider( "values", 1 ) );

      $(".checkbox-content").mCustomScrollbar();

      $('.search-filter .filter-title').on('click', function(){
          $('.extended').removeClass('active');
          $('.advanced').removeClass('active');
          $('.search-filter-desc').toggleClass('active');
      });
      
      $('.advanced').on('click', function(){
        $('.extended').toggleClass('active');
        $('.advanced').toggleClass('active');
      });

      $('.cloze').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-video').find('iframe').attr('src', '');
      });
      
      $('.cloze-popup').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-video').find('iframe').attr('src', '');
      });

      $('.cloze-linc').on('click', function(){
        $('.popup').removeClass('active');
        $('.popup-video').find('iframe').attr('src', '');
      });

      $('.thanks_js').on('click', function(){
        $('.popup-thanks').addClass('active');
      });

      $('.request_js').on('click', function(){
        $('.popup-request').addClass('active');
      });

      $('.download_js').on('click', function(){
        $('.popup-download').addClass('active');
      });

      $('.estate_js').on('click', function(){
        $('.popup-estate').addClass('active');
      });

      $('.study_js').on('click', function(){
        $('.popup-study').addClass('active');
      });

      $('.fill_js').on('click', function(){
        $('.popup-fill').addClass('active');
      });

      $('.feedback_js').on('click', function(){
        $('.popup-feedback').addClass('active');
      });

      $('.question_js').on('click', function(){
        $('.popup-question').addClass('active');
      });

      $('.play').on('click', function(){
        var dataVideo = $(this).data('video');
        $('.popup-video').addClass('active');
        $('.popup-video').find('iframe').attr('src', dataVideo);
      });

      $('.open-menu').on('click', function(){
        $(this).toggleClass('active');
        $('body').toggleClass('active');
        $('.mobile-menu').toggleClass('active');
      });

      $('.mobile-menu nav .drop').on('click', function(){
        $(this).toggleClass('active');
      });

      $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7(ххх) ххх-хх-хх"});

});