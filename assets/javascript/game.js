$(document).ready(function () {

    var storms = new Audio("assets/images/songofstorms.mp3");
    var wins = 0;
    var losses = 0;
    var hasChosen = false;

    var characters = [
        {
            id: "#link",
            name: "Link",
            health: 110,
            attack: 17,
            defense: 5,
            image: "assets/images/link.png"
        },
        {
            id: "#zelda",
            name: "Zelda",
            health: 150,
            attack: 5,
            defense: 17,
            image: "assets/images/zelda.png"
        },
        {
            id: "#sheik",
            name: "Sheik",
            health: 120,
            attack: 9,
            defense: 8,
            image: "assets/images/sheik.png"
        },
        {
            id: "#ganon",
            name: "Ganondorf",
            health: 160,
            attack: 4,
            defense: 21,
            image: "assets/images/ganondorf.png"
        }
    ]

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

        setTimeout(function () {

            $("#loading").fadeOut(500);
            $("#main").fadeIn("slow");
            embedCharacters();
        }, 18000)

    });

    $(document).on("click", ".character", function () {
        if (hasChosen === false) {
            var characterData = JSON.parse($(this).attr("data"));

            $("#chosen-character").attr("src", $(this).attr("src"));
            hasChosen = true;

            $("#chosen-name").text(characterData.name); 
            console.log(characterData);
            $("#chosen-health").text(characterData.health);
            $("#fighting-area").fadeIn();
        }
    });



    // sets up loading animations
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
        else if (percentage >= 100) {
            $(".progress-bar").css("width", "0");
            $(".progress-bar").css("aria-valuenow", "0");
        }
    }

    // embeds data into character images
    function embedCharacters() {
        for (var i = 0; i < characters.length; i++) {
            $(characters[i].id).attr("data", JSON.stringify(characters[i]));
            // console.log(characters[i]);
        }
    }

});