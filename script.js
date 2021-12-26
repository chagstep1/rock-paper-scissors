const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const gesturesTotal = 3
const roundsTotal = 5

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
	let lowerPlayerSelection = playerSelection.toLowerCase();
	let s_result = "Round is being played. Player: " + lowerPlayerSelection + ". Computer: " + computerSelection + ".\n";
	if (lowerPlayerSelection === computerSelection)
	{
		s_result += "Tied!";
	}
	else if (ourGestureBeats(lowerPlayerSelection, computerSelection))
	{
		s_result += "You've won!";
	}
	else if (ourGestureBeats(computerSelection, lowerPlayerSelection))
	{
		s_result += "You've lost!";
	}
	else
	{
		s_result = "Bad input!";
	}
	return s_result;
}

function game() {
	alert(`Total of ${roundsTotal} rounds will be played!`);
	for (let i = 0; i < roundsTotal; ++i)
	{
		alert("Game round #" + (i+1).toString());
		let playerSelection = prompt(`Input either ${ROCK}, ${PAPER} or ${SCISSORS}`)
		if (typeof(playerSelection) === "null") break;
		alert(playRound(playerSelection, computerPlay()));
	}
}

game();