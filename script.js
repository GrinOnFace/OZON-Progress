const progressCircle = document.querySelector('#progressCircle');
const valueInput = document.querySelector('#valueInput');
const animateToggle = document.querySelector('#animateToggle');
const hideToggle = document.querySelector('#hideToggle');
const customAlert = document.querySelector('#customAlert');

const animationDuration = '2s';
const rotateAnimation = 'rotate 2s linear infinite';
const hiddenVisibility = 'hidden';
const visibleVisibility = 'visible';
const displayNone = 'none';
const displayBlock = 'block';

function updateProgress(value) {
    const percentage = Math.min(Math.max(value, 0), 100);
    const endAngle = (percentage / 100) * 360;
    progressCircle.style.background = `conic-gradient(var(--primary-color) 0deg, var(--primary-color) ${endAngle}deg, var(--secondary-color) ${endAngle}deg)`;
}

valueInput.addEventListener('input', function() {
    const value = parseInt(this.value, 10);
    if (value >= 0 && value <= 100) {
        customAlert.style.display = displayNone;
        updateProgress(value);
    } else {
        customAlert.style.display = displayBlock;
    }
});

animateToggle.addEventListener('change', function() {
    progressCircle.style.animation = this.checked ? rotateAnimation : displayNone;
});

hideToggle.addEventListener('change', function() {
    progressCircle.style.visibility = this.checked ? hiddenVisibility : visibleVisibility;
});

updateProgress(valueInput.value);
