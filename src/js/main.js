let owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout: 6000,
    autoplaySpeed: 2000,
    dots: false
});

$('.portfolio__arrow_next').click(function () {
    owl.trigger('next.owl.carousel');
});

$('.portfolio__arrow_prev').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
});
