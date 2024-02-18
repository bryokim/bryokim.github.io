(function () {
  const typed = document.querySelector(".typed");
  if (typed) {
    let typed_strings = ['print("Hello")', 'printf("Hola")'];
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      cursorChar: "_",
    });
  }
})();

$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 250) {
      $("HEADER#header").css("background", "black");
    } else {
      $("HEADER#header").css("background", "transparent");
    }
  });
});
