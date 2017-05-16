var wins = 0;

document.onkeyup = function(event) {
    console.log(event);
    //convert key press to lower case
    var letter = event.key;
    wins++;
    console.log(wins);


    if (letter === "a") {
        event.preventDefault();
        Game.UpdateLetter("a");
    }

    if (letter === "b") {
        event.preventDefault();
        Game.UpdateLetter("b");
    }


    if (letter === "c") {
        event.preventDefault();
        Game.UpdateLetter("c");
    }

    if (letter === "d") {
        event.preventDefault();
        Game.UpdateLetter("d");
    }

    if (letter === "e") {
        event.preventDefault();
        Game.UpdateLetter("e");
    }

    if (letter === "f") {
        event.preventDefault();
        Game.UpdateLetter("f");
    }

    if (letter === "g") {
        event.preventDefault();
        Game.UpdateLetter("g");
    }

    if (letter === "h") {
        event.preventDefault();
        Game.UpdateLetter("h");
    }

    if (letter === "i") {
        event.preventDefault();
        Game.UpdateLetter("i");
    }

    if (letter === "j") {
        event.preventDefault();
        Game.UpdateLetter("j");
    }

    if (letter === "k") {
        event.preventDefault();
        Game.UpdateLetter("k");
    }

    if (letter === "l") {
        event.preventDefault();
        Game.UpdateLetter("l");
    }

    if (letter === "m") {
        event.preventDefault();
        Game.UpdateLetter("m");
    }
        
    if (letter === "n") {
        event.preventDefault();
        Game.UpdateLetter("n");
    }

    if (letter === "o") {
        event.preventDefault();
        Game.UpdateLetter("o");
    }

    if (letter === "p") {
        event.preventDefault();
        Game.UpdateLetter("p");
    }

    if (letter === "q") {
        event.preventDefault();
        Game.UpdateLetter("q");
    }

    if (letter === "r") {
        event.preventDefault();
        Game.UpdateLetter("r");
    }

    if (letter === "s") {
        event.preventDefault();
        Game.UpdateLetter("s");
    }

    if (letter === "t") {
        event.preventDefault();
        Game.UpdateLetter("t");
    }

    if (letter === "u") {
        event.preventDefault();
        Game.UpdateLetter("u");
    }

    if (letter === "v") {
        event.preventDefault();
        Game.UpdateLetter("v");
    }

    if (letter === "w") {
        event.preventDefault();
        Game.UpdateLetter("w");
    }

    if (letter === "x") {
        event.preventDefault();
        Game.UpdateLetter("x");
    }

    if (letter === "y") {
        event.preventDefault();
        Game.UpdateLetter("y");
    }

    if (letter === "z") {
        event.preventDefault();
        Game.UpdateLetter("z");
    }
}
