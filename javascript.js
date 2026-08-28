
let choice = ""; 
let humanScore = 0; 
let computerScore = 0; 
let tie = 0; 
const computerSelection = getComputerChoice(); 
let resultColor = "white";


 
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3)
    switch (number){
        case 0: return "rock"; break; 
        case 1: return "paper"; break; 
        case 2: return "scissors"; break;
    }
 }

 function getHumanChoice(){
    let choice = prompt("Rock Paper or Scissors?", "Rock");
    
    return choice.toLowerCase(); 
   
 }
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        tie += 1; 
        resultColor = "yellow";
        return "It's a tie, you are both losers!"
    }else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerScore += 1; 
            resultColor = "red";
            return "You lose, Paper beats Rock!"
        }else{
            humanScore += 1; 
            resultColor = "green";
            return "You win! Rock beats Scissors."
        }
    }else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore += 1; 
            resultColor = "red";
            return "You lose, Rock beats Scissors!"
        }else{
            humanScore += 1; 
            resultColor = "green";
            return "You win, Scissors beats Paper!"
        }
    }else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            computerScore += 1; 
            resultColor = "red";
            return "You lose, Scissors beats Paper!"
        }else{
            humanScore += 1; 
            resultColor = "green";
            return "You win, Paper beats Rock!"
        }
    }else{
        return "Please type Paper, Rock, or Scissors and not whatever nonsense you have writen. Thanks"
    }
}
function playGame(){
    

    
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice(); 
        const computerSelection = getComputerChoice(); 
        alert("Computer selected: " + computerSelection); 
        let result = playRound(humanSelection ,computerSelection); 
        
    }
    let resultText = "You scored :" + humanScore + " The computer scored :"+ computerScore + " You tied " + tie + " games.";
    if (humanScore > computerScore){
        return "You won! " + resultText;
    }else if (computerScore > humanScore){
        return "You lost!" + resultText;
    } else{
        return "Its a tie. " + resultText
        }
    
}

const buttonPaper = document.createElement("button"); 


const PaperIcon = document.createElement("img"); 
PaperIcon.setAttribute("src", "images/paperIcon.png");
PaperIcon.setAttribute("width", "200px");
buttonPaper.appendChild(PaperIcon);

const buttonRock = document.createElement("button");
const rockIcon = document.createElement("img");
rockIcon.setAttribute("src", "images/rockIcon.png");
rockIcon.setAttribute("width", "200px");
buttonRock.appendChild(rockIcon);

const buttonScissors = document.createElement("button");
const scissorsIcon = document.createElement("img");
scissorsIcon.setAttribute("src", "images/scissorsIcon.png");
scissorsIcon.setAttribute("width", "200px");
buttonScissors.appendChild(scissorsIcon);



const body = document.querySelector(".mainDiv"); 
const buttonDiv = document.createElement("div");

const buttonsGroup = document.querySelector(".buttonsGroup")
buttonsGroup.appendChild(buttonDiv);
buttonDiv.setAttribute("class", "buttons");

buttonDiv.appendChild(buttonPaper); 
buttonDiv.appendChild(buttonRock);
buttonDiv.appendChild(buttonScissors);




const div = document.createElement("div"); 
div.setAttribute("class", "scores");
body.appendChild(div);

const scoreGroup = document.createElement("div");
scoreGroup.setAttribute("class", "scoreGroup");
body.appendChild(scoreGroup);

const scoreHeading = document.createElement("div");
scoreHeading.setAttribute("class", "scoreHeading");
scoreGroup.appendChild(scoreHeading);

// const playerHeading = document.createElement("p");
// playerHeading.textContent = "You";
// const commputerHeading = document.createElement("p");
// commputerHeading.textContent = "Computer";
// scoreHeading.appendChild(playerHeading);
// scoreHeading.appendChild(commputerHeading);



const playerWinDisplay = document.createElement("p");
const playerLossDisplay = document.createElement("p");
const playerTieDisplay = document.createElement("p");
div.appendChild(playerWinDisplay);
div.appendChild(playerLossDisplay);
div.appendChild(playerTieDisplay);
function updateScore(){
    playerWinDisplay.textContent = "Won: " + humanScore; 
    playerLossDisplay.textContent = "Lost: " + computerScore;
    playerTieDisplay.textContent = "Tied: " + tie; 
}

playerWinDisplay.textContent = "Won: " + humanScore; 
playerLossDisplay.textContent = "Lost: " + computerScore;
playerTieDisplay.textContent = "Tied: " + tie; 

const choiceResultDiv = document.createElement("div");
choiceResultDiv.setAttribute("class", "choiceresult")
scoreGroup.appendChild(choiceResultDiv);

const choiceGroup = document.createElement("ul");
choiceGroup.setAttribute("class", "choices")
choiceResultDiv.appendChild(choiceGroup);
const resultGroup = document.createElement("ul");
resultGroup.setAttribute("class", "results")
choiceResultDiv.appendChild(resultGroup);



buttonPaper.addEventListener("mousedown", ()=> PaperIcon.setAttribute("src", "images/paperIconDown.png"));
buttonRock.addEventListener("mousedown", ()=> rockIcon.setAttribute("src", "images/rockIconDown.png"));
buttonScissors.addEventListener("mousedown", ()=> scissorsIcon.setAttribute("src", "images/scissorsIconDown.png"));

body.addEventListener("mouseup", (event)=>{
    PaperIcon.setAttribute("src", "images/paperIcon.png");
    rockIcon.setAttribute("src", "images/rockIcon.png");
    scissorsIcon.setAttribute("src", "images/scissorsIcon.png");
;})

buttonPaper.addEventListener("click", (event)=>{
    updatePage("paper");

})
buttonRock.addEventListener("click", (event)=>{
    updatePage("rock"); 
})

buttonScissors.addEventListener("click", (event)=>{
    updatePage("scissors");
    
    
})




function updatePage(choice){
    const computerSelection = getComputerChoice(); 
    const resultText = playRound(choice, computerSelection);
    const resultChoiceText = document.createElement("li");
    const resultListItem = document.createElement("li");
    resultChoiceText.textContent = "You: " + choice.toUpperCase() + "  Computer: " + computerSelection.toUpperCase();
    resultListItem.textContent = resultText; 
    resultListItem.style.backgroundColor = resultColor;
    choiceGroup.appendChild(resultChoiceText);
    resultGroup.appendChild(resultListItem);
    
    updateScore(); 
    checkWhoWon(); 
}
function removeResults(result){
    results.remove(); 
}

function checkWhoWon(){
    if (humanScore === 5){
        alert("You won!");
        humanScore = 0; 
        computerScore = 0; 
        tie = 0; 
        updateScore(); 
        resultColor = "white"
        const resultTexts = document.querySelectorAll("li");
        for (let i in resultTexts){
            const removable = resultTexts[i];
            removable.remove();  
        }
    }
    if (computerScore === 5){
        alert("You lost!");
        humanScore = 0; 
        computerScore = 0; 
        tie = 0; 
        updateScore(); 
        resultColor = "white"
        const resultTexts = document.querySelectorAll("li");
        for (let i in resultTexts){
            const removable = resultTexts[i];
            removable.remove();  
        }
    }

}






// old logic to play the game 5 times automatically
// let result = playGame(); 
// alert(result);
// console.log(result);
