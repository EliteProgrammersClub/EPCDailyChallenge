// By @Samuel Tiokeng
// on 04 Nov 2021
// Description: A program to find the Body mass Index(BMI) for a human being

 function BMI(weight, height) {

    let bmi = weight/(height * height); // Fomular to find BMI
    console.log(bmi) // Consoling BMI
 }

 // Driver Code
 let weight = 50;
 let height = 1.7;

 BMI(weight, height);


