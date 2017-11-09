$(document).ready(function(){
    resizeDiv();
    AOS.init();
    var options = { strings: ["Hi,^1000 I'm Eric"], typeSpeed: 80, startDelay: 2000 };
    var typed = new Typed(".heading", options);
});



$(window).on('load', function () {
    AOS.refresh();
});

function resizeDiv() {
    let vph = $(window).height();
    let navh = $(".navigation").height();
    $(".banner").css({"height": vph + "px"});
}
