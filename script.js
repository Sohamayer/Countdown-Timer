let timerInterval;

function startCountdown() {
    clearInterval(timerInterval); 

    const targetInput = document.getElementById('targetDate').value;
    const targetTime = new Date(targetInput).getTime();
    const message = document.getElementById('message');

    if (!targetInput) {
        alert('Please select a valid date and time!');
        return;
    }

    timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetTime - now;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            message.textContent = '🎉 Countdown Completed!';
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        message.textContent = '';
    }, 1000);
}