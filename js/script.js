$(".burger").click(function () {
  //   console.log("work");
  $(this).toggleClass("activeBurger");
  $(".headerNav").toggleClass("showBurgerMenu");
});

$(".headerNav, .buttonClose").click(function (event) {
  if (event.target == event.currentTarget) {
    $(".headerNav").removeClass("showBurgerMenu");
  }
});

$("#sliderHome").slick({
  dots: true,
  slidesToShow: 1,
  arrow: false,
  adaptiveHeight: true,
});
