$(document).ready(function () {

    var storms = new Audio("assets/images/songofstorms.mp3");
    var opacityVal = 0.7;

    var loadingFunc = function (name) {

        var percentage = 0;

        // adjust project bar width
        if ($('#loading').css('visibility') === 'visible' && percentage < 100) {
            $(".loading-text").text(name);
            setInterval(function () {
                percentage += percentage > 50 ? 25 : 15;
                $(".progress-bar").css("width", percentage + "");
                $(".progress-bar").css("aria-valuenow", percentage + "");
            }, 100)
        }
        else if (percentage >= 100){
            $(".progress-bar").css("width", "0");
            $(".progress-bar").css("aria-valuenow", "0");
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
        }, 6000)

        setTimeout(function () {

            $(".progress-bar").removeClass("bg-success");
            $(".progress-bar").addClass("bg-info");
            loadingFunc("LOADING GRAPHICS");
        }, 10000)

        setTimeout(function () {

            $(".progress-bar").removeClass("bg-info");
            $(".progress-bar").addClass("bg-warning");
            loadingFunc("LOADING CHARACTERS");
        }, 14000)

    });



});