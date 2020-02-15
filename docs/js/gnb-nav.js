var burger = $('.menu-trigger');
var sidebar = $('nav.sidebar');
var sidebarMenu = $('.sidebar ul li');

burger.each(function (index) {
    var $this = $(this);

    $this.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        sidebar.toggleClass('active');
        $('html, body').css('overflow', 'hidden');
    })
});

function fnMove(seq) {
    var offset = $("#sec" + seq).offset();
    $('html,body').animate({
        scrollTop: offset.top
    }, 400);

    burger.removeClass('active');
    sidebar.removeClass('active');
    $('html, body').css('overflow', 'auto');
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.gnb-mobile').outerHeight();
$(window).scroll(function (event) {
    didScroll = true;
});
setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop(); // Make sure they scroll more than delta 
    if (Math.abs(lastScrollTop - st) <= delta) return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.gnb-mobile').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.gnb-mobile').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}
