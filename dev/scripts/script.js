AOS.init({
    disable: window.innerWidth < 768
});

console.log("Hi, I'm Emma! Connect with me on social media or email :) ");

$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 3000);
    }
});