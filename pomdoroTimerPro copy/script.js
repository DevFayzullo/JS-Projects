let isRunning = false;
let timer;
let time = 25 * 60;
let pomodoros = 0;
let cycle = 0;

const timerEl = document.getElementById("timer");
const statusEl = document.getElementById("status");
const completedEl = document.getElementById("completed");
const beep = document.getElementById("beep");

function updateDisplay() {
  const min = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const sec = (time % 60).toString().padStart(2, "0");
  timerEl.textContent = `${min}:${sec}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        beep.play();
        clearInterval(timer);
        isRunning = false;
        if (statusEl.textContent === "Focus Time") {
          pomodoros++;
          cycle++;
          localStorage.setItem("pomodoros", pomodoros);
          completedEl.textContent = pomodoros;
          if (cycle === 4) {
            time = 15 * 60;
            cycle = 0;
            statusEl.textContent = "Long Break ☕";
          } else {
            time = 5 * 60;
            statusEl.textContent = "Short Break ✨";
          }
          updateDisplay();
        } else {
          time = 25 * 60;
          statusEl.textContent = "Focus Time";
          updateDisplay();
        }
        startTimer();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  time = 25 * 60;
  cycle = 0;
  statusEl.textContent = "Focus Time";
  updateDisplay();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("toggleMode").addEventListener("click", toggleDarkMode);

window.onload = () => {
  const saved = localStorage.getItem("pomodoros");
  if (saved) {
    pomodoros = parseInt(saved);
    completedEl.textContent = pomodoros;
  }
  updateDisplay();
};
