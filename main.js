$(function () {

    $('.reviews__slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1, 
                dots: true
              }
            }
          ]
    })
        
})