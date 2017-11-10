$(document).ready(function(){
    resizeDiv();
    topNavCSS($(window).width());
    AOS.init();
    var options = { strings: ["Hi,^1000 I'm Eric"], typeSpeed: 80, startDelay: 2000 };
    var typed = new Typed(".heading", options);
});

$(window).on('load', function () {
    AOS.refresh();
});

window.onresize = function(event) {
    resizeDiv();
    let vph = $(window).height();
    let vpw = $(window).width();
    if ($(window).scrollTop()>vph-1) {
        lowerNavCSS(vpw);
    } else if ($(window).scrollTop() <= 80) {
        topNavCSS(vpw);
    }
}

$(window).scroll(function() {
    let vph = $(window).height();
    let vpw = $(window).width();
    if ($(this).scrollTop() > 80 && $(this).scrollTop() < vph) {
        $('.navigation').fadeOut(200);
    } else if ($(this).scrollTop()>vph-1) {
        lowerNavCSS(vpw);
        $('.navigation').fadeIn(200);

    } else if ($(this).scrollTop() <= 80) {
        topNavCSS(vpw);
        $('.navigation').fadeIn(200);
    }
});

function topNavCSS(vpw) {
    if (vpw > 800) {
        $('.navigation').find("li.resume-link").css("border", "2px solid #252525");
        $('.navigation').find("li.resume-link").css("background", "");
        $('.navigation').find("li").css("background", "");
        $('.active').css("border-bottom", "2px solid #252525");
        $(".navigation").find("ul").css("display", "block");
    } else {
        $('.navigation').find("li.resume-link").css("border", "none");
        $('.navigation').find("li.resume-link").css("background", "rgba(255,255,255,1)");
        $('.navigation').find("li").css("background", "rgba(255,255,255,1)");
        $('.active').css("border-bottom", "none");
        $(".navigation").find("ul").css("display", "none");
    }
    $('.navigation').css("background", "");
    $(".navigation").find("a").css("color", "#252525");
    $('#hamburger').css("color", "#252525");
}

function lowerNavCSS(vpw) {
    if (vpw > 800) {
        $('.navigation').find("li.resume-link").css("border", "2px solid #DADADA");
        $('.navigation').find("li.resume-link").css("background", "#000000");
        $('.navigation').find("li").css("background", "#000000");
        $('.active').css("border-bottom", "2px solid #DADADA");
        $(".navigation").find("ul").css("display", "block");
    } else {
        $('.navigation').find("li.resume-link").css("border", "none");
        $('.navigation').find("li.resume-link").css("background", "#000000");
        $('.navigation').find("li").css("background", "#000000");
        $('.active').css("border-bottom", "none");
        $(".navigation").find("ul").css("display", "none");
    }
    $('.navigation').css("background", "black");
    $(".navigation").find("a").css("color", "#DADADA");
    $('#hamburger').css("color", "#DADADA");
}

function resizeDiv() {
    let vph = $(window).height();
    $(".banner").css({"height": vph + "px"});
}

// http://jsfiddle.net/9SDLw/
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$("#hamburger").click(function() {
    let uolist = $(".navigation").find("ul");
    if (uolist.css("display") === "none") {
        uolist.css("display", "block");
    } else {
        uolist.css("display", "none");
    }
});
