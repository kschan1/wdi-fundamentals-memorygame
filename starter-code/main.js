// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "king";
// var cardFour = "queen";

// if (choiceOne === choiceTwo) {
// 	alert("You found a match!");
// } else {
// 	alert("Sorry, try again.");
// }

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
	var noOfCards = 4;
	for (var i = 0; i < noOfCards; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
}

createBoard();