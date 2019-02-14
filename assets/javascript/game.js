$(document).ready(function () {

    var storms = new Audio("assets/images/songofstorms.mp3");
    var opacityVal = 0.7;

    var loadingFunc = function (name) {

        if ($('#loading').css('visibility') == 'visible') {
            $(".loading-text").text(name);
            var percentage = 0;
            setInterval(function () {
                percentage += percentage > 50 ? 25 : 15;
                $(".progress-bar").css("width", percentage + "");
                $(".progress-bar").css("aria-valuenow", percentage + "");
            }, 100)
        }
    }

    // establish a timed loading functionality for ES5 without implementing promises or async/await
    $("#start").on("click", function () {
        storms.play();
        $("#start").css("animation-name", "force");
        $("#start").css("animation-duration", "0.5s");
        $("#start").css("animation-iteration-count", "infinite");
        $("#start").css("transition", "5s ease");

        setTimeout(function () {
            // $("#start").css("display", "none");
            $("#start").fadeOut("slow");
            // $("#loading").fadeIn("slow");

            // $("#loading").css("display", "flex");     

        }, 5000)

        setTimeout(function () {
            $("#loading").css("visibility", "visible");
            loadingFunc("LOADING ASSETS");

            $(".progress-bar").css("width", "0");
            $(".progress-bar").css("aria-valuenow", "0");
        }, 6000)

        setTimeout(function () {
            $(".progress-bar").removeClass("bg-success");
            $(".progress-bar").addClass("bg-info");
            loadingFunc("LOADING GRAPHICS");

            $(".progress-bar").css("width", "0");
            $(".progress-bar").css("aria-valuenow", "0");
        }, 10000)

        setTimeout(function () {
            $(".progress-bar").removeClass("bg-info");
            $(".progress-bar").addClass("bg-warning");
            loadingFunc("LOADING CHARACTERS");
        }, 14000)

    });






});