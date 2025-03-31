// Color options array
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

// Prompt for user input
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

// Store input in an object
const userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]
};

// Array check (required)
console.log("The first color in the array is:", colors[0]); // should output grey HEX

// Apply color to background
document.body.style.backgroundColor = userInfo.selectedColor;

// Welcome message
if (userName) {
    // Create a welcome message element
    const welcomeMessage = document.createElement("div");
    welcomeMessage.className = "welcome-message";
    welcomeMessage.style.position = "fixed";
    welcomeMessage.style.top = "10px";
    welcomeMessage.style.right = "10px";
    welcomeMessage.style.background = "#333";
    welcomeMessage.style.color = "#fff";
    welcomeMessage.style.padding = "10px";
    welcomeMessage.style.borderRadius = "5px";
    welcomeMessage.style.zIndex = "1000";
    welcomeMessage.textContent = `Welcome, ${userName}!`;
    
    // Add to body
    document.body.appendChild(welcomeMessage);
    
    // Remove after 5 seconds
    setTimeout(() => {
        welcomeMessage.style.opacity = "0";
        welcomeMessage.style.transition = "opacity 1s ease";
        setTimeout(() => welcomeMessage.remove(), 1000);
    }, 5000);
}