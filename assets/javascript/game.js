//Store the Game in an object
Game = {};
Game.WordArray = [];
Game.WordUArray = [];
Game.Lives = 4;

Game.NumberInWordbank = 40; // including zero

Game.Word = "chease"; //testing only

Game.WordU = ""; // instantiate underlined word

//Get random word
Game.PullWord = function(){
	Game.Word = Words.List[(Math.floor(Math.random() * Game.NumberInWordbank))];
}

//loop through the pulled word and replace the letters with _
Game.SetUnderline = function(){
	Game.PullWord();
	for(i=0; i < Game.Word.length; i++){
		Game.WordArray[i] = Game.Word.charAt(i);
		Game.WordUArray[i] = "_ ";
	}
	Game.WordU = Game.WordUArray.join("");
	document.getElementById("word").innerHTML = Game.WordU;
	document.getElementById("Letters").innerHTML = Game.Word.length;
}

Game.UpdateLetter = function(letter){
	Game.Changes = 0;
	for(i=0; i < Game.Word.length; i++){
		Game.WordArray[i] = Game.Word.charAt(i);
		if(Game.Word.charAt(i) == letter){
		Game.WordUArray[i] = letter;
		Game.Changes += 1;
		}
	}
	if(Game.Changes < 1){
		Game.Lives -= 1;
		document.getElementById("lives").innerHTML = Game.Lives;
	}
	Game.WordU = Game.WordUArray.join("");
	document.getElementById("word").innerHTML = Game.WordU;
	
	Game.Word1 = Game.WordArray.join("");
	Game.Word2 = Game.WordUArray.join("");
	
	if(Game.Lives < 1){
		document.getElementById("word").innerHTML = Game.Word1;
		alert("You Are Out Of Lives, Reloading!");
		window.location.reload();
		
	}
	if(Game.Word1 === Game.Word2){
		alert("You Won! Loading For New Word!");
		window.location.reload();
	}
}

Game.PullWord();

Game.SetUnderline();