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
    document.querySelector('body').style['overflow'] = "hidden";
}

function closeSlideMenu() {
    var btnSlideOpen = document.getElementById('btn-slide-open');
    var slideMenu = document.getElementById('slide-menu-wrap');
    var slideWrap = document.querySelector('div.wrap');

    btnSlideOpen.style['display'] = "block";
    slideMenu.removeAttribute("style");
    slideWrap.classList.remove('menu-active');
    setTimeout(function(){        document.querySelector('body').removeAttribute("style")},1000);
}
