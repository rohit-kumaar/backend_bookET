$(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    margin: 10,
    nav: true,
  });
  $(".owl-prev").html('<span class="icon-slider-left-arrow"></span>');
  $(".owl-next").html('<span class="icon-slider-right-arrow"></span>');
});
