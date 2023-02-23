$(function () {
  let header = $("#header");
  let introH = $("#intro").innerHeight();
  let scrollOffset = $(window).scrollTop();

  //header
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // smooth scroll
  $("[data-scroll]").on("click", function (e) {
    e.preventDefault();

    let $this = $(this);
    let elementId = $this.data("scroll");
    let elementOffset = $(elementId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: elementOffset,
      },
      500
    );
  });

  // nav-toggle
  $("#nav_toggle").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  // accordion
  $("[data-collapse]").on("click", function (e) {
    e.preventDefault();

    let $this = $(this);
    let elementId = $this.data("collapse");
    $this.toggleClass("active");
  });

  // slider
  $("[data-slider]").slick({
    infinity: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
