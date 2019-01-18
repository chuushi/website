(function(){
"use strict";

var field = $("#personal-field");

var blinkClass = "typing-blink";
var list = [
    "a programmer.",
    "a photographer.",
    "a graphic designer.",
    "a video creator.",
    "a server maintainer.",
    "an administrator.",
    "Simon Chuu."
];
var item = 0;
var pos = 0;
var typeDelay = 88;
var backspaceDelay = 50;

function typeText() {
    field.append(list[item].charAt(pos))
        .delay(typeDelay)
        .promise()
        .done(function() {
            if (pos < list[item].length) {
                pos++
                typeText();
            } else {
                field.addClass(blinkClass);
                field
                    .delay(3000)
                    .promise()
                    .done(function() {
                        field.removeClass(blinkClass);
                        backspaceText();
                    });
            }
    });
}

function backspaceText() {
    field.text(function(a,t) {
        return t.slice(0,-1)
    })
        .delay(backspaceDelay)
        .promise()
        .done(function() {
            if (--pos > 0) {
                backspaceText();
            } else {
                field.addClass(blinkClass);
                if (++item >= list.length)
                    item = 0;
                field
                    .delay(500)
                    .promise()
                    .done(function() {
                        field.empty();
                        field.removeClass(blinkClass);
                        typeText();
                    });
            }
    });
}


$(document).ready(function(){
    field.removeClass(blinkClass);
    field.empty();
    typeText();
});

}())
