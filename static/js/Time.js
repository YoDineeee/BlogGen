// Initialize variables
let studyTime = 0;
let restTime = 0;
let isPaused = true;
let isStudyPhase = true;
let timerInterval;
let remainingTime;

// Get HTML elements
const timerDisplay = document.getElementById("timerDisplay");
const timerOptions = document.getElementById("timerOptions");
const startPauseButton = document.getElementById("startPauseButton");

// Set up timer options based on user selection
function setTimerOptions() {
    const [studyMinutes, restMinutes] = timerOptions.value.split(",").map(Number);
    studyTime = studyMinutes * 60;
    restTime = restMinutes * 60;
    remainingTime = studyTime;
    updateDisplay(remainingTime);
}

// Start or pause the timer
function startPauseTimer() {
    if (isPaused) {
        if (!timerInterval) {
            remainingTime = isStudyPhase ? studyTime : restTime;
        }
        timerInterval = setInterval(countdown, 1000);
        startPauseButton.textContent = "Pause";
    } else {
        clearInterval(timerInterval);
        startPauseButton.textContent = "Resume";
    }
    isPaused = !isPaused;
}

// Countdown function
function countdown() {
    if (remainingTime <= 0) {
        isStudyPhase = !isStudyPhase;
        remainingTime = isStudyPhase ? studyTime : restTime;
        alert(isStudyPhase ? "Back to Study Time! 📘" : "Time for a Break! ☕️");
    } else {
        remainingTime--;
        updateDisplay(remainingTime);
    }
}

// Update the timer display
function updateDisplay(seconds) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${secs}`;
}

// Set up event listeners
timerOptions.addEventListener("change", setTimerOptions);
startPauseButton.addEventListener("click", startPauseTimer);

// Initialize timer display
setTimerOptions();


$(document).ready(function() {
    $('.countdown').final_countdown({
    start: '1362139200',
    end: '1388461320',
    now: '1387461319',
    selectors: {
        value_seconds: '.clock-seconds .val',
        canvas_seconds: 'canvas_seconds',
        value_minutes: '.clock-minutes .val',
        canvas_minutes: 'canvas_minutes',
        value_hours: '.clock-hours .val',
        canvas_hours: 'canvas_hours',
        value_days: '.clock-days .val',
        canvas_days: 'canvas_days'
    },
    seconds: {
        borderColor: '#7995D5',
        borderWidth: '6'
    },
    minutes: {
        borderColor: '#ACC742',
        borderWidth: '6'
    },
    hours: {
        borderColor: '#ECEFCB',
        borderWidth: '6'
    },
    days: {
        borderColor: '#FF9900',
        borderWidth: '6'
    }}, function() {
    // Finish callback
    });
    });