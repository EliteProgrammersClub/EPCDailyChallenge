// By @Samuel Tiokeng
// on Nov 9 2021
// Description: Program to find the fizzbuzz. Where if the entered value is a multiple of 3 and 5, it prints fizz and buzz
// respectively and when both it prints fizzbuzz 


function fizzbuzz(n) {
    for(let i = 1; i < n; i++) {
        if(n % 3) {
            console.log("fizz")
        } 
        else if(n % 5) {
            console.log("buzz")
        }
        else if((n % 3) && (n % 5)) {
            console.log("fizzbuzz")
        }
        else {
            console.log(i)
        }
    }
}