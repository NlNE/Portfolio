function showSlideMenu() {
    var btnSlideOpen = document.getElementById('btn-slide-open');
    var slideMenu = document.getElementById('slide-menu-wrap');
    var slideWrap = document.querySelector('div.wrap');

    btnSlideOpen.style['display'] = "none";

    slideMenu.style['transform'] = "translate(0px, 0px)";
    slideMenu.style['msTransform'] = "translate(0px, 0px)";
    slideMenu.style['mozTransform'] = "translate(0px, 0px)";
    slideMenu.style['webkitTransform'] = "translate(0px, 0px)";
    slideMenu.style['oTransform'] = "translate(0px, 0px)";
    slideWrap.classList.add('menu-active');
    if (window.innerWidth < 768) {
        document.querySelector('body').style['overflow'] = "hidden";
    };
}

function closeSlideMenu() {
    var btnSlideOpen = document.getElementById('btn-slide-open');
    var slideMenu = document.getElementById('slide-menu-wrap');
    var slideWrap = document.querySelector('div.wrap');

    btnSlideOpen.style['display'] = "block";
    slideMenu.removeAttribute("style");
    slideWrap.classList.remove('menu-active');
    if (window.innerWidth < 768) {
        setTimeout(function () {
            document.querySelector('body').removeAttribute("style")
        }, 600);
    };
}

$(function () {
    var slideMenu = $('#btn-slide-open'); //색상이 변할 부분
    var slideMenuIcon = $('.css-slide-open .line'); //색상 변경될 아이콘 라인

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 60) { // 스크롤이 page보다 밑에 내려가면
            slideMenu.addClass('btn-slide-open-scrollDown'); //클래스 추가
            slideMenuIcon.addClass('line-scrollDown');

        } else { // 스크롤 올릴 때
            slideMenu.removeClass('btn-slide-open-scrollDown'); //클래스 제거

            slideMenuIcon.removeClass('line-scrollDown');
        }
    });
});
