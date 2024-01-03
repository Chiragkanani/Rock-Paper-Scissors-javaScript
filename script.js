let youScore = 0;
let compScore = 0;
let compChoice = null;
let userWin = null
let userChoice = null;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let final = document.querySelector("#final");
let you = document.querySelector("#you");
let comp = document.querySelector("#comp");
let restart = document.querySelector("#restart");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const generateCompChoice = ()=>{
    let num = randomNumber(1, 4);
    if (num == 1) {
        compChoice = "rock"
    }
    if (num == 2) {
        compChoice = "paper"
    }
    if (num == 3) {
        compChoice = "scissors"
    }
    console.log("Computer choice",compChoice);
}


const playGame = (userChoice)=>{
    console.log("userchoice ",userChoice)
        generateCompChoice();
        if(compChoice == userChoice){
            final.setAttribute("class","draw");
            final.innerText="It Was Draw!";
        }else{
            if(userChoice==="rock"){
                userWin = compChoice==="paper"?false:true;
            }else if(userChoice ==="paper"){
                userWin = compChoice==="scissors"?false:true;
            }else{
                userWin = compChoice==="rock"?false:true;
            }
            showWinner(userWin);
        }

}

const showWinner = (userWin)=>{
    if(userWin){
        final.setAttribute("class", "won");
        final.innerText = `You Won! Your ${userChoice} beats ${compChoice}`
        youScore++;
        you.innerText = youScore;
    }else{
        final.setAttribute("class", "lose");
        final.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`
        compScore++;
        comp.innerText = compScore;
    }
}

rock.addEventListener("click",(e)=>{
    userChoice = "rock"
   playGame(userChoice)
})


paper.addEventListener("click",(e)=>{
    userChoice = "paper"
   playGame(userChoice)
})


scissors.addEventListener("click",(e)=>{
    userChoice="scissors"
   playGame(userChoice)
})

restart.addEventListener("click",()=>{
    youScore=0;
    compScore=0;
    you.innerText = youScore;
    comp.innerText = compScore;
    final.innerText = "Pick Your Move";
    final.setAttribute("class", "draw");
})