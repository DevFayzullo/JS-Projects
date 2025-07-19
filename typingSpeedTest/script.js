const textDisplay = document.getElementById("text-display");
const input = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const gradeEl = document.getElementById("grade");
const restartBtn = document.getElementById("restart");

const testText = `Typing is a fundamental skill for everyone. Practice improves both speed and accuracy. Keep going and grow better!`;

let time = 30;
let timer;
let isStarted = false;

function renderText() {
  textDisplay.innerHTML = "";
  testText.split("").forEach((char) => {
    const span = document.createElement("span");
    span.innerText = char;
    textDisplay.appendChild(span);
  });
}

function startTimer() {
  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;
    if (time === 0) {
      clearInterval(timer);
      input.disabled = true;
      calculateStats();
    }
  }, 1000);
}

function calculateStats() {
  const typed = input.value;
  const correctChars = typed
    .split("")
    .filter((char, i) => char === testText[i]).length;
  const accuracy = Math.round((correctChars / testText.length) * 100);
  const wordsTyped = typed.trim().split(/\s+/).length;
  const wpm = Math.round((wordsTyped / 30) * 60);
  const grade =
    accuracy >= 95
      ? "A"
      : accuracy >= 85
      ? "B"
      : accuracy >= 70
      ? "C"
      : accuracy >= 50
      ? "D"
      : "F";

  accuracyEl.textContent = `${accuracy}%`;
  wpmEl.textContent = wpm;
  gradeEl.textContent = grade;
}

input.addEventListener("input", () => {
  const typed = input.value.split("");
  const spans = textDisplay.querySelectorAll("span");

  if (!isStarted) {
    startTimer();
    isStarted = true;
  }

  spans.forEach((span, index) => {
    const char = typed[index];
    if (char == null) {
      span.classList.remove("correct", "incorrect");
    } else if (char === span.innerText) {
      span.classList.add("correct");
      span.classList.remove("incorrect");
    } else {
      span.classList.add("incorrect");
      span.classList.remove("correct");
    }
  });
});

restartBtn.addEventListener("click", () => {
  time = 30;
  isStarted = false;
  input.disabled = false;
  input.value = "";
  timeEl.textContent = time;
  wpmEl.textContent = 0;
  accuracyEl.textContent = "100%";
  gradeEl.textContent = "-";
  clearInterval(timer);
  renderText();
});

renderText();
