

$('ul.works__list').on('click', 'li:not(.works__list-item_active)', function () {
    $(this)
        .addClass('works__list-item_active').siblings().removeClass('works__list-item_active')
        .closest('div.works__tabs').find('div.works__content').removeClass('works__content_active').eq($(this).index()).addClass('works__content_active');
});

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
