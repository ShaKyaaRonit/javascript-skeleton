"use strict";

define([
    "bower/requirejs-domready/domReady",
    "Core/Application"
], function (domReady, Application) {

    domReady(function () {
        (new Application()).run();
    });
console.log('aother task');
console.log('screen guarrd');
console.log('add cover');

});