
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

let isautoplay=false;
let intervalId; 
function autoplay(){
    if(!isautoplay){
        intervalId=setInterval(function(){
        const playerMove=computerPick();
        playGame(playerMove);
        },1500);
        isautoplay=true;
    }else{
        clearInterval(intervalId); // to stop the interval
        isautoplay=true;
    }
    

}

function playGame(playerMove) {
    const computerMove = computerPick();
    console.log(computerMove);
    let result = '';

    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        } else {
            result = 'Tie';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else {
            result = 'You lose';
        }
    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }
    }


    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    updateScoreDisplay();
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result')
    .innerHTML=result;
    document.querySelector('.js-moves').innerHTML=`Your pick: ${playerMove} & Computer Pick :${computerMove}`

}

function computerPick() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'Rock';
    } else if (randomNumber < 2 / 3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function updateScoreDisplay() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  }


function resetScore() {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    updateScoreDisplay();
    localStorage.setItem('score', JSON.stringify(score));
    
}
function clearr() {
     // Reset the score object
     score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
    document.querySelector('.js-score').innerHTML = '';
}

// Initialize the score display on page load
updateScoreDisplay();

