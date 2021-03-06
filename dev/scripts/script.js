AOS.init({
    disable: window.innerWidth < 768
});

console.log("Hi, I'm Emma! Connect with me on social media or email :) emma.setohughes@gmail.com ");

$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 2000);
    }
});

$(document).ready(function() {
  $(".hamburger").on("click", function() {
    $(".mainNav").removeClass("closed");
    $(".mainNav").addClass("opened");
  });

  $(".close").on("click", function() {
    $(".mainNav").removeClass("opened");
    $(".mainNav").addClass("closed");
  });

  $(".NavLinks a").on("click", function() {
    $(".mainNav").removeClass("opened");
    $(".mainNav").addClass("closed");
  });

});