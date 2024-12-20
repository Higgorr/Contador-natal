const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "25 Dec 2024";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();  // Corrigido aqui

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);  // Corrigido aqui
    const hours = Math.floor(totalSeconds / 3600) % 24;  // Corrigido aqui
    const mins = Math.floor(totalSeconds / 60) % 60;  // Corrigido aqui
    const seconds = Math.floor(totalSeconds) % 60;  // Corrigido aqui

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
