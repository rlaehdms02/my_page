const audio = document.getElementById('my-audio');
const visualBg = document.getElementById('visual-bg');
const centerObject = document.getElementById('center-object');
const themeText = document.getElementById('theme-text');
const timeDisplay = document.getElementById('time-display');

const TRANSITION_TIME = 30; 

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds} / 0:58`;

    if (currentTime >= TRANSITION_TIME) {
        visualBg.classList.remove('space-theme');
        visualBg.classList.add('pyramid-theme');
        
        centerObject.classList.remove('planet');
        centerObject.classList.add('pyramid');
        
        themeText.textContent = "PYRAMID VIBES";
    } else {
        visualBg.classList.remove('pyramid-theme');
        visualBg.classList.add('space-theme');
        
        centerObject.classList.remove('pyramid');
        centerObject.classList.add('planet');
        
        themeText.textContent = "SPACE VIBES";
    }
});
