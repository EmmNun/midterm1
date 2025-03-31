const colors = ["#fff9f7", "#fefff7", "#f7fff7"];
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");
const userInfo = { name: userName, selectedColor: colors[colorChoice] };
document.body.style.backgroundColor = userInfo.selectedColor;
