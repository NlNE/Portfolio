$.fn.moveDown = function () {
    var el = $(this)
    index = $(settings.sectionContainer + ".active").data("index");
    current = $(settings.sectionContainer + "[data-index='" + index + "']");
    next = $(settings.sectionContainer + "[data-index='" + (index + 1) + "']");
    if (next.length < 1) {
        if (settings.loop == true) {
            pos = 0;
            next = $(settings.sectionContainer + "[data-index='1']");
        } else {
            return
        }

    } else {
        pos = (index * 100) * -1;
    }
    if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
    current.removeClass("active")
    next.addClass("active");
    if (settings.pagination == true) {
        $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
    }

    $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
    $("body").addClass("viewing-page-" + next.data("index"))

    if (history.replaceState && settings.updateURL == true) {
        var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index + 1);
        history.pushState({}, document.title, href);
    }
    el.transformPage(settings, pos, next.data("index"));
}

$.fn.moveUp = function () {
    var el = $(this)
    index = $(settings.sectionContainer + ".active").data("index");
    current = $(settings.sectionContainer + "[data-index='" + index + "']");
    next = $(settings.sectionContainer + "[data-index='" + (index - 1) + "']");

    if (next.length < 1) {
        if (settings.loop == true) {
            pos = ((total - 1) * 100) * -1;
            next = $(settings.sectionContainer + "[data-index='" + total + "']");
        } else {
            return
        }
    } else {
        pos = ((next.data("index") - 1) * 100) * -1;
    }
    if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
    current.removeClass("active")
    next.addClass("active")

    if (settings.pagination == true) {
        $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
    }
    $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
    $("body").addClass("viewing-page-" + next.data("index"))

    if (history.replaceState && settings.updateURL == true) {
        var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index - 1);
        history.pushState({}, document.title, href);
    }
    el.transformPage(settings, pos, next.data("index"));
}
