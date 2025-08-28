// ==============================
// Part 1: Variables & Conditionals
// ==============================
let age = 20;
const name = "Alice";

if (age >= 18) {
  document.getElementById("ageMessage").textContent = `${name} is an adult.`;
} else {
  document.getElementById("ageMessage").textContent = `${name} is a minor.`;
}

// ==============================
// Part 2: Functions
// ==============================

// Function 1: Add two numbers
function addNumbers(a, b) {
  return a + b;
}
let total = addNumbers(10, 15);
document.getElementById("sumResult").textContent = `Sum of 10 and 15 is ${total}`;

// Function 2: Greet user by name
function greetUser(userName) {
  return `Hello, ${userName}! Welcome to JS Mastery.`;
}
document.getElementById("greeting").textContent = greetUser(name);

// ==============================
// Part 3: Loops
// ==============================

let fruits = ["Apple", "Banana", "Cherry", "Date"];
let fruitList = document.getElementById("fruitList");

// Loop 1: Display fruits in a list
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  fruitList.appendChild(li);
}

// Loop 2: Countdown from 5
let countdownText = "";
let count = 5;
while (count > 0) {
  countdownText += `Countdown: ${count}\n`;
  count--;
}
document.getElementById("countdown").textContent = countdownText;

// ==============================
// Part 4: DOM Interactions
// ==============================

// DOM Interaction 1: Change background color
document.getElementById("colorButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "#e0f7fa";
  document.getElementById("colorMessage").textContent = "Background color changed!";
});

// DOM Interaction 2: Toggle highlight class
document.getElementById("toggleButton").addEventListener("click", () => {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// DOM Interaction 3: Greet user from input
document.getElementById("greetButton").addEventListener("click", () => {
  const inputName = document.getElementById("nameInput").value;
  document.getElementById("greetMessage").textContent = greetUser(inputName || "Guest");
});
