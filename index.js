var score = 0;
var timer = 60;
var hitRandomNumber = 0;

// Make Bubble Function 
function makeBubble() {
    var clutter = ''
    for (var i = 1; i <= 168; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector('.panel-bottom').innerHTML = clutter
}

// Run Timer Function 
function runTimer() {
    var timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer-value').textContent = timer
        }
        else {
            clearInterval(timerInterval);
            document.querySelector('.panel-bottom').innerHTML = `<h1 class='game-over'>Game Over!! <br> Score: ${score}</h1>`;
        }
    }, 1000);
}

// Get New Hit Function 
function getNewHit() {
    hitRandomNumber = Math.floor(Math.random() * 10)
    document.querySelector('#hit-value').textContent = hitRandomNumber
}

// Increase Score Function 
function increaseScore() {
    score += 10;
    document.querySelector('#score-value').textContent = score
}

// Get Number on Click 
function NumberClicked() {
    document.querySelector('.panel-bottom').addEventListener('click', (dets) => {
        var clickedNum = Number(dets.target.textContent)
        if (clickedNum == hitRandomNumber) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    makeBubble();
    runTimer();
    getNewHit();
    NumberClicked();
})