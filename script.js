// Array of color options
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

// Prompt for user input
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color:\n0 for grey\n1 for yellow\n2 for green");

// Store input in an object
const userInfo = { 
    name: userName, 
    selectedColor: colors[colorChoice] 
};

// Array check
console.log("The first color in the array is:", colors[0]); // should output grey HEX

// Apply color to background
if (userInfo.selectedColor) {
    document.body.style.backgroundColor = userInfo.selectedColor;
}

// Welcome message if name was provided
if (userName) {
    const welcomeMsg = document.createElement('div');
    welcomeMsg.className = 'welcome-message';
    welcomeMsg.innerHTML = `<p>Welcome, ${userName}! Enjoy your visit to Volleyball World.</p>`;
    document.body.insertBefore(welcomeMsg, document.body.firstChild);
    
    // Style the welcome message
    const style = document.createElement('style');
    style.textContent = `
        .welcome-message {
            background: rgba(30, 60, 114, 0.9);
            color: white;
            padding: 1rem;
            text-align: center;
            margin-bottom: 0;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);
}