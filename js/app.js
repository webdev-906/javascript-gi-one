// VERY EASY: C reate two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4

let num1 = 10; 
let num2 = 5;
const result = num1 - num2;  

// template literals
console.log(`The difference between ${num1} and ${num2} is ${result}`);

// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.                                           Example output: “The name Thomas is longer than John by 2 characters”

let longName = "Latonya";
let shortName = "John";
console.log(`${longName} is longer than ${shortName} by 3 characters`)


// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

let pizza = prompt("Enter the word pizza");

if (pizza == pizza.toUpperCase()){
  console.log("The user is yelling")
}

else if (pizza == pizza.toLowerCase()){
 console.log("The user is whispering"); 
}

else {
  console.log("The user is talking normally")
}



// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

const addition = (a, b) => a + b
const subtraction = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

console.log(addition(100, 90))
console.log(subtraction(100, 90))
console.log(multiply(100, 90))
console.log(divide(100, 90))


// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

function simpleCalulator (){
let numOne = Number(prompt("Enter your first number"));
let numTwo = Number(prompt("Enter your second number"));
let operator = prompt("Enter either +, -, *, / ");

if (operator == "+"){
  let additionResult = addition(numOne, numTwo);
  alert((`${numOne} + ${numTwo} = ${additionResult}`));
}
else if (operator == "-"){
  let subtractionResult = subtraction(numOne, numTwo);
  alert((`${numOne} - ${numTwo} = ${subtractionResult}`));
}
else if(operator == "*") {
  let multiplicationResult = multiply(numOne, numTwo);
  alert((`${numOne} * ${numTwo} = ${multiplicationResult}`)); 
}
else if(operator == "/") {
  let divisionResult = divide(numOne, numTwo);
  alert((`${numOne} / ${numTwo} = ${divisionResult}`));
}
 }

simpleCalulator()



