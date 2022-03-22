const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userChoice
let computerChoice
let result
possibleChoice.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generaterComputerChoice()
    getResult()
}))

function generaterComputerChoice(){

    const randomNumber = Math.floor(Math.random()*3) +1
    console.log(randomNumber)
    if (randomNumber ===1){
        computerChoice = "rock"
        
    }
    if (randomNumber ===2){
        computerChoice = "paper"
        
    }
    if (randomNumber ===3){
        computerChoice = "scissor"
        
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    if (computerChoice===userChoice){
        result = 'its a draw!'
    }
    if (computerChoice==="rock" && userChoice==="scissor"){
        result = 'you lost!'
    }
    if (computerChoice==="Paper" && userChoice==="rock"){
        result = 'you lost!'
    }
    if (computerChoice==="scissor" && userChoice==="paper"){
        result = 'you lost!'
    }
    if (computerChoice==="scissor" && userChoice==="rock"){
        result = 'you win!'
    }
    if (computerChoice==="rock" && userChoice==="paper"){
        result = 'you win!'
    }
    if (computerChoice==="paper" && userChoice==="scissor"){
        result = 'you win!'
    }

    resultDisplay.innerHTML=result
    
    
}