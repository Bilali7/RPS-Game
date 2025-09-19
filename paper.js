let userSocre = 0;
let compSocre = 0;
const choices = document.querySelectorAll ('.choice');
const msg = document.querySelector('#msg');
const userSocreShow = document.querySelector('#user-score'); 
const compSocreShow = document.querySelector('#comp-score'); 

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userSocre++;
        userSocreShow.innerText = userSocre;
        console.log('you win');
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }
    else {
        compSocre++;
        compSocreShow.innerText = compSocre;
        console.log('you loose');
        msg.innerText = `You Loose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const drawGame = () => {
    console.log ('game Draw');
    msg.innerText = 'Game Draw Play Again';
    msg.style.backgroundColor = 'rgba(255, 196, 0, 1)';
}

const playGame = (userChoice) => {
    console.log ('choice your', userChoice);  
    const compChoice = genComChoice();
    console.log ('comp choice', compChoice);

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true; 
        }
        else {
            userWin = compChoice === 'rock' ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const genComChoice = () => {
    const opt = ['rock','paper','scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return opt[randomIdx];
}

choices.forEach ((choice) => {
    choice.addEventListener ('click', () => {
        // console.log ('clicked');
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});