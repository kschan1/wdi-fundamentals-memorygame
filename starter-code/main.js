

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card',cards[i]);
		newCard.addEventListener('click', isTwoCards)
		gameBoard.appendChild(newCard);
	}
}

createBoard();

// check to see if two cards matches and create alert message
function isMatch(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
	// flip card to back by resetting innerHTML
	for (var i = 0; i < cards.length; i++) {
	document.getElementsByClassName('card')[i].innerHTML = "";
	}
}

// check to see if there are two cards in play
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	// flip card to show image
	if (this.getAttribute('data-card') == 'king') {
		this.innerHTML = '<img src="playing-card-king.jpg" alt="King of Spades"/>'	
	} else {
		this.innerHTML = '<img src="playing-card-queen.jpg" alt="Queen of Spades"/>'		
	}
	// set time delay to allow second image to be shown
	var delay = 50;
	setTimeout(function() {
		// call isMatch function if two cards have been selected
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			// reset cardsInPlay array
			cardsInPlay = [];
		}
	}, delay);
}

/* future improvements: 
	- prevent same card to be clicked consecutively
	- make correctly selected pair inactive
	- reset game after solving all four cards (via button)
	- randomize card sequence
	*/