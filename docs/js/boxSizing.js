$(document).ready(function(){

var scrollBoxWidth = 0;
var contentWidth = $('.content')   

contentWidth.each(function(){
scrollBoxWidth = scrollBoxWidth + $(this).width();
})

$('.content-scroll-box').css('width', scrollBoxWidth)

});