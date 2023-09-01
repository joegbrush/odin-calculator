// Create add function
// Create subtract function
// Create multiply function
// Create divide function
// Create variable for each part of operation - number, operator, anotherNumber
// Create function 'operate' that takes the operator and 2 numbers and calls the function on the numbers
// Create a basic html calculator with buttons for each number, each operator function and a 'equals' key
// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step

// Operator parts
let firstNumber = prompt("Input first number");
let operator = prompt("Input operator: +, -, *, or /.");
let secondNumber = prompt("Input second number");

// Add function
function add(number, anotherNumber) {
  return Number(number) + Number(anotherNumber);
}

// Subtract function
function subtract(number, anotherNumber) {
  return Number(number) - Number(anotherNumber);
}

// Multiply function
function multiply(number, anotherNumber) {
  return Number(number) * Number(anotherNumber);
}
// Divide function
function divide(number, anotherNumber) {
  return Number(number) / Number(anotherNumber);
}

// Operator function
function operate(operatorSymbol) {
  if (operatorSymbol == "+") return add(firstNumber, secondNumber);
}

console.log(operate(operator));
