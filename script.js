const countdown = document.querySelector(".countdown");
const interval = setInterval(() => {
    const deadline = new Date(2024, 0, 1, 12, 0, 0);
    const current = new Date();
    const diff = deadline - current;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
    const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
    const seconds = Math.floor((diff / 1000) % 60) + "";

    countdown.innerHTML = `
        <div data-content="Days">${days.length === 1 ? `0 ${days}` : days}</div>
        <div data-content="Hours">${hours.length === 1 ? `0${hours}` : hours}</div>
        <div data-content="Minutes">${minutes.length === 1 ? `0${minutes}` : minutes}</div>
        <div data-content="Seconds">${seconds.length === 1 ? `0${seconds}` : seconds}</div>
    `;

    if (diff < 0) {
        clearInterval(interval);
        countdown.innerHTML = "<h1>Happy New Year!!!! 2024</h1>";
    }
    
    document.querySelector('.reset').addEventListener('click', () => {
        clearInterval(interval);
        const divs = document.querySelectorAll('.countdown div');
        divs.forEach((div) => {
            div.innerHTML = "00";
        });
    });
}, 1000);

let timer;
let running = false;
let elapsedTime = 0;

document.querySelector('.start-stop1').addEventListener('click', () => {
    if (running) {
        clearInterval(timer);
        document.querySelector('.start-stop1').textContent = 'Start';
    } else {
        timer = setInterval(updateStopwatch, 1000);
        document.querySelector('.start-stop1').textContent = 'Stop';
    }
    running = !running;
});

document.querySelector('.reset1').addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    updateStopwatch();
    document.querySelector('.start-stop1').textContent = 'Start';
    running = false;
});

function updateStopwatch() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    document.querySelector('.stopwatch1').textContent = formattedTime;
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}
