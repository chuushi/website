(function(){
"use strict";

var nav = $("#navbar");
var navCtn = nav.children(0);
var w = $(window);

if (w.scrollTop() == 0) {
    nav.addClass("cover-navbar");
    navCtn.addClass("cover-container");
}

w.scroll(function(e) {
// TODO move this out of here and into own js file
    if (w.scrollTop() < w.height()/2) {
        nav.removeClass("roam-navbar");
        nav.addClass("cover-navbar");
        navCtn.addClass("cover-container");
    }
    else {
        nav.addClass("roam-navbar");
        nav.removeClass("cover-navbar");
        navCtn.removeClass("cover-container");
    }
});

}())
