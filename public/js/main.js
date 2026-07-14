(function () {
    "use strict";

    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && typeof WOW !== "undefined") {
        new WOW().init();
    }
})();
