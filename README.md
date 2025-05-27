<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulb Control</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #f0f0f0;
            margin: 0;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        #bulbImage {
            width: 200px;
            height: auto;
            margin-bottom: 20px;
        }
        .controls {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .control-group {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        button.on {
            background-color: #4CAF50;
            color: white;
        }
        button.off {
            background-color: #f44336;
            color: white;
        }
        button.toggle {
            background-color: #008CBA;
            color: white;
        }
        button:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bulb Control</h1>
        <img id="bulbImage" src="bulb-off.png" alt="Bulb is off">

        <div class="controls">
            <div class="control-group">
                <input type="radio" id="radioOn" name="bulbState" value="on">
                <label for="radioOn">ON</label>
                <input type="radio" id="radioOff" name="bulbState" value="off" checked>
                <label for="radioOff">OFF</label>
            </div>

            <div class="control-group">
                <button id="buttonOn" class="on">Turn ON</button>
                <button id="buttonOff" class="off">Turn OFF</button>
            </div>

            <div class="control-group">
                <input type="checkbox" id="checkboxToggle">
                <label for="checkboxToggle">Toggle Bulb</label>
            </div>

            <div class="control-group">
                <button id="unifiedToggleButton" class="toggle">Toggle State</button>
            </div>
        </div>
    </div>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Name Display</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            min-height: 100vh;
            background-color: #f4f4f4;
            margin: 0;
            padding-top: 50px;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 80%;
            max-width: 600px;
        }
        input[type="text"] {
            padding: 10px;
            margin-right: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 70%;
            box-sizing: border-box;
        }
        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #0056b3;
        }
        .display-area {
            margin-top: 30px;
            text-align: left;
            width: 100%; /* Take full width of container */
        }
        .display-area h2 {
            color: #333;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .display-item {
            background-color: #e9ecef;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 5px;
            border: 1px solid #dee2e6;
        }
        .display-item h1 {
            color: #0056b3;
            margin: 0;
        }
        .display-item p {
            color: #28a745; /* Green for paragraph */
            margin: 0;
        }
        .display-item div {
            color: #dc3545; /* Red for div */
            margin: 0;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Enter Your Name</h1>
        <input type="text" id="userNameInput" placeholder="Type your name here">
        <button onclick="displayName()">Display Name</button>

        <div class="display-area">
            <h2>Your Name Displayed In:</h2>

            <div class="display-item">
                <h3>As an H1 Heading:</h3>
                <h1 id="nameAsH1"></h1>
            </div>

            <div class="display-item">
                <h3>As a Paragraph:</h3>
                <p id="nameAsParagraph"></p>
            </div>

            <div class="display-item">
                <h3>As a Div:</h3>
                <div id="nameAsDiv"></div>
            </div>
        </div>
    </div>

    <script>
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
    </script>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Date & Time Display</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #f0f2f5;
            color: #333;
        }

        header, footer {
            background-color: #282c34; /* Dark background for header/footer */
            color: white;
            padding: 15px 20px;
            text-align: center;
            font-size: 1.1em;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        header {
            border-bottom: 3px solid #61dafb; /* Accent color */
        }

        footer {
            margin-top: auto; /* Pushes footer to the bottom */
            border-top: 3px solid #61dafb; /* Accent color */
        }

        main {
            flex-grow: 1; /* Allows main content to take available space */
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        h1 {
            color: #282c34;
            margin-bottom: 20px;
        }

        .current-time-main {
            font-size: 2em;
            font-weight: bold;
            color: #007bff;
            background-color: #e6f7ff;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: center;
        }

        /* Styling for the time display in header/footer */
        .live-datetime {
            font-family: 'Roboto Mono', monospace; /* Monospaced font for time */
            font-size: 0.9em;
            white-space: nowrap; /* Prevent line breaks */
        }
    </style>
</head>
<body>

    <header>
        <p>Current Time in Header: <span id="headerDateTime" class="live-datetime">Loading...</span></p>
    </header>

    <main>
        <h1>Welcome to Our Page!</h1>
        <p>This is the main content area.</p>
        <div class="current-time-main">
            Live Time & Date: <br><span id="mainDateTime">Loading...</span>
        </div>
    </main>

    <footer>
        <p>Current Time in Footer: <span id="footerDateTime" class="live-datetime">Loading...</span></p>
        <p>&copy; 2025 Dynamic Page. All rights reserved.</p>
    </footer>

    <script>
        function updateDateTime() {
            const now = new Date(); // Get the current date and time

            // Options for formatting the date and time
            const options = {
                weekday: 'long', // e.g., Tuesday
                year: 'numeric',
                month: 'long',   // e.g., May
                day: 'numeric',
                hour: '2-digit', // e.g., 09
                minute: '2-digit', // e.g., 16
                second: '2-digit', // e.g., 46
                hour12: true,    // Use 12-hour clock (AM/PM)
                timeZoneName: 'short', // e.g., PKT, PST, GMT
            };

            // Format the date and time string
            const formattedDateTime = now.toLocaleString('en-US', options); // 'en-US' for common English format

            // Update the content of the header, main, and footer spans
            document.getElementById('headerDateTime').textContent = formattedDateTime;
            document.getElementById('mainDateTime').textContent = formattedDateTime;
            document.getElementById('footerDateTime').textContent = formattedDateTime;
        }

        // Call updateDateTime immediately to display the time on page load
        updateDateTime();

        // Update the time every second (1000 milliseconds)
        setInterval(updateDateTime, 1000);
    </script>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulb & Interaction Counter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #f0f0f0;
            margin: 0;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        #bulbImage {
            width: 200px;
            height: auto;
            margin-bottom: 20px;
            transition: opacity 0.3s ease; /* Smooth transition for bulb state */
        }
        button {
            padding: 12px 25px;
            font-size: 18px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #008CBA; /* Blue */
            color: white;
            transition: background-color 0.3s ease, transform 0.1s ease;
            margin-top: 20px;
        }
        button:hover {
            background-color: #007bb5;
        }
        button:active {
            transform: scale(0.98);
        }
        #clickCountDisplay {
            margin-top: 25px;
            font-size: 1.5em;
            font-weight: bold;
            color: #333;
            background-color: #e6ffe6; /* Light green background */
            padding: 10px 20px;
            border-radius: 8px;
            border: 1px solid #ccebcc;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Bulb Controller & Click Counter</h1>
        <img id="bulbImage" src="bulb-off.png" alt="Bulb is off">

        <button id="toggleBulbButton">Toggle Bulb</button>

        <p id="clickCountDisplay">Button Clicked: 0 times</p>
    </div>

    <script src="script_counter.js"></script>
</body>
</html>
