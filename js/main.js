$(document).ready(function () {
    new WOW().init();
    if ($(".slide-item").length > 0) {
        slideArrange();
    }

    $('.has-submenu > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent('.has-submenu').find('.submenu').slideToggle(300)
    })

    document.addEventListener('click', ({
        target
    }) => {
        if (target.closest('.has-submenu') != null) {
        } else {
            $('.submenu').slideUp(300)
        }
    })

    // PRELOADER
    (function ($) {
        $(window).on('load', function () {
            $("body").addClass("page-loaded");
        });
    })(jQuery)
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
if ($('#inputGuest').length > 0) {
    $('#inputGuest').click(function (e) {
        $('.occupancy-select').css('display', 'block');
        $('.occupancy-select').css('opacity', '1');
    });

    $('#addroom').click(function (e) {
        e.preventDefault();
        //console.log($('.room').length);
        var index = $('.room').length + 1;
        var html = "<li class='room'>";
        html += "<span class='name'>Room " + index + "</span>";
        html += "<div class='age-selector'><span class='title'>Adult </span>";
        html += "<select name='' class='selector' id='adult-room-" + index + "'>";
        html += "<option selected='' value='1'>1</option>";
        html += "<option value='2'>2</option>";
        html += "<option value='3'>3</option>";
        html += "<option value='4'>4</option>";
        html += "</select>";
        html += "</div>";
        html += "<div class='age-selector'><span class='title'>Children <br><span class='subtitle'>≤ 18 years old</span></span>";

        html += "<select class='selector' name='' id='children-room-" + index + "'>";
        html += "<option selected='' value='1'>1</option>";
        html += "<option value='2'>2</option>";
        html += "<option value='3'>3</option>";
        html += "<option value='4'>4</option>";
        html += "</select>";
        html += "</div>";
        html += "</li>";
        var list = document.getElementById('list-room');
        $('#list-room').append(html);
    });
    $('#cancel-button').click(function (e) {
        e.preventDefault();
        $('.occupancy-select').css('display', 'none');
        $('.occupancy-select').css('opacity', '0');
    });
    $('#apply-room').click(function (e) {
        e.preventDefault();
        let rooms = $('.room').length;
        let i = 0;
        let adults = 0;
        let childrens = 0;
        console.log(123);
        for (i; i < rooms; i++) {
            var current = i + 1;
            adults += parseInt($("#adult-room-" + current).val());
            childrens += parseInt($("#children-room-" + current).val());
        };
        var string = rooms + ' Rooms, ' + adults + ' Adults, ' + childrens + ' Childrens';
        $('#inputGuest').val(string);
    });
}
if ($('input[name="dates"]').length > 0) {
    $('input[name="dates"]').daterangepicker();
}
// PAGE TRANSITION
$('.hamburger-navigation li a').on('click', function (e) {
    $('.transition-overlay').toggleClass("show-me");
});

$('.hamburger-navigation li a').click(function (e) {
    e.preventDefault();
    var goTo = this.getAttribute("href");


    setTimeout(function () {
        window.location = goTo;
    }, 1000);
});
//SLIDER
var slider = document.getElementById('#slider');
var slide_length = $(".slide-item").length;
$('.total').html(slide_length);

function slideArrange() {
    $(".slide-item").each(function (i) {
        $(this).css({
            "right": -530 * (i) + "px",
            "bottom": "0px",
            "position": "absolute"
        });
        if (i == 0) {
            var current = $(this).data('slide');
            $('.current').html(current);
        }
    });
}
$('#next-slide').on("click", function (e) {
    e.preventDefault()

    $(".slide-item").each(function (i) {
        if (i == 0) {
            var bg = $(this).find('img').attr('src');
            console.log(bg);
            $("#thumbnail").css("background-image", "url (" + bg + ")");
            $(this).appendTo(".list-items");
            slideArrange();
        }
    });
});
$('#previous-slide').on("click", function (e) {
    e.preventDefault()

    $(".slide-item").each(function (i) {
        if (i == $(".slide-item").length - 1) {
            var bg = $(this).find('img').attr('src');
            console.log(bg);
            $("#thumbnail").css("background-image", "url (" + bg + ")");
            $(this).prependTo(".list-items");
            slideArrange();
        }
    });
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    smooth: 1,
    effects: true,
});
var separatorChildPrimary = gsap.utils.toArray('.separator-child-primary');
separatorChildPrimary.forEach(function (sepratorChild1) {
    gsap.to(sepratorChild1, {
        scrollTrigger: {
            trigger: sepratorChild1,
            start: "-=800",
            end: "+=800",
            scrub: 2,
        },
        duration: 2,
        delay: 0.2,
        translate: "-300px 0",
        stagger: 0.5,
        ease: Linear.easeNone,
    });
});

let sidebarTl = gsap.to('.sidebar-tour', {
    scrollTrigger: {
        trigger: '.sidebar-tour',
        start: "-50px",
        endTrigger: ".pin-container",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        markers: false,
    }
});

var separatorChildSecondary = gsap.utils.toArray('.separator-child-secondary');
separatorChildSecondary.forEach(function (sepratorChild2) {
    gsap.to(sepratorChild2, {
        scrollTrigger: {
            trigger: sepratorChild2,
            start: "-=800",
            end: "+=800",
            scrub: 2,
        },
        duration: 2,
        delay: 0.2,
        translate: "-500px 0",
        stagger: 0.5,
        ease: Linear.easeNone,
    });
});
var blob = gsap.utils.toArray('.blob');
blob.forEach(function (blobitem) {
    gsap.to(blobitem, {
        scrollTrigger: {
            trigger: blobitem,
            start: 0,
            end: "+=800",
            scrub: 2,
        },
        duration: 2,
        delay: 0.2,
        translate: "200px -200px",
        stagger: 0.5,
        ease: Linear.easeNone,
    });
});
var maskFill = gsap.utils.toArray('.fill-1');
maskFill.forEach(function (hMaskFill) {
    var spanFillMask = hMaskFill.querySelectorAll("span");
    gsap.to(spanFillMask, {
        scrollTrigger: {
            trigger: hMaskFill,
            start: "top 75%",
            end: () => `+=${hMaskFill.offsetHeight * 2}`,
            scrub: 2,
        },
        duration: 2,
        delay: 0.2,
        backgroundSize: "200% 100%",
        stagger: 0.5,
        ease: Linear.easeNone,
    });
});
var maskFill2 = gsap.utils.toArray('.fill-2');
maskFill2.forEach(function (hMaskFill2) {
    var spanFillMask = hMaskFill2.querySelectorAll("span");
    gsap.to(spanFillMask, {
        scrollTrigger: {
            trigger: hMaskFill2,
            start: "top 50%",
            end: () => `+=${hMaskFill2.offsetHeight * 2}`,
            scrub: 1,
        },
        duration: 1,
        backgroundSize: "200% 100%",
        stagger: 0.5,
        ease: Linear.easeNone,
    });
});
gsap.to('.overlay-left', {
    scrollTrigger: {
        trigger: '.overlay-left',
        start: "top 80%",
        end: '+=300',
        scrub: 1,
    },
    duration: 1,
    translate: "-50% 0%",
    stagger: 0.5,
    ease: Linear.easeNone,
});
gsap.to('.overlay-right', {
    scrollTrigger: {
        trigger: '.overlay-right',
        start: "top 80%",
        end: '+=300',
        scrub: 1,
    },
    duration: 1,
    translate: "50% 0%",
    stagger: 0.5,
    ease: Linear.easeNone,
});
gsap.to('.cta', {
    scrollTrigger: {
        trigger: '.cta',
        start: "top 80%",
        end: '+=300',
        scrub: 1,
    },
    duration: 1,
    opacity: 1,
    stagger: 0.5,
    ease: Power2.easeOut,
});
//Swiper slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 600,
    loop: true,
    enabled: true,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: false,
});


var myswiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var myswiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: myswiper,
    },
});

var mySectionSlider = new Swiper(".section-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

lightGallery(document.getElementById('animated-thumbnails-gallery'), {
    thumbnail: true,
});