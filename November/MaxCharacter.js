// [November]/[Day 8]/[Javascript]/{MaxCharacter.js}

/* Given a string, return the character that is most commonly used in the string. Make use of functions and methods where necessory */

// To get the maximum letter
const getMaxLetter = (str) => {
    var max = 0;  // inital count
    var maxChar = '';  // create an empty string
    str.split('').forEach(char => {  // The split method return an array which the forEach mathod iterate through each character
        if (str.split(char).length > max) {  // check whether the length of character is greater than zero
            max = str.split(char).length - 1;  // assign the last character to max
            maxChar = char;  // update maxChar
        }
    });
    return `The max letter is: ${maxChar} and the max number of times it is seen is: ${max} times`;
}

console.log(getMaxLetter("hello world"));  // The max letter is: l and the max number of times it is seen is: 3 times