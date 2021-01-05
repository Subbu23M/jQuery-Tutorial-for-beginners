// $(document).ready(function () {
// $(".owl-carousel").owlCarousel();
// });

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots:true,
    responsiveClass: true,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,

    responsive: {

        0: {
        items: 1,
        nav: true,
        },

        600: {
        items: 3,
        nav: false,
        },

        1000: {
        items: 4,
        nav: true,
        loop: true,
        },
    },

});

// For Glider.js
new Glider(document.querySelector('.glider'), {

    slidesToShow:1,
    slidesToScroll:1.5,
    draggable:true,
    arrow:{
        prev:'.glider-prev',
        next:'glider-next'
    }
    
});