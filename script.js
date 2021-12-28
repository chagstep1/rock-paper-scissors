const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const gesturesTotal = 3
const victoryScore = 5
// should be enum when I figure out how to do it in JavaScript
const E_WON = 0
const E_LOST = 1
const E_TIE = 2
const E_ERROR = -1

let playerScore = 0;
let computerScore = 0;
let gameIsDone = false;

function computerPlay() {
	switch (Math.floor(Math.random() * gesturesTotal)) {
		case 0:
			return ROCK;
		case 1:
			return PAPER;
		case 2:
			return SCISSORS;
		default:
			alert("Error in computerPlayer!");
	}
}

function ourGestureBeats(ourGesture, theirGesture)
{
	if ((ourGesture === ROCK && theirGesture === SCISSORS) ||
		(ourGesture === SCISSORS && theirGesture === PAPER) ||
		(ourGesture === PAPER && theirGesture === ROCK))
	{
		return true;
	}
	return false;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection)
	{
		return E_TIE;
	}
	else if (ourGestureBeats(playerSelection, computerSelection))
	{
		return E_WON;
	}
	else if (ourGestureBeats(computerSelection, playerSelection))
	{
		return E_LOST;
	}
	else
	{
		return E_ERROR;
	}
}


const resultDiv = document.querySelector('#result-div');
const playerScoreSpan = document.querySelector('#player-score');
const computerScoreSpan = document.querySelector('#computer-score');

function playGameAndShow(playerSelection) {
	if (gameIsDone) return;
	
	const computerSelection = computerPlay();
	let sResult = "Round is being played. Player: " + playerSelection + ". Computer: " + computerSelection + ".<br>";
	const eRoundResult = playRound(playerSelection, computerSelection);
	switch (eRoundResult) {
		case E_WON:
			sResult += "You've won!";
			++playerScore;
			playerScoreSpan.textContent = playerScore;
			break;
		case E_LOST:
			sResult += "You've lost!";
			++computerScore;
			computerScoreSpan.textContent = computerScore;
			break;
		case E_TIE:
			sResult += "Tied!";
			break;
		default:
			sResult = "Error!";
			break;
	}
	
	if (playerScore >= victoryScore)
	{
		gameIsDone = true;
		sResult += "<br><br>Player has reached the victory score!<br>Game over."
	}
	else if (computerScore >= victoryScore)
	{
		gameIsDone = true;
		sResult += "<br><br>Computer has reached the victory score!<br>Game over."
	}
	
	resultDiv.innerHTML = sResult;
}


const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', () => playGameAndShow(`${ROCK}`));

const buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', () => playGameAndShow(`${PAPER}`));

const buttonScissors = document.querySelector('#scissors');
buttonScissors.addEventListener('click', () => playGameAndShow(`${SCISSORS}`));