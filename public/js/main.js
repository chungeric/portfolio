$(document).ready(function(){
    resizeDiv();
    let vph = $(window).height();
    let vpw = $(window).width();
    if ($(window).scrollTop()>vph-1) {
        lowerNavCSS(vpw);
    } else if ($(window).scrollTop() <= 80) {
        topNavCSS(vpw);
    }
    // Initalizes Animate On Scroll library - https://michalsnik.github.io/aos/
    AOS.init();
    // Options for typed.js library - http://www.mattboldt.com/demos/typed-js/
    var options = { strings: ["Hi,^1000 I'm Eric"], typeSpeed: 80, startDelay: 2000 };
    var typed = new Typed(".heading", options);
});

$(window).on('load', function () {
    AOS.refresh();
});

window.onresize = function(event) {
    resizeDiv();
    // checkSection();
    let vph = $(window).height();
    let vpw = $(window).width();
    if ($(window).scrollTop()>vph) {
        lowerNavCSS(vpw);
    } else if ($(window).scrollTop() <= 80) {
        topNavCSS(vpw);
    }
}

$(window).scroll(function() {
    checkSection(function(checked) {
        if (checked) {
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
        }
    });

});

function checkSection(callback) {
    let wintop = $(window).scrollTop();
    if (wintop >= 0 && wintop < $("#about").offset().top) {
        $(".navigation a").removeClass("active");
        $("a#home-link").addClass("active");
    } else if ($(window).scrollTop() >= $("#about").offset().top && $(window).scrollTop() < $("#portfolio").offset().top) {
        $(".navigation a").removeClass("active");
        $("a#about-link").addClass("active");
    } else if ($(window).scrollTop() >= $("#portfolio").offset().top && $(window).scrollTop() < $("#contact").offset().top) {
        $(".navigation a").removeClass("active");
        $("a#portfolio-link").addClass("active");
    } else if ($(window).scrollTop() >= $("#contact").offset().top) {
        $(".navigation a").removeClass("active");
        $("a#contact-link").addClass("active");
    }
    return callback(true);
}

function topNavCSS(vpw) {
    if (vpw > 800) {
        $('.navigation').find("li.resume-link").css("border", "2px solid #252525");
        $('.navigation').find("li.resume-link").css("background", "");
        $('.navigation').find("li").css("background", "");
        $('.active').css("border-bottom", "2px solid #252525");
        $('.navigation a').not(".active").css("border-bottom", "none");
        $(".navigation").find("ul").css("display", "block");
    } else {
        $('.navigation').find("li.resume-link").css("border", "none");
        $('.navigation').find("li.resume-link").css("background", "rgba(255,255,255,1)");
        $('.navigation').find("li").css("background", "rgba(255,255,255,1)");
        $('.active').css("border-bottom", "none");
        $(".navigation").find("ul").css("display", "none");
        $("#cross").hide();
        $("#hamburger").show();
    }
    $('.navigation').css("background", "");
    $(".navigation").find("a").css("color", "#252525");
    $('#hamburger').css("color", "#252525");
    $('#cross').css("color", "#252525");
}

function lowerNavCSS(vpw) {
    if (vpw > 800) {
        $('.navigation').find("li.resume-link").css("border", "2px solid #DADADA");
        $('.navigation').find("li.resume-link").css("background", "#000000");
        $('.navigation').find("li").css("background", "#000000");
        $('.active').css("border-bottom", "2px solid #DADADA");
        $('.navigation a').not(".active").css("border-bottom", "none");
        $(".navigation").find("ul").css("display", "block");
    } else {
        $('.navigation').find("li.resume-link").css("border", "none");
        $('.navigation').find("li.resume-link").css("background", "#000000");
        $('.navigation').find("li").css("background", "#000000");
        $('.active').css("border-bottom", "none");
        $(".navigation").find("ul").css("display", "none");
        $("#cross").hide();
        $("#hamburger").show();
    }
    $('.navigation').css("background", "black");
    $(".navigation").find("a").css("color", "#DADADA");
    $('#hamburger').css("color", "#DADADA");
    $('#cross').css("color", "#DADADA");
}

function resizeDiv() {
    let vph = $(window).height();
    $(".banner").css({"height": vph + "px"});
}

/*
 * http://jsfiddle.net/9SDLw/
 * Smooth scrolling
*/
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});



/*
 * Collapsed menu icon click events
*/

function crossClick() {
    $(".navigation").find("ul").css("display", "none");
    $("#cross").hide();
    $("#hamburger").off("click");
    $("#hamburger").slideDown(300, "swing", function() {
        $("#hamburger").on("click", hamburgerClick);
    });
}

function hamburgerClick() {
    $(".navigation").find("ul").css("display", "block");
    $("#hamburger").hide();
    $("#cross").off("click");
    $("#cross").slideDown(300, "swing", function() {
        $("#cross").on("click", crossClick);
    });
}

$("#hamburger").on("click", hamburgerClick);

$("#cross").on("click", crossClick);
