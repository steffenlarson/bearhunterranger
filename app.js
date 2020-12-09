

const answers = {
    rock: {
        win: 'scissors',
        lose: 'paper'
    },
    paper: {
        win: 'rock',
        lose: 'scissors'
    },
    scissors: {
        win: 'paper',
        lose: 'rock'
    }
}


function play(playerChoice) {
    let compChoice = 'scissors'
    let throw = answers[playerChoice]
    if (playerChoice == 'rock') {
        console.log('tie')
    } else if (throw.win == compChoice) {
        console.log('win')
    } else if (playerChoice == 'scissors') {
        console.log('lose')
    }
    if (playerChoice == compChoice) {
        console.log('tie')
        // } else if (playerChoice !== compChoice) { BOOLEAN???

    }

    // console.log(playerChoice)





}

function randomizeAnswer(compChoice) {
    // flip these?
    let rock = 1
    let paper = 2
    let scissors = 3
    compChoice == Math.floor(Math.random() * 4) + 1;

    if (compChoice == 1) {
        console.log('rock')
    } else if (compChoice == 2) {
        console.log('paper')
    } else if (compChoice == 3) {
        console.log('scissors')
    }

}




function playNow(playerChoice) {
    let compChoice = 'scissors'
    let throw = answers[playerChoice]
    if (playerChoice == 'rock') {
        console.log('tie')
    } else if (throw.win == compChoice) {
        console.log('win')
    } else if (playerChoice == 'scissors') {
        console.log('lose')
    }
    if (playerChoice == compChoice) {
        console.log('tie')
        // } else if (playerChoice !== compChoice) { BOOLEAN???

    }

    // console.log(playerChoice)





}