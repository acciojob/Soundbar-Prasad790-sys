const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Create an audio element for each sound
sounds.forEach(sound => {
    const btn = document.getElementById(sound);

    // Add event listener to play the sound
    btn.addEventListener('click', () => {
        stopSounds();  // Stop any currently playing sounds
        const audio = document.getElementById(sound);
        if (audio) {
            audio.play();  // Play the selected sound
        }
    });

    // Create and append audio elements
    const audio = document.createElement('audio');
    audio.id = sound;
    audio.src = `sounds/${sound}.mp3`;  // Ensure this path matches your folder structure
    document.body.appendChild(audio);
});

// Stop all sounds when the stop button is clicked
document.querySelector('.stop').addEventListener('click', () => {
    stopSounds();
});

// Function to stop all sounds
function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        if (audio && typeof audio.pause === 'function') {
            audio.pause();
            audio.currentTime = 0;  // Reset sound to the beginning
        }
    });
}