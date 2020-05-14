$(document).ready(function($){

    $('.office ul li ul').parent().addClass('drop');
    $('.currency-transfer li ul').parent().addClass('drop');
    $('.header-bottom nav li ul').parent().addClass('drop');
    $('.mobile-menu nav li ul').parent().addClass('drop');

    jcf.replaceAll();

      $(".checkbox-content").mCustomScrollbar();

      $('.search-filter .filter-title').on('click', function(){
        
          $('.extended').removeClass('active');
          $('.advanced').removeClass('active');
          $('.search-filter-desc').toggleClass('active');
      });

      $('.main-filter .filter-title').on('click', function(){
        
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

      //$('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7(ххх) ххх-хх-хх"});
      
  var listCountries = $.masksSort($.masksLoad("https://cdn.rawgit.com/andr-04/inputmask-multi/master/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
    var listRU = $.masksSort($.masksLoad("https://cdn.rawgit.com/andr-04/inputmask-multi/master/data/phones-ru.json"), ['#'], /[0-9]|#/, "mask");
    var maskOpts = {
        inputmask: {
            definitions: {
                '#': {
                    validator: "[0-9]",
                    cardinality: 1
                }
            },
            showMaskOnHover: false,
            autoUnmask: true,
            clearMaskOnLostFocus: false
        },
        match: /[0-9]/,
        replace: '#',
        listKey: "mask"
    };

    var maskChangeWorld = function(maskObj, determined) {
        if (determined) {
            var hint = maskObj.name_ru;
            if (maskObj.desc_ru && maskObj.desc_ru != "") {
                hint += " (" + maskObj.desc_ru + ")";
            }
            $("#descr").html(hint);
        } else {
            $("#descr").html("Маска ввода");
        }
    }

    var maskChangeRU = function(maskObj, determined) {
        if (determined) {
            if (maskObj.type != "mobile") {
                $("#descr").html(maskObj.city.toString() + " (" + maskObj.region.toString() + ")");
            } else {
                $("#descr").html("мобильные");
            }
        } else {
            $("#descr").html("Маска ввода");
        }
    }

    $('#phone_mask, input[name="mode"]').change(function() {
        if ($('#phone_mask').is(':checked')) {
            $('.customer_phone').inputmask("remove");
            if ($('#is_world').is(':checked')) {
                $('.customer_phone').inputmasks($.extend(true, {}, maskOpts, {
                    list: listCountries,
                    onMaskChange: maskChangeWorld
                }));
            } else {
                $('.customer_phone').inputmasks($.extend(true, {}, maskOpts, {
                    list: listRU,
                    onMaskChange: maskChangeRU
                }));
            }
        } else {
            $('.customer_phone').inputmasks("remove");
            $('.customer_phone').inputmask("+#{*}", maskOpts.inputmask);
            $("#descr").html("Маска ввода");
        }
    });

    $('#phone_mask').change();

    // $("#example_id").ionRangeSlider({
    //   type: "double",
    //   step: 500,
    //   min: 30000,
    //   max: 1000000,
    //   from: 37000,
    //   to: 900000,
    //   onStart: function (data) {
    //     $('.js-irs-0 .irs-from').attr('data-irs-from', data.from);
    //     $('.js-irs-0 .irs-to').attr('data-irs-to', data.to);
    //   },
    //   onChange: function (data) {
    //     $('.js-irs-0 .irs-from').attr('data-irs-from', data.from);
    //     $('.js-irs-0 .irs-to').attr('data-irs-to', data.to);
    //   }
    // });

    // $("#example_id2").ionRangeSlider({
    //   type: "double",
    //   step: 1,
    //   min: 0,
    //   max: 600,
    //   from: 100,
    //   to: 500,
    //   onStart: function (data) {
    //     $('.js-irs-1 .irs-from').attr('data-irs-from', data.from);
    //     $('.js-irs-1 .irs-to').attr('data-irs-to', data.to);
    //   },
    //   onChange: function (data) {
    //     $('.js-irs-1 .irs-from').attr('data-irs-from', data.from);
    //     $('.js-irs-1 .irs-to').attr('data-irs-to', data.to);
    //   }
    // });

    // $("#example_id3").ionRangeSlider({
    //   type: "double",
    //   step: 1,
    //   min: 0,
    //   max: 150,
    //   from: 23,
    //   to: 120,
    //   onStart: function (data) {
    //     $('.js-irs-1 .irs-from').attr('data-irs-from', data.from);
    //     $('.js-irs-1 .irs-to').attr('data-irs-to', data.to);
    //   },
    //   onChange: function (data) {
    //     $('.js-irs-1 .irs-from').attr('data-irs-from', data.from);
    //     $('.js-irs-1 .irs-to').attr('data-irs-to', data.to);
    //   }
    // });

});
