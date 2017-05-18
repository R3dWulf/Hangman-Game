//Test to see if the JS file is working
//test is okay
//alert("Test");

// GLOBAL VARIABLES
//=============================================================================================
// Arrays and vaiables for holding data
// array needs to be lower case becuase button input is lowercase
var wordOptions = ["cowboy", "boots", "train", "horse", "outlaw", "marshal", "whiskey"]; 
// hold the chosen word
var selectedWord = "";
//Determine what letters are in the world
var lettersInWord= [];
//number of blanks
var numBlanks = 0;
//array to hold blanks and successful guesses
var blanksAndSuccesses = []; // example j _ _ _ _
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


// FUNCTIONS 
//=============================================================================================

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;

	// Reset on new game
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// Populate blanks and and successes with right number of blanks
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	// Change HTML to reflect round conditions
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" "); //.join removes the default comma seperators
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

	//test
	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetters(letter){
	// Check if letter exist in code at all

	// test to make sure letter is called
	//alert(letter); 
	var isLetterInWord = false;
	for (var i = 0; i < numBlanks; i++){
		if(selectedWord[i] == letter){
			isLetterInWord = true;
			//test to make sure the for loop is working
			//alert("Letter Found");
		}
	}

	// Check where is the word the letter exist and populate out blanksAndSuccesses
	if(isLetterInWord){
		for(var i =0; i < numBlanks; i++ ){
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	} 

	// Letter was not found
	else { 
		wrongLetters.push(letter);
		guessesLeft--;
	}

	//Testing and debugging
	console.log(blanksAndSuccesses);
}

function roundComplete(){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft );

	// Update HTML to reflect current information
	document.getElementById("numGuesses").innerHTML = guessesLeft; 
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" "); // .toString() inputs commas
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	// Check if user won
	if (lettersInWord.toString() == blanksAndSuccesses.toString()){
		winCount++;
		alert("You Won!");

		// Update win counter in HTML 
		document.getElementById("winCounter").innerHTML = winCount;

		// Restart game now with score updated.
		startGame();
	}

	// Check if user lost
	else if(guessesLeft == 0) {
		lossCount++;
		alert("You lost!");

		// Update the lost counter in HTML
		document.getElementById("lossCounter").innerHTML = lossCount;
		startGame();
	}
}

// MAIN PROCESS
//=============================================================================================

// initiates the code for the start time
startGame();

// Register key clicks
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); //use event.keyCode if String.from does not work!
	checkLetters(letterGuessed);
	roundComplete();
	//Testing key event
	console.log(letterGuessed);

}