// [November]/[Day 2]/[Javascript]/{reverseString.js}

/*  Given a string, return a new string with reversed order of character. Make use of Functions and Methods where necessory_

You can code this with any language of your choice! */


function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));   // olleh