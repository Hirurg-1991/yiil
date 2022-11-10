import * as flsFunctions from "./modules/function.js";
import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url)
//  import "../../node_modules/magnific-popup/dist/jquery.magnific-popup.js";

flsFunctions.isWebp();
// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();
// Testimonials slider
// Menu

(function ($) {
    // variables
    var header = $(".header");

    navInit();

    function navInit() {

        header.find(".burger").on("click", function () {

            $(this).closest(header).toggleClass("header_menu-active");

        });
    }

    ///stiky
    if ($(".breadcrumbs").length) {

        var navOffset = $(".breadcrumbs").offset().top / 2;

    }

    $(".breadcrumbs").wrap('<div class="breadcrumbs__placeholder"></div>');
    $(".breadcrumbs__placeholder").height($(".breadcrumbs").outerHeight());
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        // console.log("navOffset " + navOffset);
        // console.log("scrollPos " + scrollPos);
        if (scrollPos >= navOffset) {
            $(".breadcrumbs").addClass("fixed");
        }
        else {
            $(".breadcrumbs").removeClass("fixed")
        }
    });

//Scroll
var headerScroll = $(".header").height();
var projectScroll = $(".projectlist__aktuell").height();
// console.log("navOffset " + headerScroll)
// console.log("scrollPos " + projectScroll)
$('a[href*="#"]').on('click', function () {
    $('html, body').animate({

        scrollTop: $($.attr(this, 'href')).offset().top - (headerScroll + projectScroll + 20)
    }, 400);
    return false;
});

// Accordion init

if ($(".accordion").length) {

    accordionInit();

}

function accordionInit() {

    $('.accordion').on("click", ".accordion__header", function () {

        $(this).closest(".accordion__item").toggleClass("accordion__item_active").siblings().removeClass("accordion__item_active");

    });

}
// Change img init

if ($(".about__content").length) {

    clickInit();

}

function clickInit() { 
           $('.about__content').mouseenter(function() {
            $(this).closest('.about__content').find('.about__img-first, .about__img-next').toggleClass('about__img-first about__img-next',3000).find("video").trigger('play');
          })   
          $('.about__content').mouseleave(function() {
            $(this).closest('.about__content').find('.about__img-first, .about__img-next').toggleClass('about__img-first about__img-next',3000).find("video").trigger('load');
          })   
}
})($);