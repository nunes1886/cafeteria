$(document).ready(function(){
    $('.carousel').slick({
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
  });
  