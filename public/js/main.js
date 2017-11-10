$(document).ready(function(){
    resizeDiv();
    AOS.init();
    var options = { strings: ["Hi,^1000 I'm Eric"], typeSpeed: 80, startDelay: 2000 };
    var typed = new Typed(".heading", options);
});

$(window).on('load', function () {
    AOS.refresh();
});

$(window).scroll(function() {
    let vph = $(window).height();

    if ($(this).scrollTop() > 80 && $(this).scrollTop() < vph) {
        $('.navigation').fadeOut(200);
    } else if ($(this).scrollTop()>vph) {
        lowerNavCSS();
        $('.navigation').fadeIn(200);
    } else {
        topNavCSS();
        $('.navigation').fadeIn(200);
    }
});

function topNavCSS() {
    $('.navigation').css("background", "");
    $(".navigation").find("a").css("color", "#252525");
    $('.navigation').find("li.resume-link").css("border", "2px solid #252525");
}

function lowerNavCSS() {
    $('.navigation').css("background", "black");
    $(".navigation").find("a").css("color", "#DADADA");
    $('.navigation').find("li.resume-link").css("border", "2px solid #DADADA");
}

function resizeDiv() {
    let vph = $(window).height();
    //let navh = $(".navigation").height();
    $(".banner").css({"height": vph + "px"});
}
