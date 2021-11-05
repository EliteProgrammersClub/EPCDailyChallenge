// [November]/[Day 4]/[Javascript]/{Palidrome.js}

/* Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if it is reversed. Do include spaces and punctuation in determining if the string is a palindrome. Make use of Functions and Methods where necessory */

// Declaration function
function palindrome(str){
    var len = str.length;  // assign the length of string
    var mid = Math.floor(len / 2);  //round down  the length of string

// checking the string
    for (let i = 0; i < mid; i++){   // iterate through string
        if (str[i] !== str[len - 1 - i]) {   // checking whether the string are thesame or not when reverse it
            return false;
        }
    }
    return true;
}

console.log(palindrome("abba"));  // true
