
// All game variables
var level = 0;
var score = 0;
var timeout = 500;
var max_score=3;

// the game button from html file
var gameButton = document.getElementById('game-button');

// first place of the button
setRandomPosition();

// event listener to the button
gameButton.addEventListener('click', function() {
	// increment the score 
	score++;

	// checking the score
	if (score === max_score) {
		// next level
		level++;
		timeout -= 100;
        max_score+=2;
		score = 0;

		// new level message
		alert('Congratulations! You have completed level ' + level + '.');

		// time out
		setTimeout(function() {
			setRandomPosition();
		}, timeout);
	} else {
		// new position for button
		setRandomPosition();
	}
});

function setRandomPosition() {
	gameButton.style.top = Math.random() * (window.innerHeight - gameButton.offsetHeight) + 'px';
	gameButton.style.left = Math.random() * (window.innerWidth - gameButton.offsetWidth) + 'px';
}
