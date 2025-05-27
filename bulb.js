document.addEventListener('DOMContentLoaded', () => {
    const bulbImage = document.getElementById('bulbImage');
    const radioOn = document.getElementById('radioOn');
    const radioOff = document.getElementById('radioOff');
    const buttonOn = document.getElementById('buttonOn');
    const buttonOff = document.getElementById('buttonOff');
    const checkboxToggle = document.getElementById('checkboxToggle');
    const unifiedToggleButton = document.getElementById('unifiedToggleButton');

    // Function to set the bulb state
    function setBulbState(isOn) {
        if (isOn) {
            bulbImage.src = 'bulb-on.png';
            bulbImage.alt = 'Bulb is on';
            radioOn.checked = true;
            checkboxToggle.checked = true;
        } else {
            bulbImage.src = 'bulb-off.png';
            bulbImage.alt = 'Bulb is off';
            radioOff.checked = true;
            checkboxToggle.checked = false;
        }
    }

    // Initialize bulb state to off
    setBulbState(false);

    // Event Listeners for Radio Buttons
    radioOn.addEventListener('change', () => {
        if (radioOn.checked) {
            setBulbState(true);
        }
    });

    radioOff.addEventListener('change', () => {
        if (radioOff.checked) {
            setBulbState(false);
        }
    });

    // Event Listeners for Clickable Buttons
    buttonOn.addEventListener('click', () => {
        setBulbState(true);
    });

    buttonOff.addEventListener('click', () => {
        setBulbState(false);
    });

    // Event Listener for Checkbox
    checkboxToggle.addEventListener('change', () => {
        setBulbState(checkboxToggle.checked);
    });

    // Event Listener for Unified Toggle Button
    unifiedToggleButton.addEventListener('click', () => {
        const currentBulbState = bulbImage.src.includes('bulb-on.png');
        setBulbState(!currentBulbState); // Toggle the state
    });
});