document.addEventListener('DOMContentLoaded', () => {
    const bulbImage = document.getElementById('bulbImage');
    const toggleBulbButton = document.getElementById('toggleBulbButton');
    const clickCountDisplay = document.getElementById('clickCountDisplay');

    let clickCount = 0; 
    let isBulbOn = false; 
   
    function updateBulbImage() {
        if (isBulbOn) {
            bulbImage.src = 'bulb-on.png';
            bulbImage.alt = 'Bulb is on';
        } else {
            bulbImage.src = 'bulb-off.png';
            bulbImage.alt = 'Bulb is off';
        }
    }

    function updateClickCountDisplay() {
        clickCountDisplay.textContent = `Button Clicked: ${clickCount} times`;
    }

    updateBulbImage(); 
    updateClickCountDisplay();

    toggleBulbButton.addEventListener('click', () => {
        isBulbOn = !isBulbOn; 
        updateBulbImage();    

        clickCount++; 
        updateClickCountDisplay(); 
    });
});