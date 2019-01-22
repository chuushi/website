(function(){
"use strict";

var nav = $("#navbar");
var image = $("#cover>.cover-parallax");
var navCtn = nav.children(0);
var w = $(window);

if (w.scrollTop() == 0) {
    nav.addClass("cover-navbar");
    navCtn.addClass("cover-container");
}

w.scroll(function(e) {
    var scroll = w.scrollTop();
    
    if (image.length && image.height() > scroll)
        image.css("top",scroll/3 + "px");
    
    if (scroll < w.height()/2) {
        nav.removeClass("roam-navbar");
        nav.addClass("cover-navbar");
        navCtn.addClass("cover-container");
    } else {
        nav.addClass("roam-navbar");
        nav.removeClass("cover-navbar");
        navCtn.removeClass("cover-container");
    }
});

}())
