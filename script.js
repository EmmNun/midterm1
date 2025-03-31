// Color Options Array
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

// Prompt for User Input
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

// Store Input in an Object
const userInfo = { 
    name: userName, 
    selectedColor: colors[colorChoice] 
};

// Array Check (Required)
console.log("The first color in the array is:", colors[0]); // should output grey HEX

// Apply Color to Background
document.body.style.backgroundColor = userInfo.selectedColor;

// Optional: Welcome message
if (userName) {
    const welcomeMsg = document.createElement('p');
    welcomeMsg.textContent = `Welcome, ${userName}! Enjoy your visit to our volleyball site.`;
    welcomeMsg.style.textAlign = 'center';
    welcomeMsg.style.padding = '1rem';
    welcomeMsg.style.backgroundColor = 'rgba(255,255,255,0.7)';
    document.querySelector('header').appendChild(welcomeMsg);
}
