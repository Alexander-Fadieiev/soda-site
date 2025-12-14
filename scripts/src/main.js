document.addEventListener('DOMContentLoaded', function () {
  function preloaderOut(){
    $('.preloader').fadeOut(0)
  }
  // preloaderOut();
  $('.preloader').fadeOut(200)




    // $('#preloader').fadeOut();
    $('body').removeClass('body-overflow');

    //svg inliner
    new SVGInliner(document.querySelectorAll(".svg-to-inline"), function () {});

    //burger
   if(document.querySelector('.s_header_burger')){
     //animate burger
     var timer = null;
     $('.s_header_burger').click(function(e){
       e.preventDefault;
       //reset animation
       $(this).removeClass('animate');
       $(this).addClass('animate');
       var that = this;
       // clearTimeout(timer);
       timer = setTimeout(function(){
         $(that).removeClass('animate');
       },500);
       // end animate

       if($('.s_header_burger').hasClass('s_header_burger--open')){
         $('.s_header_burger').removeClass('s_header_burger--open');
         $('.s_header_menu').removeClass('s_header_menu--open');
         $('.main-opacity').removeClass('main-opacity-none');
         $('body').removeClass('body-overflow');
       } else {
         $('.s_header_burger').addClass('s_header_burger--open');
         $('.s_header_menu').addClass('s_header_menu--open');
         $('.main-opacity').addClass('main-opacity-none');
         $('body').addClass('body-overflow');
       }
     })
   }

   //languages
   if (document.querySelector('.s_header_lang')) {
       if ("ontouchstart" in document.documentElement) {
           $('.s_header_lang').click(function () {
               if ($('.s_header_lang_choose').hasClass('s_header_lang_choose--open')) {
                   $('.s_header_lang_choose').removeClass('s_header_lang_choose--open')
                   $('.s_header_lang').removeClass('s_header_lang--open')
               } else {
                   $('.s_header_lang_choose').addClass('s_header_lang_choose--open')
                   $('.s_header_lang').addClass('s_header_lang--open')
               }
           })
       } else {
           $('.s_header_lang').mouseover(function () {
               $('.s_header_lang_choose').addClass('s_header_lang_choose--open')
               // var height;
               // $('.s_header_lang_choose').css('height','auto');
               // height = $('.s_header_lang_choose').outerHeight();
               // $('.s_header_lang_choose').css('height',0);
               // $('.s_header_lang_choose').css('height',height);
               $('.s_header_lang').addClass('s_header_lang--open')

           }).mouseout(function () {
              // $('.s_header_lang_choose').css('height',0);
              $('.s_header_lang_choose').removeClass('s_header_lang_choose--open')
              $('.s_header_lang').removeClass('s_header_lang--open')
           })
       }
   }
   // clear lang
   $(document).mouseup(function (e) {
       var lang = $('.s_header_lang');
       if (!lang.is(e.target) && lang.has(e.target).length === 0) {
           $('.s_header_lang_choose').removeClass('s_header_lang_choose--open')
       }
       var search = $('.s_header_search');
       if (!search.is(e.target) && search.has(e.target).length === 0) {
           $('.s_header_search_form').removeClass('s_header_search_form--open')
       }
   });


   //validation
   $.validator.addMethod("plus", function (value, element) {
     var Reg61 = new RegExp("^.*[^+-/(/)1234567890 ].*$");
     return !Reg61.test(value);
   });
   $.validator.addMethod("correctPassword", function(value, element) {
       if (value === $('input[name="Password"]').val()){
         return true;
       }
       else {
         return false;
       }
         },
         "Пароли должны совпадать")

   $.validator.addMethod("notnumbers", function (value, element) {
     var Reg61 = new RegExp("^.*[^A-zА-яЁёіЇїЄєҐґ ].*$");
     return !Reg61.test(value);
   });
   //add validation rules
   var rules = {
     email: {
       required: true,
       email: true,
     },
     name: {
       required: true,
       notnumbers: true,
       minlength: 2,
     },
     place: {
       required: true,
       notnumbers: true,
       minlength: 2,
     },
     password: {
           required: true,
           minlength: 6,
       },
     passwordcorrect: {
         required: true,
         minlength: 6,
         correctPassword: true,
     },
     city: {
       required: true,
       notnumbers: true,
       minlength: 2,
     },
     surname: {
       required: true,
       notnumbers: true,
       minlength: 2,
       maxlength: 32,
     },
     phone: {
       required: true,
       plus: true,
       minlength: 10
       // digits: true,
     },
     zip: {
       required: true,
       plus: true,
       minlength: 3
       // digits: true,
     },
     theme: {
       required: true,
       minlength: 2,
     },
     question: {
       required: true,
       minlength: 5,
     },
     message: {
       required: true,
       minlength: 3,
     },
     approve: {
       required: true,
     },
     select1: {
       required: true,
     },
     select2: {
       required: true,
     },
     radio2: {
       required: true,
     },
     radio: {
       required: true,
     },
   }
   var messages = {
     email: {
       required: $('input[name="email"]').attr('data-error'),
       email: $('input[name="email"]').attr('data-error'),
     },
     name: {
       required: $('input[name="name"]').attr('data-error'),
       minlength: $('input[name="name"]').attr('data-error'),
       notnumbers: $('input[name="name"]').attr('data-error'),
     },
     surname: {
       required: $('input[name="surname"]').attr('data-error'),
       minlength: $('input[name="surname"]').attr('data-error'),
       notnumbers: $('input[name="surname"]').attr('data-error'),
     },
     place: {
       required: $('input[name="city"]').attr('data-error'),
       minlength: $('input[name="place"]').attr('data-error'),
       notnumbers: $('input[name="place"]').attr('data-error'),
     },
     theme: {
       required: $('input[name="theme"]').attr('data-error'),
       minlength: $('input[name="theme"]').attr('data-error'),
     },
     question: {
       required: $('textarea[name="question"]').attr('data-error'),
       minlength: $('textarea[name="question"]').attr('data-error'),
     },
     phone: {
       required: $('input[name="phone"]').attr('data-error'),
       digits: $('input[name="phone"]').attr('data-error'),
       plus: $('input[name="phone"]').attr('data-error'),
       minlength: $('input[name="phone"]').attr('data-error'),
     },
     password: {
           required: $('input[name="password"]').attr('data-error'),
           minlength: $('input[name="password"]').attr('data-error'),
       },
     passwordcorrect: {
         required: $('input[name="passwordcorrect"]').attr('data-error'),
         minlength: $('input[name="passwordcorrect"]').attr('data-error'),
         correctPassword: $('input[name="passwordcorrect"]').attr('data-error'),
     },
     city: {
       required: $('input[name="city"]').attr('data-error'),
       minlength: $('input[name="city"]').attr('data-error'),
       notnumbers: $('input[name="city"]').attr('data-error'),
     },
     zip: {
       required: $('input[name="zip"]').attr('data-error'),
       digits: $('input[name="zip"]').attr('data-error'),
       minlength: $('input[name="zip"]').attr('data-error'),
     },
     approve: {
       required: $('input[name="approve"]').attr('data-error'),
     },
     select1: {
       required: $('input[name="select1"]').attr('data-error'),
     },
     select2: {
       required: $('input[name="select2"]').attr('data-error'),
     },
     radio: {
       required: $('input[name="radio"]').attr('data-error'),
     },
     radio2: {
       required: $('input[name="radio2"]').attr('data-error'),
     },

   };

   // validation contacts
    if (document.querySelector('#js-contacts-form')) {
      let form = $('#js-contacts-form');
      form.validate({
        rules: rules,
        highlight: function (element, errorClass) {
          $(element).addClass('input--error');
        },
        unhighlight: function (element, errorClass) {
          $(element).removeClass('input--error');
        },
        messages: messages,
        submitHandler: function submitHandler(form) {
          $('.preloader').fadeIn();
          $('body').addClass('body-overflow');
          $.post('/wp-admin/admin-ajax.php?action=callback', {
            type: 'Contacts',
            name: "<p> Имя: " + $(form).find('input[name="name"]').val() + "</p>",
            email: "<p> E-mail: " + $(form).find('input[name="email"]').val() + "</p>",
            question: "<p> Комментарий: " + $(form).find('textarea').val() + "</p>"
          }).done(function (data) {
            popupthanks();
            var validator = $('#js-contacts-form').validate();
            validator.resetForm();
            document.querySelector('#js-contacts-form').reset();
          }).always(function () {
            // preloader
            preloaderOut();
            $('body').removeClass('body-overflow');
          });
        }
      })
    }

    // validation subscribe
     if (document.querySelector('#js-subscribe-form')) {
       let form = $('#js-subscribe-form');
       form.validate({
         rules: rules,
         highlight: function (element, errorClass) {
           $(element).addClass('input--error');
         },
         unhighlight: function (element, errorClass) {
           $(element).removeClass('input--error');
         },
         messages: messages,
         submitHandler: function submitHandler(form) {
           $('.preloader').fadeIn();
           $('body').addClass('body-overflow');
           $.post('/wp-admin/admin-ajax.php?action=callback', {
             type: 'subscribe',
             email: "<p> E-mail: " + $(form).find('input[name="email"]').val() + "</p>",
           }).done(function (data) {
              $('.s_popup_thanks--pink').fadeIn();
              setTimeout(function(){
                $('.s_popup_thanks--pink').fadeOut();
                $('body').removeClass('body-overflow');
              },3000)
             var validator = $('#js-subscribe-form').validate();
             validator.resetForm();
             document.querySelector('#js-subscribe-form').reset();
           }).always(function () {
             // preloader
             preloaderOut();
             $('body').removeClass('body-overflow');
           });
         }
       })
     }

    // validation question
    if (document.querySelector('.js-popup_question-form')) {
      let form = $('.js-popup_question-form');
      form.validate({
        rules: rules,
        highlight: function (element, errorClass) {
          $(element).addClass('input--error');
        },
        unhighlight: function (element, errorClass) {
          $(element).removeClass('input--error');
        },
        messages: messages,
        submitHandler: function submitHandler(form) {
          $('.preloader').fadeIn();
          $('body').addClass('body-overflow');
          $.post('/wp-admin/admin-ajax.php?action=callback', {
            type: 'Задайте вопрос',
            name: "<p> Имя: " + $(form).find('input[name="name"]').val() + "</p>",
            email: "<p> E-mail: " + $(form).find('input[name="email"]').val() + "</p>",
            phone: "<p> Phone: " + $(form).find('input[name="phone"]').val() + "</p>",
          }).done(function (data) {
            popupthanks();
            var validator = $('.js-popup_question-form').validate();
            validator.resetForm();
            document.querySelector('.js-popup_question-form').reset();
          }).always(function () {
            // preloader
            preloaderOut();
            $('body').removeClass('body-overflow');
          });
        }
      })
    }

    //popup thank
  function popupthanks(){
    $('body').addClass('body-overflow');
    $('.s_popup').fadeOut();
    // dont forget to clear forms
    $('.s_popup_thanks').fadeIn();
    setTimeout(function(){
      $('.s_popup_thanks').fadeOut();
      $('body').removeClass('body-overflow');
    },3000)
  }

  // js-close popup
  if(document.querySelector('.js-popup_close')){
    $('.js-popup_close').click(function(){
      $('.s_popup').fadeOut();
      $('body').removeClass('body-overflow');
      // dont forget to clear forms
    })
  }

  // popupmore
  $('.s_popup').mouseup(function (e) {
    var content = $('.s_popup_content');
    if (!content.is(e.target) && content.has(e.target).length === 0) {
      $('.s_popup').fadeOut();
      $('body').removeClass('body-overflow');
    }
  });



  // contacts map

  if (document.querySelector('.s_contacts__map')){
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 14.25,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(50.4613146, 30.5085989),

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
        };



        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(50.4613543, 30.5091258),
            map: map,
            title: 'Soda!',
            icon: '/wp-content/themes/Soda/assets/images/map.png'
        });
    }
    init();

  }





  //search header form
  if(document.querySelector('.js-search-open')){
    $('.js-search-open').click(function(e){
      $('.s_header_search_form').toggleClass('s_header_search_form--open');
    })
  }

  //calc header
  function calcHeader(){
    if(document.querySelector('.js-calc-header')){
      $('.js-calc-header').css('padding-top',$('.s_header').outerHeight());
    }
  }
  calcHeader();
  window.onresize = function (){
    setTimeout(calcHeader,100);
    setTimeout(booksArrows,100);
  }


  //spincrement when detected this section
  if(document.querySelector('.js-spin')){
    var w_top = window.pageYOffset + window.innerHeight;
    var spins = $('.js-spin');
      spins.each(function () {
      if ((w_top - $(this).offset().top) > 100 && !$(this).hasClass('js-spin--active')) {
          $(this).addClass('js-spin--active');
          $('.js-spin').spincrement();
      }
    });
    $(window).on('scroll', function () {
      var w_top = window.pageYOffset + window.innerHeight;
      var spins = $('.js-spin');
      spins.each(function () {
        if ((w_top - $(this).offset().top) > 100 && !$(this).hasClass('js-spin--active') ) {
          $(this).addClass('js-spin--active');
          $('.js-spin').spincrement();
        }
      });
    })
  }


  //masonry
  var allowMasonry = true;
  //function for init clientsmasonry
  function clientsMasonry(){
    if(document.querySelector('.js-grid-clients') && window.innerWidth >= 1000 && allowMasonry){
      $('.js-grid-clients').masonry({
        itemSelector: '.js-grid-item-clients',
        horizontalOrder: true
      });
      allowMasonry = false;
    }
  }

  window.onload = function(){
    duck();
    // cases masonry
    if(document.querySelector('.js-grid')){
      $('.js-grid').masonry({
        itemSelector: '.js-grid-item',
        horizontalOrder: true
      });
    }
    //clients masonry
    clientsMasonry();
    booksArrows();


  }
  // clients slider
  if(document.querySelector('.js-clients-slider')){
    enquire.register("screen and (max-width:999px)", {
      // OPTIONAL
      // If supplied, triggered when a media query matches.
      match: function () {
        try {} catch (e) {

        } finally {

        }
        if(!allowMasonry){
          $('.js-grid-clients').masonry('destroy');
          allowMasonry = true;
        }

        $('.js-clients-slider').slick({
          infinite: true,
          arrows: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 2,
          slidesPerRow: 3,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                rows: 3,
                slidesPerRow: 2,
              }
            },
            {
              breakpoint: 639,
              settings: {
                rows: 4,
                slidesPerRow: 1,
              }
            },
          ]
        });

      },

      unmatch: function () {
        //kill slider when resize and init masonry instead
        if($('.js-clients-slider').hasClass('slick-initialized')){
          $('.js-clients-slider').slick('unslick');
        }
        clientsMasonry();


      }
    });

  }


  // team slider
  if (document.querySelector('.s_team__cards')){
    enquire.register("all and (max-width: 999px)", {
        match : function() {

            $('.s_team__cards').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                responsive: [
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2,
                    }
                  },
                  {
                    breakpoint: 639,
                    settings: {
                      slidesToShow: 1,
                    }
                  },
                ]
            });
        },
        unmatch : function() {
            $('.s_team__cards').slick('unslick');
        }
    });
}


  //custom select
  if(document.querySelector('.custom-select')){
    $(".custom-select").each(function () {
      var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
      var template = '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function () {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
      template += '</div></div>';

      $(this).wrap('<div class="custom-select-wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
      $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
      $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
      $('html').one('click', function () {
        $(".custom-select").removeClass("opened");
      });
      $(this).parents(".custom-select").toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
      $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
      $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".custom-select").removeClass("opened");
      $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
      if(document.querySelector('#filter-form')){
        $('#filter-form').submit();
      }
    });

  }

  //click on site-button
  if(document.querySelector('.site-button--two')){
    $('.site-button--two').click(function(e){
      //class active give us an animation
      $(this).addClass('active');
      var persent = 100 * e.offsetX / $(this).width();
      $(this).find('span').css({left: persent +'%', right: 100 - persent + '%'})
      var that = this;
      setTimeout(function(){
        $(that).addClass('pointernone');
      },700)
      setTimeout(function(){
        $(that).removeClass('active');
        $(that).removeClass('pointernone');
        $(that).find('span').css({left: 0, right: 'unset'})
      },1000)
    })
  }


  // if(document.querySelector('.s_hero__img')){
  //   $('.s_hero__img ').mousemove(function(e) {
  //     var change;
  //     var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
  //     var  xpos=xpos*3;ypos=ypos*3;
  //     $('.s_hero__img ').css('bottom',((0+(ypos/0))+"px"));
  //     $('.s_hero__img').css('right',(( 0+(xpos/100))+"px"));

  //   });
  // }
  if(document.querySelector('#img')){
    // var scene = document.getElementById('img');
    // var parallaxInstance = new Parallax(scene, {
    //   relativeInput: true
    // })
    // parallaxInstance.friction(0.8);
    let allow = true;
    let timer;
    $('#img').click(function(){
      // clearTimeout(timer);
      if(allow){
        allow = false;
        $('#img').addClass('img-anim');
        timer = setTimeout(function(){
          $('#img').removeClass('img-anim');
          allow = true;
        },10000)
      }
    })
  }


  if(document.querySelector('#bubbles')){
    var scene = document.getElementById('bubbles');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    })
    parallaxInstance.friction(0.8, 0.6, 0.2);
  }





  //bubble
  if(document.querySelector('#bubbles-canvas')){
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    function randomBetween(min = 0,max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    //duck win combination
    var winData = $('#bubbles-canvas').data('win');
    var back;
    function win(){
      app.amount++;
      if( localStorage.getItem("amount") == null){
        localStorage.setItem('amount',1);
      } else {
        localStorage.setItem('amount',parseInt(localStorage.getItem("amount"))+1);
      }
      $('.total-amount').text('+' + localStorage.getItem("amount"));
      winData.forEach(function(item,i){
        if(parseInt(localStorage.getItem("amount")) == item.amount){
          clearTimeout(back);
          $('.duck--image').css('backgroundImage','url(' + item.img + ')')
          // $('.total-amount').text('+' + app.amount);
          $('.duck-speech').text(item.text);
          $('.duck').addClass('active');
          $('.duck').css('right',40);
          back = setTimeout(function(){
            $('.duck').removeClass('active');
            var width = $('.duck').outerWidth();
            $('.duck').css('right',-width);
          },3000)
        }
      })
    }
  // my code on pixi js
    var app = new PIXI.Application({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      antialias: true, // default: false
      transparent: false, // default: false
      resolution: 1, // default: 1
      autoResize: true,
      backgroundColor: 0xffffff
    });
    app.amount = 0;
    if($('#bubbles-canvas').data('bottle') == true){
      app.bottle = true;
    }
    console.log(app.view);
    $(app.view).css('opacity',0);
    // document.querySelector('.wrapper').appendChild(app.view);
    document.getElementById('bubbles-canvas').appendChild(app.view);
    setTimeout(function(){
      $(app.view).css('opacity',1);
    },100)

    window.onresize = function(){
      app.renderer.resize(document.documentElement.clientWidth,document.documentElement.clientHeight);
    }


    var loader = new PIXI.loaders.Loader();
    if($('#bubbles-canvas').data('page') == 'blue'){
      var items = [
        {
          name: 'item1',
          path: '/wp-content/themes/Soda/assets/images/blue2.png',
        }
      ];
    } else if($('#bubbles-canvas').data('page') == 'pink'){
      var items = [
        {
          name: 'item1',
          path: '/wp-content/themes/Soda/assets/images/pink2.png',
        }
      ];
    } else {
      var items = [
        {
          name: 'item1',
          path: '/wp-content/themes/Soda/assets/images/blue2.png',
        },
        {
          name: 'item2',
          path: '/wp-content/themes/Soda/assets/images/pink2.png',
        },
      ];
    }
    for (var i = 0; i < items.length; i++) {
      loader.add(items[i].name,items[i].path);
    }
    // explosion image
    loader.add('item3','/wp-content/themes/Soda/assets/images/explosion-blue.png');
    loader.add('item4','/wp-content/themes/Soda/assets/images/explosion-pink.png');
    //bottle
    loader.add('bottle','/wp-content/themes/Soda/assets/images/bottle.png');
    loader.add('cork','/wp-content/themes/Soda/assets/images/cork.png');


    //speed and direction
    function init(item){
      //speed
      let maxX = 0.5;
      let minX = -0.5;

      let maxY = 0.5;
      let minY = -0.5;
      item.vx = Math.random() * (maxX - minX) + minX;
      item.vy = Math.random() * (maxY - minY) + minY;
      item.velocityX = item.vx;
      item.velocityY = item.vy;
      //if bottle is opening
      if(app.bottle){
        item.first = true;
        let bottleXmax = 0.1;
        let bottleXmin = 10;
        if(Math.random() > 0.5){
          item.vx = Math.random() * (bottleXmax - bottleXmin) + bottleXmin;
        } else {
          item.vx = Math.random() * (bottleXmax + bottleXmin) - bottleXmin;
        }


        let bottleYmax = -9.0;
        let bottleYmin = -2.0;
        item.randomFinal = Math.random() * (0.4 - 0.1) + 0.1;
        item.begin = true;
        if(Math.random() > 0.5){
          item.direction = 'top';
        } else {
          item.direction = 'bottom'
        }
        // item.vx = Math.random() * (bottleXmax - bottleXmin) + bottleXmin;
        item.vy = Math.random() * (bottleYmax - bottleYmin) + bottleYmin;
      }
      return item;
    }

    // create a new Sprite from an image path
    loader.load((loader, resources) => {
      let bottle = new PIXI.Sprite(resources.bottle.texture);
      let cork = new PIXI.Sprite(resources.cork.texture);

      if($('#bubbles-canvas').data('bottle') == true){
        $(window).resize(function(){
          bottle.y = app.screen.height + bottle.height;
          cork.y = -100;
        })
      }
      function generateBottle(){
        if(app.screen.height < 800){
          bottle.scale.x = 0.6;
          bottle.scale.y = 0.6;

          cork.scale.x = 0.6;
          cork.scale.y = 0.6;
        }
        bottle.anchor.set(0.5);
        cork.anchor.set(0.5);
        //position of bottle
        bottle.x = app.screen.width / 2;
        bottle.y = app.screen.height - bottle.height/2;

        //position of cork
        cork.x = app.screen.width / 2;
        cork.y = app.screen.height - bottle.height;


        if(app.bottle){
          //make it smaller
          if(app.screen.height < 800){
            bottle.scale.x = 0.6;
            bottle.scale.y = 0.6;

            cork.scale.x = 0.6;
            cork.scale.y = 0.6;
          }


          bottle.anchor.set(0.5);
          cork.anchor.set(0.5);
          bottle.zOrder = 1;
          cork.zOrder = 2;

          //position of bottle
          bottle.x = app.screen.width / 2;
          bottle.y = app.screen.height - bottle.height/2 + 20;

          //position of cork
          cork.x = app.screen.width / 2;
          cork.y = app.screen.height - bottle.height + 20;


          //add on scene
          // app.stage.addChild(bottle);
          // app.stage.addChild(cork);

          //cork logic
          // function getRandomInt(min, max) {
          //   return Math.floor(Math.random() * (max - min)) + min;
          // }
          let finalX = getRandomInt(0,app.screen.width);



          var tl = new TimelineMax();
          var tl1 = new TimelineMax();
          var tl3 = new TimelineMax();
          var container = new PIXI.Container();
          app.stage.addChild(container);
          container.addChild(bottle);
          container.addChild(cork);

          tl3.to(container,0.05,{x:"+=20",y:"-=20", yoyo:true},0.5);
          tl3.to(container,0.05,{x:"-=20",y:"+=20", yoyo:true});
          tl3.to(container,0.05,{x:"+=20",y:"+=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"+=20",y:"+=20", yoyo:true});

          tl3.to(container,0.05,{x:"+=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"+=20", yoyo:true});
          tl3.to(container,0.05,{x:"+=20",y:"+=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"+=20",y:"+=20", yoyo:true});

          tl3.to(container,0.05,{x:"+=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"+=20", yoyo:true});
          tl3.to(container,0.05,{x:"+=20",y:"+=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"+=20",y:"+=20", yoyo:true});

          tl3.to(container,0.05,{x:"+=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"+=20", yoyo:true});
          tl3.to(container,0.05,{x:"+=20",y:"+=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"-=20",y:"-=20", yoyo:true});
          tl3.to(container,0.05,{x:"+=20",y:"+=20", yoyo:true});

          // tl3.to(container,0.05,{x:"+=20",y:"-=20", yoyo:true});
          // tl3.to(container,0.05,{x:"-=20",y:"+=20", yoyo:true});
          // tl3.to(container,0.05,{x:"+=20",y:"+=20", yoyo:true});
          // tl3.to(container,0.05,{x:"-=20",y:"-=20", yoyo:true});
          // tl3.to(container,0.05,{x:"-=20",y:"-=20", yoyo:true});
          // tl3.to(container,0.05,{x:"+=20",y:"+=20", yoyo:true});

          // TweenMax.to(element, 0.1, {x:"+=20", yoyo:true, repeat:-1});
          // TweenMax.to(element, 0.1, {x:"-=20", yoyo:true, repeat:-1});

          // tl.delay(2);
          tl.to(bottle, 1, {y:app.screen.height + bottle.height},1.5);
          // tl1.to(cork, 2, {x: finalX, y: -100, rotation: 25},1.6);
          tl1.to(cork, 1, {x: finalX, y: -100, rotation: 10},1.5);
          // tl1.delay(2);
        }
      }
      function generateBubble(type){
        // current item(bubble)
        let item;
        if(document.querySelector('.js-communications') && document.querySelector('.js-performance')){
          if($('.js-communications').offset().top <= (window.innerHeight / 2 + window.scrollY)){
            //sprite pink
            item = new PIXI.Sprite.fromImage('/wp-content/themes/Soda/assets/images/pink2.png');
          } else {
            //sprite blue
            item = new PIXI.Sprite.fromImage('/wp-content/themes/Soda/assets/images/blue2.png');
          }
        } else if (document.querySelector('.js-communications')){
          //sprite pink
          item = new PIXI.Sprite.fromImage('/wp-content/themes/Soda/assets/images/pink2.png');

        } else if(document.querySelector('.js-performance')){
          //sprite blue
          item = new PIXI.Sprite.fromImage('/wp-content/themes/Soda/assets/images/blue2.png');

        } else{
          // select random image
          let name = items[getRandomInt(0,items.length)].name;
          //we choose randomly a name of item in resources and if it == name in resoursec we make this sprite
          for (key in resources){
            if(key == name){
              item = new PIXI.Sprite(resources[key].texture);
            }
          }

        }
        let allow = true;





        // begin with lower opacity
        opacity = Math.random() * (0.5 - (0)) + (0);
        // 0.15
        item.alpha = 0.15;

        //make bubble clickable
        item.interactive = true;
        item.buttonMode = true;
        item.on('pointerdown', item.killBubble);
        //give random size for bubble
        let scale;
        // scale = Math.random() * (0.95 - (0.4)) + (0.4);
        scale = Math.random() * (0.6 - (0.2)) + (0.2);
        // item.scale.x *= 0;
        // item.scale.y *= 0;
        item.scale.x = 0;
        item.scale.y = 0;
        var tl = new TimelineMax();

        //transform position center
        item.anchor.set(0.5);




        // where sprite init
        let randomXBegin = getRandomInt(0,app.screen.width);
        let randomYBegin = getRandomInt(0,app.screen.height);

        let bottleXBegin = app.screen.width/2;
        // let bottleYBegin = 3*app.screen.height/4;
        let bottleYBegin = app.screen.height - 3*bottle.height/4 + 20;


        let maxRotation = 85;
        let rotation = getRandomInt(0,maxRotation);
        let max = 0.8;
        let min = -0.8;
        rotation = Math.random() * (max - min) + min;

        //random position
        item.x = randomXBegin;
        item.y = randomYBegin;

        //bottle position
        if(app.bottle){
          item.x = bottleXBegin;
          item.y = bottleYBegin;
        }




        item.bottleMovement = function(){
          //control y
          if((item.vy < -0.1) && item.begin){
            if(item.vy < -1){
                item.vy +=0.05;
            } else {
              item.vy +=0.02;
            }
          } else if(!item.begin){
            if(item.direction == 'bottom'){
              if(item.vy < -3){
                  item.vy +=0.05;
              } else if(item.vy < item.randomFinal){
                item.vy +=0.01;
              }
            }
            else {
              if(item.vy < -1){
                  item.vy +=0.04;
              } else {
                if(item.vy < -0.03){
                    item.vy +=0.01;
                }
              }
            }
          }
          //control negative x
          if((item.vx < 0.05)){
            if(item.vx < -1 && item.begin){
              item.vx +=0.07;
            } else if(item.vx < -0.1 && item.begin){
               item.vx += 0.02;
            } else {
              item.xv += 0.01;
              item.begin = false;
            }
          }
          //control positive x
          if((item.vx > 0.05)){
            if(item.vx > 1 && item.begin){
              item.vx -=0.07;
            } else if(item.vx > 0.1 && item.begin){
               item.vx -=0.02;
            } else {
              item.xv -= 0.01;
              item.begin = false;
              // item.vx = item.randomFinal;
            }
          }
        }
        init(item,bottle);
        app.stage.addChild(item);
        //anim scale from 0 to random number
        tl.to(item.scale, 1, {x:scale, y:scale});


        setTimeout(function(){
          item.begin = false;
        },2000)


        // Listen for animate update
        app.ticker.add(function(delta) {


          //calculate bounds of images every frame
          item.calculateBounds();

          if(!item.first){
            item.vx = item.velocityX;
            item.vy = item.velocityY;
          } else{
            item.bottleMovement();
          }

          item.position.x += item.vx;
          item.position.y += item.vy;

          // if our bubble is out of window
          if(((item.position.x-item.width/2) > app.renderer.screen.width || (item.position.x+item.width/2) < 0 || (item.position.y-item.height/2) > app.renderer.screen.height || (item.position.y+item.width/2) < 0) && allow){
            allow = false;
            item.killBubble();
          }
        });


        //click on bubble function and make it as a property of an object
        item.killBubble = function (death,type){
          var imgUrl = item.texture.baseTexture.imageUrl;

          setTimeout(function(){
            app.stage.removeChild(item);
          },100)
          // console.log(app.stage);
          setTimeout(function(){
            generateBubble(type);
          },randomBetween(6000,15000))
          if(death){

            //text+1
            //setstyleof text
            var explosion;
            item.alpha = 1;
            if(imgUrl == '/wp-content/themes/Soda/assets/images/blue2.png'){
              explosion = PIXI.Texture.fromImage('/wp-content/themes/Soda/assets/images/explosion-blue.png');
              var style = new PIXI.TextStyle({
                fontFamily: 'GothamPro',
                fontSize: 32,
                fontWeight: 'bold',
                dropShadowAlpha: 0,
                dropShadowDistance: 0,
                fill: '#4fbaf5',
                stroke: '#4fbaf5',
                strokeThickness: 2
              });
            } else {
              explosion = PIXI.Texture.fromImage('/wp-content/themes/Soda/assets/images/explosion-pink.png');
              var style = new PIXI.TextStyle({
                fontFamily: 'GothamPro',
                fontSize: 32,
                fontWeight: 'bold',
                dropShadowAlpha: 0,
                dropShadowDistance: 0,
                fill: '#F7C8CC',
                stroke: '#F7C8CC',
                strokeThickness: 2
              });
            }

            item.texture = explosion;
            item.scale.x = 0.45;
            item.scale.y = 0.45;
            app.ticker.add(function(delta){
              item.scale.x +=0.01;
              item.scale.y +=0.01;
            });

            var text = new PIXI.Text('+1',style);
            //get curren position
            text.x = item.position.x;
            text.y = item.position.y;
            //add text on scene
            app.stage.addChild(text);
            //remove it after 1 sec
            app.ticker.add(function(delta){
              text.position.y -=delta;
              text.alpha -=delta*0.009;
            })
            setTimeout(function(){
              app.stage.removeChild(text);
            },1300)
            // end text +1
            win();
          }
        }

      }




      // generate 50 bubbles for begin
      setTimeout(function(){
         if(window.innerWidth > 999 && window.innerHeight < 750){
          for (var i = 0; i < 20; i++) {
            generateBubble();
          }
        } else if(window.innerWidth > 999 && window.innerHeight < 850){
          for (var i = 0; i < 30; i++) {
            generateBubble();
          }
        } else if(window.innerWidth > 767){
          for (var i = 0; i < 70; i++) {
            generateBubble();
          }
        } else {
          for (var i = 0; i < 15; i++) {
            generateBubble();
          }
        }
      },1500)
      if($('#bubbles-canvas').data('bottle') == true){
        // setTimeout(generateBottle,1000)
        generateBottle();
      }
      setTimeout(function(){
        if($('#bubbles-canvas').data('bottle') == true){
          $('.s_header').removeClass('main-opacity-none');
          $('main').removeClass('main-opacity-none');
          $('.s_footer').removeClass('main-opacity-none');
          app.bottle = false;
        }
      },3000)


      //click on window and check click on bubble
      let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
      $(window).on(touchEvent, function(e){
        if(e.type == 'touchstart'){
          clickOnBubble(e.touches[0].clientX,e.touches[0].clientY);
        } else {
          clickOnBubble(e.clientX,e.clientY);
        }
      });


      // function which cheks if we click on bubble and init metod destroy
      function clickOnBubble(x,y){
        var array = app.stage.children;
        //kill = will be object we click
        var kill;
        array.forEach(function(item,i){
          // console.log(item._bounds);
          if((x > item._bounds.minX && x < item._bounds.maxX) && (y > item._bounds.minY && y < item._bounds.maxY)){
            kill = item;

            // kill.killBubble(true);
          }
        })
        // if we target = bubble kill it
        if(kill){
          //true = we kill it so +1 to our score
          kill.killBubble(true);
        }
      }
      //direction
      var dir = true;
      $(window).scroll(function(){
        if(document.querySelector('.js-communications') && document.querySelector('.js-performance')){
          if($('.js-communications').offset().top <= (window.innerHeight / 2 + window.scrollY) && dir ){
            var array = app.stage.children;
            array.forEach(function(item,i){
              let currentScale  = item.scale.x;
              let tl = new TimelineMax();
              tl.to(item.scale, 0.7, {x:0, y:0,onComplete:function(){
                item.texture = PIXI.Texture.fromImage('/wp-content/themes/Soda/assets/images/pink2.png');
              }});
              tl.to(item.scale, 0.7, {x:currentScale, y:currentScale});
            })
            dir = false;
          } else if($('.js-communications').offset().top > (window.innerHeight / 2 + window.scrollY) && !dir ){
            dir = true;
            var array = app.stage.children;
            array.forEach(function(item,i){
              var currentScale  = item.scale.x;
              var tl = new TimelineMax();
              tl.to(item.scale, 0.7, {x:0, y:0,onComplete:function(){
                item.texture = PIXI.Texture.fromImage('/wp-content/themes/Soda/assets/images/blue2.png');
              }});
              tl.to(item.scale, 0.7, {x:currentScale, y:currentScale});
            })
          }
        }
      })

    })
    //end pixi loader

  }
  // end bubbles






  //change type vacancy
  if(document.querySelector('.s_vacancy__experience')){
    $('.s_vacancy__experience p').click(function(){
      // console.log('pepp')
      //class active give us an animation
      $('.s_vacancy__experience p').removeClass('active');
      $('.s_vacancy__about p').removeClass('show');
      const data = $(this).data('prof');
      $('.s_vacancy__about p[data-prof='+data+']').addClass('show');
      $(this).addClass('active');
    })
  }


  //slider books
  if(document.querySelector('.js-books-slider')){
    $('.js-books-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1499,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    })
  }
  //arrows top 50% in middle of
  function booksArrows() {
    if (document.querySelector('.s_books_img')) {
      // console.log($('.s_about_slider_img').css('height'));
      var height = parseInt($('.s_books_img').css('height'));
      var arrowHeight = parseInt($('.s_books_slider .slick-arrow').outerHeight());
      height = height / 2 - arrowHeight / 2;
      $('.s_books_slider .slick-arrow').css('top', height + 'px');
    }
  }


  //circle anim
  if(document.querySelector('.js-circle')){
    var timer;
    var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'hover';
    if (touchEvent == 'hover'){
      $('.js-circle-item').hover(function(){
        animCircle(this);
      })
    }


    function animCircle(that){
      $('.js-circle-item').removeClass('active');
      $(that).addClass('active');
      var elements = $('.js-circle-item');
      //top move
      var circleTop = parseInt($('.js-circle').data('top'));
      //left move
      var circleLeft = parseInt($('.js-circle').data('left'));
      var width = 0,height = 0, size = 0;
      //detect width and height of rlements => detect width and height of circle
      for (var i = 0; i < elements.length; i++) {
        if($(elements[i]).outerHeight() > height){
          height = $(elements[i]).outerHeight();
        }
      }
      height = $(that).outerHeight();
      //size of circle
      size = height;
      //make some bigger that an element
      size += parseInt($('.js-circle').data('size'));

      var top = that.offsetTop - circleTop;
      var left = that.offsetLeft - circleLeft;

      if(size >= window.innerWidth){
        size = window.innerWidth + parseInt($('.js-circle').data('size-mob'));;
        left = that.offsetLeft - parseInt($('.js-circle').data('left-mob'));
        top = that.offsetTop - parseInt($('.js-circle').data('top-mob'));
      }

      var destX = left;
      var destY = top;
      $('.js-circle').css({
        top: destY,
        left: destX,
        width: size,
        height: size,
      });



      //end scroll for mobile

    }
    //scroll for mobile devices
    if ("ontouchstart" in document.documentElement) {
      //always show btns
      $('.s_services__button').css('opacity',1);
      //change position of bubble on scroll
      window.onscroll = function(){
        var elements = $('.js-circle-item');
        var max = 0;
        for (var i = 0; i < elements.length; i++) {
          if((window.innerHeight/2 + window.scrollY) > $(elements[i]).offset().top ){
            max = $(elements[i]);
          }
        }
        if(max != 0 ){
          animCircle(max[0])
        }

      }
    }
    var shake;
    animCircle(document.querySelector('.js-circle-item.active'))
    var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
    $(window).on(touchEvent, function(e){
      if(e.type == 'touchstart'){

        var el = document.querySelector('.js-circle');
        if( (e.touches[0].clientX < (el.x + el.width)) && (e.touches[0].clientX > el.x) && (e.touches[0].clientY < (el.y + el.height)) && (e.touches[0].clientY > el.y)){
          clearTimeout(shake);
          $('.js-circle').addClass('js-circle--smaller');
          shake = setTimeout(function(){
            $('.js-circle').removeClass('js-circle--smaller');
          },1000)
        }
      } else {
        var el = document.querySelector('.js-circle');
        if( (e.clientX < (el.x + el.width)) && (e.clientX > el.x) && (e.clientY < (el.y + el.height)) && (e.clientY > el.y)){
          clearTimeout(shake);
          $('.js-circle').addClass('js-circle--smaller');
          shake = setTimeout(function(){
            $('.js-circle').removeClass('js-circle--smaller');
          },1000)
        }
      }
    });
  }


  //duck logic
  function duck(){
    if(document.querySelector('.duck')){
      var width = $('.duck').outerWidth();
      $('.duck').css('right',-width);
    }
  }


   // push only name of section in ID
   function scrollNav() {
    $('.s_case__right a').click(function(){
            $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - $('.s_header').outerHeight()
      }, 600);
      return false;
    });
  }
  scrollNav();

  //clip rect
  if(document.querySelector('.custom-btn')){
    $('.custom-btn').click(function(){
      $(this).find('.second').css('clip','rect(0,'+ $(this).outerWidth() +'px, 40px, 0px)');
      var that= this;
      $(this).find('.second').css('clip','rect(0,'+ $(this).outerWidth()/2 +'px, 40px, '+ $(this).outerWidth()/2 +'px)');
      $(this).find('.second').css('pointer-events','none');
      setTimeout(function(){
        $(that).find('.second').removeAttr('style');
      },1000)
    })
  }

 //header smaller
 if(document.querySelector('.s_header_logo')){
   $(window).scroll(function(){
     if($(window).scrollTop() > 50){
       $('.s_header_logo').addClass('s_header_logo--smaller')
     } else {
       $('.s_header_logo').removeClass('s_header_logo--smaller')
     }
   })
 }

  // open popup_vacancy
  if (document.querySelector('.js-popup_vacancy')) {

    $('.js-open__vacancy').click(function () {
        let vacancy = $('p.active').text().trim();
        $('.js-popup_vacancy-form span').text(vacancy);
        $('body').addClass('body-overflow');
        $('.js-popup_vacancy').fadeIn();
    })

  }


  // resume form popup
  if (document.querySelector('.js-popup_vacancy-form')) {
  let form = $('.js-popup_vacancy-form');
  form.validate({
      rules: rules,
      highlight: function (element, errorClass) {
        $(element).addClass('input--error');
      },
      unhighlight: function (element, errorClass) {
        $(element).removeClass('input--error');
      },
      messages: messages,
      submitHandler: function submitHandler(form) {

          // Get form
          var form = $('.js-popup_vacancy-form')[0];
          // Create an FormData object
          var data = new FormData(form);
          data.append('type', 'Резюме');
          data.append('file', $('#contacts-file').prop('files')[0]);
          $.ajax({
              type: "POST",
              enctype: 'multipart/form-data',
              url: "/wp-admin/admin-ajax.php?action=callbackplusfile",
              data: data,
              processData: false,
              contentType: false,
              cache: false,
              success: function success(data) {
                  // console.log("SUCCESS : ", data);
                  var validator = $(".js-popup_vacancy-form").validate();
                  validator.resetForm();
                  document.getElementById("js-popup_vacancy-form").reset();
                  popupthanks();
              },
              error: function error(e) {
                  // console.log("ERROR : ", e);
              }
          });

      }
  })
}


// js-close-сart popup
if(document.querySelector('.js-popup__close-cart')){
  $('.js-popup__close-cart').click(function(){
    preloaderOut();
    $('.s_popup').fadeOut();
    $('body').removeClass('body-overflow');
    $('.s_cart__mobile').show();
    $('.mobile-arrow').show();
    $('.mobile-arrow').removeClass('up');
    let count = $('.s_cart__item').length;
    $('.s_cart__mobile-btn span').text(count);
    if(count >= 0){
      localStorage.setItem('close-click', 'show');
      localStorage.setItem('mobile', count );
    }else{
      $('.s_cart__mobile').hide();
      $('.mobile-arrow').hide();
    }
    footerCart();

    // dont forget to clear forms
  })
}



function footerCart(){
  if( localStorage.getItem("mobile") !== null ){
    if(localStorage.getItem('close-click') == 'show'){
      $('.s_cart__mobile').show();
      $('.mobile-arrow').show();
    } else if(localStorage.getItem('close-click') == 'no-show'){
      $('.mobile-arrow').show();
      $('.mobile-arrow').addClass('up');
    }
    let count = localStorage.getItem("mobile");
    $('.s_cart__mobile-btn span').text(count);
    $('.s_cart__add span').text(count);
    if (location.pathname == '/cart/' ){
      $('.s_cart__mobile').hide();
      $('.mobile-arrow').hide();
    }

    if (localStorage.getItem("mobile") == 0 ){
      $('.s_cart__mobile').hide();
      $('.mobile-arrow').hide();
    }
  }
}
footerCart();


 // open question popup
 if (document.querySelector('.js-popup_question')) {

  $('.js-open__question').click(function () {
      $('body').addClass('body-overflow');
      $('.js-popup_question').fadeIn();
      $('.js-popup_cart').fadeOut();
  })

}

// open billing popup
if (document.querySelector('.js-popup_billing')) {

  $('.js-open__billing').click(function () {
      $('body').addClass('body-overflow');
      $('.js-popup_cart').fadeOut();
      $('.js-popup_billing').fadeIn();

      let item = $('.s_cart__item .s_cart__text a');
      $('.s_popup_billing--text').text('');
      for(let i=0 ; i < item.length; i++){
        let text = $(item[i]).text();
        $('.s_popup_billing--text').append( "<p>" + text + "</p>");
      }
      let price = $('.s_cart__wrap .s_cart__btn span').text();
      $('.s_popup_billing--right .s_cart__btn span').text(price);
  })
}



 // //btn more
  if(document.querySelector('.js-btn-more')){
    var moreBtns = $('.js-btn-more');
    // console.log(moreBtns.length);
    for (var k = 0; k < moreBtns.length; k++) {

      morebtn = moreBtns[k];
      var str = $(morebtn).data('item');
      var show = $(morebtn).data('show');
      if($(morebtn).data('item') == '.s_partners_item' && $(str).length > 3 && window.innerWidth > 999 && window.innerWidth < 1499){
        show = 3;
      }
      // console.log(show);
      if ($(str).length > show ) {
        let news = $(str);
        let killMargin = 0;
        for (var i = 0; i < news.length; i++) {
          if( i > (show - 1) ){
            $(news[i]).hide();
            if(killMargin == 0 ){
              killMargin = news[i-1];
            }
          }
        }
        $(killMargin).addClass('js-item-last');
        $(morebtn).click(function(e){
          e.preventDefault();
          $('.js-item-last').removeClass('js-item-last');
          var str = $(this).data('item');
          let news = $(str);
          let item = 0;
          let max = show;
          let killMargin = 0;
          for (var j = 0; j < news.length; j++) {
            if($(news[j]).css('display') == 'none' && item < max){
              $(news[j]).show();
              // $(news[i]).removeClass('js-item-last');
              item ++;
              killMargin = news[j];
            }
          }
          $(killMargin).addClass('js-item-last');
          if($(news[news.length - 1]).css('display') != 'none'){
            $(this).hide();
            $(this).addClass('hide-btn');
            // $('.s_blog_btn').addClass('s_blog_btn--hide');
          }
          $('.js-grid').masonry({
            itemSelector: '.js-grid-item',
            horizontalOrder: true
          });
        })
      } else {
        $(morebtn).hide();
        $(morebtn).addClass('hide-btn');
        // $(this).addClass('s_blog_btn--hide');
      }
    }
  }



  // open cart popup
  if (document.querySelector('.js-open__cart')) {
    $('.js-open__cart').on('click', function() {
        var info = $(this).data('info');
        $('.preloader').fadeIn();
        $.post('/wp-admin/admin-ajax.php?action=getID', {
            id: info,
        }).done(function (data) {
            $('.s_popup_cart .s_cart__cards').html('');
            $('.s_popup_cart .s_cart__cards').append(data['items']);
            $('.s_popup_cart .s_services_flex').html('');
            $('.s_popup_cart .s_services_flex').append(data['cards']);
            let count2 = $('.s_cart__item').length;
            $('.s_cart__add span').text( count2);
            $('.js-popup_cart').fadeIn();
            $('body').addClass('body-overflow');
            removeCart();
        }).always(function () {
          preloaderOut();
        });
    })
  }


  // validation billing
  if (document.querySelector('.js-popup_billing-form')) {
    let form = $('.js-popup_billing-form');
    form.validate({
      rules: rules,
      highlight: function (element, errorClass) {
        $(element).addClass('input--error');
      },
      unhighlight: function (element, errorClass) {
        $(element).removeClass('input--error');
      },
      messages: messages,
      submitHandler: function submitHandler(form) {
        $('.preloader').fadeIn();
        $('body').addClass('body-overflow');
        let services = $('.s_popup_billing--text').html();
        let price = $('.s_cart__btn span').text();
        $.post('/wp-admin/admin-ajax.php?action=checkout', {
          type: 'ОТПРАВИТЬ ПРОСЧЕТ',
          name: "<p> <b> Имя: </b>" + $(form).find('input[name="name"]').val() + "</p>",
          email: "<p> <b> E-mail: </b>" + $(form).find('input[name="email"]').val() + "</p>",
          phone: "<p> <b> Телефон: </b> " + $(form).find('input[name="phone"]').val() + "</p>",
          services: "<p><b> Послуги, що додані до прорахунку: </b>" + services + "</p>",
          price: "<p> <b> Всего: </b>" + price + "</p>",
        }).done(function (data) {
          $('.s_cart__mobile').hide();
          $('.mobile-arrow').hide();
          localStorage.setItem('close-click',true);
          popupthanks();
          localStorage.removeItem('mobile');
          var validator = $('.js-popup_billing-form').validate();
          validator.resetForm();
          document.querySelector('.js-popup_billing-form').reset();
          setTimeout(function(){
            location.href="/services";
          },1000)
        }).always(function () {
          // preloader
          preloaderOut();
          $('body').removeClass('body-overflow');
        });
      }
    })
  }



  // delete one services
  function removeCart(){
    if (document.querySelector('.s_cart__subtitle')) {
      $('.s_cart__subtitle .remove').on('click', function() {
          var deleteId = $(this).data('id');
          var that = this;
          var count2 = $('.s_cart__item').length;
          localStorage.setItem('mobile', count2 );
          $('.preloader').fadeIn();
          $.post('/wp-admin/admin-ajax.php?action=delete', {
              id: deleteId,
          }).done(function (data) {
              $(that).parent().parent().remove();
              let count2 = $('.s_cart__item').length;
              $('.s_cart__add span').text(count2);
              localStorage.setItem('mobile', count2 );
          }).always(function () {
            preloaderOut();
          });
      })
    }
  }
  removeCart();


  //calendar
  if(document.querySelector('.js-calendar')){
    $('.js-calendar').datepicker({
      language: {
          days: ['Неділя','Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота'],
          daysShort: ['Нед','Пон','Вів','Сре','Чет','Пят','Суб'],
          daysMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
          months: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
          monthsShort: ['Січ','Лют','Бер','Кві','Тра','Чер','Лип','Сер','Вер','Жов','Лис','Гру'],
          today: 'Сьогодні',
          clear: 'Очистити',
          dateFormat: 'yyyy.mm.dd',
          timeFormat: 'hh:ii',
          firstDay: 1
      },
      toggleSelected: false
    });
  }

  if(document.querySelector('.js-open-calendar')){
    // clear lang
    var allow = true;
    $(document).mouseup(function (e) {
      var lang = $('.js-submit-calendar');
      if (!lang.is(e.target) && lang.has(e.target).length === 0) {
          $('.js-calendar').val('');
      }
    });
    $('.js-open-calendar').click(function(e){
      e.preventDefault();
      var disabledDays = $('.js-open-calendar').data('dates');
      $('.js-calendar').datepicker({
        language: {
            days: ['Неділя','Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота'],
            daysShort: ['Нед','Пон','Вів','Сре','Чет','Пят','Суб'],
            daysMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
            months: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
            monthsShort: ['Січ','Лют','Бер','Кві','Тра','Чер','Лип','Сер','Вер','Жов','Лис','Гру'],
            today: 'Сьогодні',
            clear: 'Очистити',
            dateFormat: 'yyyy.mm.dd',
            timeFormat: 'hh:ii',
            firstDay: 1
        },
        multipleDates: true,
        toggleSelected: false,
        onRenderCell: function (date, cellType) {
          if (cellType == 'day') {
            var selected = false;
            var to = false;
            var from = false;
            var one = false;
            if(disabledDays.length > 1){
              if(date.getTime() <= new Date (moment(disabledDays[1], "YYYYMMDD")).getTime() && allow && date.getTime() >= new Date (moment(disabledDays[0], "YYYYMMDD")).getTime()){
                selected = true;
                if(date.getTime() == new Date (moment(disabledDays[1], "YYYYMMDD")).getTime()){
                  to = true;
                }
                if(date.getTime() == new Date (moment(disabledDays[0], "YYYYMMDD")).getTime()){
                  from = true;
                }
              }
            } else{
              if(date.getTime() == new Date (moment(disabledDays[0], "YYYYMMDD")).getTime() && allow){
                selected = true;
                one = true;
              }
            }
            if(selected){
              if(to){
                return{
                  classes: '-range-to-'
                }
              }
              if(from){
                return{
                  classes: '-range-from-'
                }
              }
              if(one){
                return {
                  classes: '-selected-',
                }
              }
              return {
                classes: '-in-range-',
              }
            } else {
              return {
                classes: '',
              }
            }
          }
        },
        onSelect: function(formattedDate, date, inst){
          allow = false;
        }
      }).data('datepicker').show();
      $('.js-submit-calendar').remove();
      $('.datepicker--content').append(`
        <button class="site-button--two js-submit-calendar" data-text='застосувати'>
          `+ $('.js-open-calendar').data('text') +`
          <span></span>
        </button>
        `);
      $('.js-submit-calendar').click(function(e){
        e.preventDefault();
        $('#filter-form').submit();
      })
    })
  }

  // open popup_vacancy
  if (document.querySelector('.js-popup_vacancy')) {
    $("input[type=file]").on('change',function(){
      let name = this.files[0].name;
      $('.file-text').remove();
      $("<p class='file-text'> <b> Добавлено файл: </b>"+name+"</p>").insertAfter(".file")
    });
  }


  if (document.querySelector('.mobile-arrow')) {
    $('.mobile-arrow').on('click', function() {
      // $('.s_cart__mobile').toggleClass('hide');
      $('.s_cart__mobile').toggle();
      $('.mobile-arrow').toggleClass('up');
      if(localStorage.getItem('close-click') != 'no-show'){
        localStorage.setItem('close-click','no-show');
      } else {
        localStorage.setItem('close-click','show');
      }
    }
    )}




});
