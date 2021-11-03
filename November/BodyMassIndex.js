// [November]/[Day 2]/[Javascript]/{BodyMassIndex.js}

/* Write a program to calculate the mass body index of a person, taken in the person, weight,age and height. */

// but we know BMI = mass/height**2

let age = prompt("Enter your age");  // prompt the user to enter he or she age
let weight= prompt("Enter your weight ");   // prompt the user to enter he or she age
let height= prompt("Enter your height");   // prompt the user to enter he or she age
const BMI = weight / (height ** 2);  // formula of Body Mass Index

function bmi() {
    return BMI < 18.5 ? `I am ${age} years Underweight` : (BMI < 25 ? `I am ${age} years Normal` : (BMI < 30 ? `I am ${age} years Overweight` : `I am ${age} 232years Obese`));  // Gives us the state of the person weight 
}

console.log(bmi());  // call the function


