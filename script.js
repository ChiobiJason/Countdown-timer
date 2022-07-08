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


const countdown = () => {
    const countDate = new Date('July 10, 2022 08:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //Time calculation
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/ hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);
