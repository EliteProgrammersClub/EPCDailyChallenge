// [November]/[Day 11]/[Javascript]/{reverseInteger.js}
    
/* Given an integer, return an integer that is the revers ordering of numbers while considering thier sign. Make use of functions where neccesory. */
    
function reverseInteger(num) {
    var digit, result = 0;

    while (num) {
        digit = num % 10;  // Get right-most digit. Ex. 981/10 => 98.1 => 1
        result = (result * 10) + digit;  // Ex. 981 => 9810 + 2 => 9812
        num = num/10|0;  // Remove right-most digit. Ex. 981 => 98.1 => 98
    }
    return result;
}

console.log(reverseInteger(981));  // 189