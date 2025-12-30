/**

 *openSidebarWelcome
 *openNavMobile
 *headerFixed
 *videoWrap
 *counter
 *textRotate
**/

(function ($) {
    ("use strict");
    var headerSticky1 = function () {
        if ($(".header-style-2").length > 0) {
            let didScroll;
            let lastScrollTop = 0;
            let delta = 5;
            let navbarHeight = $(".header").outerHeight();
            $(window).scroll(function (event) {
                if ($(this).scrollTop() >= 300) {
                    didScroll = true;
                } else {
                    didScroll = false;
                    if ($(this).scrollTop() === 0) {
                        $(".header").removeClass("scrollHeader")
                        // t-147
                        // $(".header").css("top", `112px`);
                        $(".header").addClass("t-147");

                    }
                }
            });

            setInterval(function () {
                if (didScroll) {
                    let st = $(this).scrollTop();
                    // Make scroll more than delta
                    if (Math.abs(lastScrollTop - st) <= delta) return;

                    // If scrolled down and past the navbar, add class .nav-up.
                    if (st > lastScrollTop && st > navbarHeight) {
                        // Scroll Down
                        $(".header").css("top", `-${navbarHeight + 50}px`);
                        $(".header").removeClass("t-147")

                    } else {
                        // Scroll Up
                        if (st + $(window).height() < $(document).height()) {
                            $(".header").addClass("scrollHeader")
                            $(".header").css("top", `-1px`);
                        }
                    }

                    lastScrollTop = st;
                    didScroll = false;
                }
            }, 250);
        }
    };

    var headerSticky = function () {
        if ($(".header-style-1").length > 0) {
            let didScroll;
            let lastScrollTop = 0;
            let delta = 5;
            let navbarHeight = $(".header").outerHeight();
            $(window).scroll(function (event) {
                if ($(this).scrollTop() >= 300) {
                    didScroll = true;
                } else {
                    didScroll = false;
                    if ($(this).scrollTop() === 0) {
                        $(".header").removeClass("scrollHeader")
                    }
                }
            });

            setInterval(function () {
                if (didScroll) {
                    let st = $(this).scrollTop();
                    // Make scroll more than delta
                    if (Math.abs(lastScrollTop - st) <= delta) return;

                    // If scrolled down and past the navbar, add class .nav-up.
                    if (st > lastScrollTop && st > navbarHeight) {
                        // Scroll Down
                        $(".header").css("top", `-${navbarHeight + 50}px`);

                    } else {
                        // Scroll Up
                        if (st + $(window).height() < $(document).height()) {
                            $(".header").addClass("scrollHeader")
                            $(".header").css("top", `-1px`);
                        }
                    }

                    lastScrollTop = st;
                    didScroll = false;
                }
            }, 250);
        }

    };
    var videoWrap = function () {
        if ($("div").hasClass("video-wrap")) {
            $(".popup-youtube").magnificPopup({
                type: "iframe",
            });
        }
    };
    var openSidebarWelcome = function () {
        $(".btn-open-welcome").on("click", () => {
            $(".wg-welcome").toggleClass("active");
            $(".btn-open-welcome").toggleClass("active");
        })

        $(".btn-close-welcome").on("click", () => {
            $(".wg-welcome").toggleClass("active");
            $(".btn-open-welcome").toggleClass("active");
        })
    }
    var openNavMobile = () => {
        if ($('.header').hasClass('header')) {

            $('.mobile-button').on("click", () => {
                $('.mobile-nav-wrap').toggleClass("active")
                $('body').toggleClass("no-scroll")

            })
            // btn-open-menu-home-2
            $('.btn-open-menu-home-2').on("click", () => {
                $('.mobile-nav-wrap').toggleClass("active")
                $('body').toggleClass("no-scroll")

            })
            $('.overlay-mobile-nav').on("click", () => {
                $('.mobile-nav-wrap').toggleClass("active")
                $('body').toggleClass("no-scroll")
            })
            $(".mobile-nav-close").on('click', () => {
                $('.mobile-nav-wrap').toggleClass("active")
                $('body').toggleClass("no-scroll")
            })
            $(document).on("click", ".menu-item-has-children-mobile", function () {
                var args = { duration: 200 };
                if ($(this).hasClass("active")) {
                    $(this).children(".sub-menu-mobile").slideUp(args);
                    $(this).removeClass("active");
                } else {
                    $(".sub-menu-mobile").slideUp(args);
                    $(this).children(".sub-menu-mobile").slideDown(args);
                    $(".menu-item-has-children-mobile").removeClass("active");
                    $(this).addClass("active");
                }
            });


        }
    }
    var counter = function () {
        if ($(document.body).hasClass("counter-scroll")) {
            var a = 0;
            $(window).scroll(function () {
                var oTop = $(".wg-counter").offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    if ($().countTo) {
                        $(".wg-counter")
                            .find(".number")
                            .each(function () {
                                var to = $(this).data("to"),
                                    speed = $(this).data("speed");
                                $(this).countTo({
                                    to: to,
                                    speed: speed,
                                });
                            });
                    }
                    a = 1;
                }
            });
        }
    };
    var textRotate = function () {

        if ($(".text-rotate").length > 0) {
            const text = "A taste of the sea • Basilico seafood restaurant since 1996 • ";
            const circularText = document.getElementById('circularText');
            const chars = text.split('');
            const degree = 360 / chars.length;

            chars.forEach((char, i) => {
                const span = document.createElement('span');
                span.innerText = char;
                span.style.transform = `rotate(${i * degree}deg)`;
                circularText.appendChild(span);
            });
        }

    }
    var goTop = function () {
        if ($("div").hasClass("progress-wrap")) {
            var progressPath = document.querySelector(".progress-wrap path");
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition =
                "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition =
                "stroke-dashoffset 10ms linear";
            var updateprogress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };
            updateprogress();
            $(window).scroll(updateprogress);
            var offset = 200;
            var duration = 200;
            jQuery(window).on("scroll", function () {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery(".progress-wrap").addClass("active-progress");
                } else {
                    jQuery(".progress-wrap").removeClass("active-progress");
                }
            });
            jQuery(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                jQuery("html, body").animate({ scrollTop: 0 }, duration);
                return false;
            });
        }
    };

    const cursor = function () {
        var myCursor = jQuery(".tf-mouse");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".tf-mouse-inner"),
                    t = document.querySelector(".tf-mouse-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function (s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                    $("body").on(
                        "mouseenter",
                        "a, .canvas-button, .progress-wrap",
                        function () {
                            e.classList.add("mouse-hover"), t.classList.add("mouse-hover");
                        }
                    ),
                    $("body").on(
                        "mouseleave",
                        "a, .canvas-button, .progress-wrap",
                        function () {
                            ($(this).is("a") && $(this).closest(".canvas-button").length) ||
                                (e.classList.remove("mouse-hover"),
                                    t.classList.remove("mouse-hover"));
                        }
                    ),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
    };
    var preloader = function () {
        $("#load").fadeOut();
        $('#loading').delay(500).fadeOut('slow');
    };

    var scollElement = function () {
        $(document).ready(function () {
            let lastScrollTop = 0;
            const distance = 10;

            $(window).on('scroll', function () {
                const st = $(this).scrollTop();

                if (st > lastScrollTop) {
                    // Cuộn xuống
                    $('.scroll-element').css('transform', `translateY(${distance}px)`);
                } else {
                    // Cuộn lên
                    $('.scroll-element').css('transform', `translateY(-${distance}px)`);
                }
                lastScrollTop = st;
            });
        });
    }
    var scollElement2 = function () {
        $(document).ready(function () {
            let lastScrollTop = 0;
            const distance = 10;

            $(window).on('scroll', function () {
                const st = $(this).scrollTop();

                if (st > lastScrollTop) {
                    // Cuộn xuống
                    $('.scroll-element-2').css('transform', `translateY(-${distance}px)`);
                } else {
                    // Cuộn lên
                    $('.scroll-element-2').css('transform', `translateY(${distance}px)`);
                }
                lastScrollTop = st;
            });
        });
    }
    var tabs = function () {
        $(".wg-tabs").each(function () {
            $(this).find(".widget-content-tab").children().hide();
            $(this).find(".widget-content-tab").children(".active").show();
            $(this)
                .find(".menu-tab")
                .children(".item")
                .on("click", function () {
                    var liActive = $(this).index();
                    var contentActive = $(this)
                        .siblings()
                        .removeClass("active")
                        .parents(".wg-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive);
                    contentActive.addClass("active").fadeIn("slow");
                    contentActive.siblings().removeClass("active");
                    $(this)
                        .addClass("active")
                        .parents(".wg-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive)
                        .siblings()
                        .hide();
                });
        });
    };


    var headerFixed = function () {
        if ($("header").hasClass("header-fixed-2")) {
            var nav = $("#header-main");
            var height = $("#header-main .wrapper");
            var headerInner = $("header .header-inner");
            if (nav.length && height.length) {
                var lastScrollTop = 0;
                var offsetTop = nav.offset().top;
                var headerHeight = height.height();
                var injectSpace = $("<div>", { height: headerHeight }).hide();
                if (!$("header").hasClass("style-absolute")) {
                    injectSpace.insertAfter(nav);
                }
                $(window).on("load scroll", function () {
                    let navbarHeight = $("header .header-inner").outerHeight();
                    var st = $(this).scrollTop();
                    if (st > offsetTop) {
                        nav.addClass("is-fixed");
                        injectSpace.show();
                        if (st > lastScrollTop) {
                            $("header .header-inner").css(
                                "top",
                                `-${navbarHeight + 30}px`
                            ); // Ẩn header
                        } else {
                            $("header .header-inner").css("top", "0px");
                        }
                    }
                    if (st < 170) {
                        nav.removeClass("is-fixed");
                        injectSpace.hide();
                        headerInner.slideDown();
                    }

                    lastScrollTop = st;
                    if (st > headerInner) {
                        nav.addClass("is-small");
                    } else {
                        nav.removeClass("is-small");
                    }
                });
            }
        }
    };
    var noneTextanimate = function () {
        $(window).on('load resize', function () {
            const $element = $('.animationtext');
            if ($(window).width() < 400) {
                $element.removeClass('animationtext');
            } else {
                $element.addClass('animationtext');
            }
        });
    }
    var swiperInit = function () {
        if ($(".slider-page-title-home-1").length > 0) {
            new Swiper(".slider-page-title-home-1", {
                loop: true,
                speed: 1000,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }
        if ($(".slider-food-offer").length > 0) {
            new Swiper(".slider-food-offer", {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
            });
        }
        if ($(".slider-testimonial1").length > 0) {
            var swiperTestimonial1 = new Swiper(".slider-testimonial1", {
                loop: true,
                speed: 1000,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
            });
        }
        if ($(".slider-testimonial").length > 0) {
            var swiperTestimonial = new Swiper(".slider-testimonial", {
                loop: true,
                speed: 1000,
                pagination: {
                    el: ".pagination-testimonial",
                    clickable: true,
                },
                controller: {
                    control: swiperTestimonial1 // Link to the image slider
                }
            });
            if (typeof swiperTestimonial1 !== "undefined") {
                swiperTestimonial1.controller.control = swiperTestimonial;
            }
        }
        if ($(".slider-s-our-blog").length > 0) {
            new Swiper(".slider-s-our-blog", {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                speed: 1000,
                navigation: {
                    nextEl: ".navigation-s-our-blog.btn-next",
                    prevEl: ".navigation-s-our-blog.btn-pre",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }
            });
        }
        if ($(".slider-gallery-1").length > 0) {
            new Swiper(".slider-gallery-1", {
                slidesPerView: 5,
                spaceBetween: 10,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }
            });
        }
    }

    var wowInit = function () {
        new WOW().init();
    }

    $(function () {
        // Dom Ready
        swiperInit();
        wowInit();
        openSidebarWelcome();
        openNavMobile();
        headerSticky1();
        videoWrap();
        counter();
        textRotate();
        goTop();
        cursor();
        scollElement();
        scollElement2();
        tabs();
        headerSticky();
        headerFixed();
        noneTextanimate();
        preloader();
    });
})(jQuery);
