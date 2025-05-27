function displayName() {
    // Get the input element by its ID
    const nameInput = document.getElementById('userNameInput');

    // Get the value (text) entered by the user
    const userName = nameInput.value;

    // Get the HTML elements where we want to display the name
    const nameAsH1 = document.getElementById('nameAsH1');
    const nameAsParagraph = document.getElementById('nameAsParagraph');
    const nameAsDiv = document.getElementById('nameAsDiv');

    // Set the text content of each element
    // Using textContent is safer than innerHTML for user input to prevent XSS attacks
    nameAsH1.textContent = userName ? `Hello, ${userName}!` : 'Please enter a name.';
    nameAsParagraph.textContent = userName ? `Your name is: ${userName}` : 'No name entered.';
    nameAsDiv.textContent = userName ? `The user entered: ${userName}` : 'Name will appear here.';

    // Optional: Clear the input field after displaying
    // nameInput.value = '';
}