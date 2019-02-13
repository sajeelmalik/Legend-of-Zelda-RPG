$(document).ready(function () {

    var storms = new Audio("assets/images/songofstorms.mp3");
    var opacityVal = 0.7;

    var loadingFunc = function(name){
        if ($('#loading').css('visibility') == 'visible') {
                var percentage = 0;
                $("#loading-text").text(name);
                setInterval(function () {
                    $(".progress-bar").css("width", percentage + "");
                    $(".progress-bar").css("aria-valuenow", percentage + "");
                    percentage += percentage > 50 ? 20 : 10;

                }, 100)
            }
    }

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
            $("#loading").css("visibility", "visible");
            $("#loading").fadeIn("slow");

            // $("#loading").css("display", "flex");

            loadingFunc("LOADING ASSETS");
            loadingFunc("LOADING GRAPHICS");            
            
        }, 5000)

    });






});