//Store the Game in an object
Game = {};

//Create empty array to store pulled word from word list
Game.WordArray = [];

//Create empty array to store the pulled word that has been replaced with underscores
Game.WordUArray = [];

//Set the life counter
Game.Lives = 7;


//The number of words in the word bank to be used in Math.floor
//using length did not work
Game.NumberInWordbank = 40; 

//Make sure the word bank is working  if not console will throw undefined error
Game.Word = "test"; 

//Create empty string to store underlined word
Game.WordU = "";


//Create index that will allow words to be displayed back to back to allow for a score to be kept
// Game.Index = 0;

//<------functions go here------------>

//Create a function that will pull a random word from the word bank
Game.PullWord = function(){
	Game.Word = Words.List[(Math.floor(Math.random() * Game.NumberInWordbank))];
}


//loop through the pulled word and replace the letters with _
Game.SetUnderline = function(){
	//Get the random word with the PullWord function
	Game.PullWord();
	//Use a for loop that will loop through the letters and replace them with underscores.
	for(i=0; i < Game.Word.length; i++){
		Game.WordArray[i] = Game.Word.charAt(i);
		Game.WordUArray[i] = "_ ";
	}
	//Join underscore word and array into a string
	Game.WordU = Game.WordUArray.join("");
	//Display the underscored word onscreen
	document.getElementById("word").innerHTML = Game.WordU;
	//Display on screen how many character are in the word
	document.getElementById("Letters").innerHTML = Game.Word.length;
}

//Create the function that will unhide the word and update the Game
Game.UpdateLetter = function(letter){
	//Set an integer to adjust so the Game will know the player did something
	Game.Changes = 0;
	//Create a for loop that changes the integer if an _ becomes a letter
	for(i=0; i < Game.Word.length; i++){
		Game.WordArray[i] = Game.Word.charAt(i);
		if(Game.Word.charAt(i) == letter){
		Game.WordUArray[i] = letter;
		Game.Changes += 1;
		}
	}

	//If an _ does not change, decrease life counter
	if(Game.Changes < 1){
		Game.Lives -= 1;
		//Decrease life counter on screen
		document.getElementById("lives").innerHTML = Game.Lives;
	}


	Game.WordU = Game.WordUArray.join("");
	document.getElementById("word").innerHTML = Game.WordU;
	
	//Setup win/lose conditions by matching the arrays
	Game.Word1 = Game.WordArray.join("");
	Game.Word2 = Game.WordUArray.join("");
	
	//If life counter = 0, player loses
	if(Game.Lives < 1){
		//Display the correct word before screen reloads
		document.getElementById("word").innerHTML = Game.Word1;
		//Alert player they lost
		alert("You Are Out Of Lives, Reloading!");
		//Reload screen
		// window.location.reload();
	}

	//Words match and life counter is not 0, player wins
	if(Game.Word1 === Game.Word2){
		//Alert player they won
		alert("You Won! Loading For New Word!");
		//Reload screen for next Game
		window.location.reload();
	}
}

//Pull random word on screen load to start the Game
Game.PullWord();

//Hide randomly pulled word
Game.SetUnderline();


