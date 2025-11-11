// Paper beats Rock
// Rock beats Scissors
// Scissors beats Paper 

function rps(player1, player2) {
    const validChoices = ['rock', 'paper', 'scissors'];

    if (!validChoices.includes(player1) || !validChoices.includes(player2)) {
        return "Invalid input";
    }    
    if (player1 === player2) {
        return "It's a tie!"
    }   
    if(
        ( player1 === "rock" && player2 === "scissors" ) ||
        ( player1 === "scissors" && player2 === "paper" ) ||
        ( player1 === "paper" && player2 === "rock" ) 
        ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}
console.log(rps("rock", "scissors")); // Player 1 wins!
console.log(rps("paper", "rock")); // Player 1 wins!
console.log(rps("scissors", "paper"));; // Player 1 wins!
console.log(rps("rock", "paper"));; // Player 2 wins!
console.log(rps("scissors", "rock"));; // Player 2 wins!
console.log(rps("paper", "scissors"));; // Player 2 wins!
console.log(rps("rock", "rock"));; // It's a tie!
console.log(rps("paper", "paper"));; // It's a tie!