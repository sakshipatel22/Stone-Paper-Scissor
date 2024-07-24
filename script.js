let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");
const quit = document.querySelector(".btn");

const genCompChoice = ()=>{
    const options = ["stone","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const draw = ()=>{
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, UserChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userPara.innerText = userScore;
        msg.innerText = `you Win! your ${UserChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `you Lose! ${compChoice} beats your ${UserChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame= (Userchoice)=>{
    const UserChoice = Userchoice;
    const compChoice = genCompChoice();

    if(Userchoice===compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(Userchoice==="stone"){
            userWin = compChoice === "paper"? false: true;
        }
        else if(Userchoice==="paper"){
            userWin = compChoice === "scissors"? false: true;
        }
        else{
            userWin = compChoice==="stone"? false: true;
        }

        showWinner(userWin, UserChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const Userchoice = choice.getAttribute("id");
       playGame(Userchoice);
    });
});

quit.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userPara.innerText = userScore;
    compPara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
})