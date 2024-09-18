//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        
        // Stop currently playing audio if any
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset to start
        }
        
        // Play new audio
        currentAudio = new Audio(soundFile);
        currentAudio.play();
    });
});

// Stop button functionality
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to start
    }
});