let timerInterval;
let remainingTime = 0;
let isPaused = false;

function startTimer() {
    // If already paused and there's remaining time, just resume the timer
    if (isPaused && remainingTime > 0) {
        isPaused = false;
        runTimer(remainingTime);
        return;
    }

    // Get the selected timer duration
    const timerOptions = document.getElementById("timerOptions").value.split(",");
    const workTime = parseInt(timerOptions[0]);

    // Initialize remainingTime and start the timer
    remainingTime = workTime;
    runTimer(remainingTime);
}

function runTimer(time) {
    const timerDisplay = document.getElementById("timerDisplay");
    
    // Clear any existing interval before starting a new one
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (time <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up!";
            return;
        }

        remainingTime = time; // Update remaining time
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        // Update the timer display
        timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        time--; // Decrement time
    }, 1000);
}

function pauseTimer() {
    if (!isPaused) { // Only pause if it's not already paused
        clearInterval(timerInterval);
        isPaused = true;
    }
}
