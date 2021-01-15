/* Version 2.0, May 2020 */

/*jslint browser: true */
(function ($) {
    "use strict";

    function highlight(selector) {
        $(selector).effect("highlight", {}, 2000);
    }

    function initToggleAnswers() {
        var answerTitles = $(".admonition-answer .admonition-title");

        $(".admonition-title ~ *", ".admonition-answer").toggle();
        answerTitles.toggleClass("expanded");

        answerTitles.on("click", function (event) {
            var title = $(event.target),
                content = $(".admonition-title ~ *", title.parent());

            title.toggleClass("expanded");
            content.slideToggle();
        });
    }

    function initHighlightAnchoredSection() {
        if (document.location.hash !== "") {
            highlight(document.location.hash);
        }

        $('.rst-content a[href*="#"]').click(function () {
            highlight($(this).attr("href"));
        });
    }

    $(document).ready(function () {
        initToggleAnswers();
        initHighlightAnchoredSection();
    });
}(window.jQuery));
