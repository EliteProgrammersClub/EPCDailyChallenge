/* Write a program to calculate the mass body index of a person, taken in the person, weight,age and height. */

// Algorithm
// but we know BMI = mass/height**2

/*
START
step 1: we are going to prompt the user to enter he or she age, weight, height and assign it to variables.
step 2: we are going to take the BMI equation above and assign it to a variable called bmi.
step 3: we will use a quatenary operator to compare our calculated bmi.
step 4: print out our result.
END
*/

let age = prompt("Enter your age");  // prompt the user to enter he or she age.
let weight= prompt("Enter your weight ");   // prompt the user to enter he or she weight.
let height= prompt("Enter your height");   // prompt the user to enter he or she height.
const BMI = weight / (height ** 2);  // formula of Body Mass Index

function bmi() {
    return BMI < 18.5 ? `I am ${age} years Underweight` : (BMI < 25 ? `I am ${age} years Normal` : (BMI < 30 ? `I am ${age} years Overweight` : `I am ${age} years Obese`));  // Gives us the state of the person weight 
}

console.log(bmi());  // call the function
