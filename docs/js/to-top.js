document.getElementById("to-top").addEventListener('click', function () {
    //alert("위로 버튼을 클릭했습니다.");
    var body = document.getElementsByTagName("body")[0];
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: body.offsetTop
    });
});

//document.getElementById("downBtn").addEventListener('click', function () {
//    //alert("아래로 버튼을 클릭했습니다.");
//    var body = document.getElementsByTagName("body")[0];
//    window.scroll({
//        behavior: 'smooth',
//        left: 0,
//        top: body.offsetHeight
//    });
//});
