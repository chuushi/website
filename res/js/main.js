(function(){
"use strict";

$(".smooth-scroll").click(function() {
    var to = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(to).offset().top - 54
    }, 800);
});

}())