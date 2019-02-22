$(document).ready(function () {

    var storms = new Audio("assets/images/songofstorms.mp3");
    var KOs = 0;
    var wins = 0;
    var losses = 0;
    var hasChosenCharacter = false;
    var hasChosenOpponent = false;


    var characters = [
        {
            id: "#link",
            name: "Link",
            health: 110,
            attack: 25,
            counter: 11,
            image: "assets/images/link.png"
        },
        {
            id: "#zelda",
            name: "Zelda",
            health: 150,
            attack: 1,
            counter: 17,
            image: "assets/images/zelda.png"
        },
        {
            id: "#sheik",
            name: "Sheik",
            health: 120,
            attack: 11,
            counter: 14,
            image: "assets/images/sheik.png"
        },
        {
            id: "#ganon",
            name: "Ganondorf",
            health: 160,
            attack: 4,
            counter: 21,
            image: "assets/images/ganondorf.png"
        }
    ]

    var hero;
    var opponent;

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
        }, 9000)

        setTimeout(function () {

            $(".progress-bar").removeClass("bg-info");
            $(".progress-bar").addClass("bg-warning");
            loadingFunc("LOADING CHARACTERS");
        }, 10700)

        setTimeout(function () {

            $("#loading").fadeOut(500);
            $("#main").fadeIn(900);
            embedCharacters();
        }, 13800)

    });

    $(document).on("click", ".character", function () {
        if (hasChosenCharacter === false) {

            hasChosenCharacter = true;
            var characterData = JSON.parse($(this).attr("data"));
            hero = characterData;
            $(this).parent().hide();

            // sets up fighting area with chosen character
            $("#chosen-character").attr("src", $(this).attr("src"));
            $("#chosen-name").text(characterData.name);
            console.log(characterData);
            $("#chosen-health").text(characterData.health);
            $("#fighting-area").fadeIn();
            $("#message").text("Choose your opponent!");

            $(".grass-background").show();
            $("body").css("background", "url('http://i.imgur.com/kyQgTTm.jpg'");
            $("body").css("background-color", "rgba(255, 255, 255, 0.4)");
            $("body").css("background-blend-mode", "lighten");
            $("video").css("opacity", "1.0");
            // $("body").css("background-repeat", "repeat");  


            $(document).on("click", ".character", function () {
                if (hasChosenOpponent === false) {

                    hasChosenOpponent = true;
                    var characterData = JSON.parse($(this).attr("data"));
                    opponent = characterData;
                    $(this).parent().hide();

                    // sets up fighting area with opponent
                    $("#opponent").attr("src", $(this).attr("src"));
                    $("#opponent-name").text(opponent.name);
                    console.log(opponent);
                    $("#opponent-health").text(opponent.health);

                    // redisplay fighting functionality
                    $("#message").text("FIGHT!");
                    $("#message").css("font-size", "2.0em");
                    $("#message").css("font-weight", "bold");
                    $("#fight-button").show();
                }
            })
        }


    });

    $(document).on("click", "#fight-button", function () {

        if(hero.health > 0 && opponent.health > 0) {
            hero.health -= opponent.counter;
            opponent.health -= hero.attack;
            hero.attack += hero.counter;

            console.log(hero.attack)
        }

        // update health badge
        $("#chosen-health").text(hero.health > 0 ? hero.health : 0);
        $("#opponent-health").text(opponent.health > 0 ? opponent.health : 0);

        // change health badge color
        if(hero.health <= 100 && hero.health > 60){
            $("#chosen-health").css("background-color", "#28a745");
        }
        else if(hero.health <= 60 && hero.health > 30){
            $("#chosen-health").css("background-color", "orange");
        }
        else if(hero.health <= 30){
            $("#chosen-health").css("background-color", "#dc3545");
        }
        
        if(opponent.health <= 100 && opponent.health > 60){
            $("#opponent-health").css("background-color", "#28a745");
        }
        else if(opponent.health <= 60 && opponent.health > 30){
            $("#opponent-health").css("background-color", "orange");
        }
        else if(opponent.health <= 30){
            $("#opponent-health").css("background-color", "#dc3545");
        }

        if (hero.health <= 0) {
            losses++;
            $("#message").text("YOU LOSE!");

        } else if (opponent.health <= 0) {
            KOs++;
            hasChosenOpponent = false;

            $("#message").text("Choose your next challenge!");
            $("#message").css("font-size", "1.5em");

            // check if the player has defeated all the opponents
            if (KOs === 3) {
                wins++;
                $("#message").text("You've defeated all the villians!");
                $("#message").css("font-size", "1.5em");
            }
        }

    })



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