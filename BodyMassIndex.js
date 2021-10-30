/* Write a program to calculate the mass body index of a person, taken in the person, weight,age and height. */

// Algorithm
// but we know BMI = mass/height**2

/*
START
step 1: we are going to take the BMI equation above and assign it to a variable called bmi.
step 2: we will use a quatenary operator to compare our calculated bmi.
step 3: print out our result.
END
*/

function bmi(age, weight, height) {
    var bmi = weight / (height ** 2);
    return bmi < 18.5 ? `I am ${age}years Underweight` : (bmi < 25 ? `I am ${age}years Normal` : (bmi < 30 ? `I am ${age}years Overweight` : `I am ${age}years Obese`));  // Gives us the state of the person weight 
}

console.log(bmi(23,64,1.81));  // I am 23years Normal
