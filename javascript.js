
let choice = ""; 




 
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

function playGame(){
     function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            tie += 1; 
            return "It's a tie, you are both losers!"
        }else if (humanChoice === "rock"){
            if (computerChoice === "paper"){
                computerScore += 1; 
                return "You lose, Paper beats Rock!"
            }else{
                humanScore += 1; 
                return "You win! Rock beats Scissors."
            }
        }else if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                computerScore += 1; 
                return "You lose, Rock beats Scissors!"
            }else{
                humanScore += 1; 
                return "You win, Scissors beats Paper!"
            }
        }else if (humanChoice === "paper"){
            if (computerChoice === "scissors"){
                computerScore += 1; 
                return "You lose, Scissors beats Paper!"
            }else{
                humanScore += 1; 
                return "You win, Paper beats Rock!"
            }
        }else{
            return "Please type Paper, Rock, or Scissors and not whatever nonsense you have writen. Thanks"
        }
    }

    let humanScore = 0; 
    let computerScore = 0; 
    let tie = 0; 
    
    for (i = 0; i < 5; i++) {
        let compChoice = getComputerChoice(); 
        let humChoice = getHumanChoice(); 

        let result = playRound(humChoice ,compChoice); 
        
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



let check = playGame(); 
console.log(check); 
