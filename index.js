const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const computerScoreElement = document.getElementById("computer_count");
const userScoreElement = document.getElementById("your_count");
const result = document.getElementById("result_heading");

let computerScore = 0;
let userScore = 0;

rock.addEventListener('click', function(){
    playRound("rock");
});

paper.addEventListener('click', function(){
    playRound("paper");
});

scissors.addEventListener('click', function(){
    playRound("scissors");
});

function playRound(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
        result.innerHTML = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        userScoreElement.textContent = userScore;
    }

    if (userScore === 5) {
        result.innerHTML = "You won!";
        disableButtons();
    } else {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        if (computerScore === 5) {
            result.innerHTML = "Computer won";
            disableButtons();
        }
    }
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}
