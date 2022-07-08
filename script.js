const startingTime = 20;
let time = startingTime * 60;

const count = document.getElementById("countdownTimer");

function updateTimer() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    count.innerHTML = `${minutes}:${seconds}`
    time--
}

setInterval(updateTimer, 1000);