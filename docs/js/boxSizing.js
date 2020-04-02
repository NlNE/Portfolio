$(document).ready(function () {    
    var scrollBoxWidth = 0;
    var contentWidth = $('.content');

    contentWidth.each(function () {
        scrollBoxWidth = scrollBoxWidth + $(this).width();
    })

    $('.content-scroll-box').css('width', scrollBoxWidth);

    if (window.innerWidth <= 768) {
        var contentImgHeight = $('.content-image').outerHeight(true);

        var contentWrapHeight = $('.content-wrap').height();

        $('.content-wrap').css('height', contentWrapHeight + contentImgHeight);
    };
});
