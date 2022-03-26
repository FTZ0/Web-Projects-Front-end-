/*  <how to use jquery>
    syntax  
$('selector').action(); ($ sign refers to jquery library)


Element using id 
$('#id').action()/css();

Select Elements using classes
$(.classname).action()/css({color: 'red', fontsize:25});

jQuery Events
$('element').click.function() { action of the ananomous fuction}

document.ready() method -- make the function available after the html documents are ready. Good practice to keep all the javascript and jquery function inside the document.ready(); fuction

$(document).ready( function() {action of javascript ananomous function})
The short form structure --recommended way
$function() {action of javascript ananomous function});


window on load method-- runs a function when the page is fully loaded in the browser.
$(window).on("load", fuction(){}); */


/* =========================================================
            Important environment setting comment
==========================================================*/


/* eslint-disable */
/* eslint-env es6 */
/*jslint devel: true */
/*global $*/


/* =========================================================
                      PRELAODER
==========================================================*/

$(window).on('load', function () {
    "use strict";
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut("slow");
});
/* =========================================================
                      TEAM
==========================================================*/

$(document).ready(function () {
    "use strict";
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    }); /*{items :2} is the javascript object to the owlCarousel method, and items is property*/
});

/* =========================================================
                      PROGRESS BAR ANIMATION
==========================================================*/
/*document.ready method*/

$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        $(this).distroy;
    }, {
        offset: "bottom-in-view"
    });
});

/* =========================================================
                      RESPONSIVE TABS
==========================================================*/
$(function () {
    $("#services-tab").responsiveTabs({
        
    });
});



/* =========================================================
                      PORTFOLIO /WORK
==========================================================*/

/* jquery document.ready method is called when the document structure is ready on the web, does not web for the images to be loaded, therefore using window.onload method*/

$(window).on('load', function () {

    //initialize the isotope plugin
    $("#isotope-container").isotope({});
    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr("data-filter")
        $("#isotope-container").isotope({
            filter: filterValue
        });

        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");
    });

});










