$(document).ready(function(){

    var storms = new Audio("assets/images/songofstorms.mp3");
    var opacityVal = 0.7;

    $("#start").on("click", function(){
        storms.play();
        $("#start").css("animation-name", "force");
        $("#start").css("animation-duration", "0.5s");
        $("#start").css("animation-iteration-count", "infinite");
        $("#start").css("transition", "5s ease");

        setTimeout(function(){
            $("#start").css("display", "none");
        }, 5000)

    });


});