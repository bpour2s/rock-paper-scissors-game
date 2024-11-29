
// Rock Paper Scissors
// Description: Implement a basic Rock Paper Scissors game.
// Requirements:
// The program should take the player’s move as an input from process.argv.
// The program should randomly generate a move for the computer.
// Determine the winner based on the rules of Rock Paper Scissors.
// Output the result (win, lose, or draw) to the console.

//Liste der möglichen Züge
const validchoises = ['rock', 'paper', 'scissors'];

// Funktion, um einen zufälligen Zug für den Computer zu erhalten
function getComputerMove() {
    const randomIndex = Math.floor(Math.random() * validchoises.length);
    return validchoises[randomIndex];
}

//Funktion zur Ermittlung des Gewinners
function determineWinner(userMove, cpuMove) {
    if (userMove === cpuMove) {
        return 'It\'s a draw!';
    }
    
    // Spielregeln
    if (
        (userMove === 'rock' && cpuMove === 'scissors') ||
        (userMove === 'paper' && cpuMove === 'rock') ||
        (userMove === 'scissors' && cpuMove === 'paper')
    ) {
        return 'You win!';
    }
    
    return 'You lose!';
}

// Abrufen von Spielerbewegungen aus Befehlszeilenargumenten (process.argv)
const userMove = process.argv[2];

if (!userMove || !validchoises.includes(userMove)) {
    console.log('Please provide a valid move: rock, paper, or scissors.');
    process.exit();
}

// den Cpu-Zug ermitteln
const cpuMove = getComputerMove();

// Ermitteln und Ausgeben des Ergebnisses
console.log(`You chose: ${userMove}`);
console.log(`Computer chose: ${cpuMove}`);

// Ermitteln und Ausgeben des Ergebnisses
const result = determineWinner(userMove, cpuMove);
console.log(result);
