// By @Samuel Tiokeng
// on Nov 5 2021
// Description: A Program to get the highest number of chars from a string

function maxChar(str) {
    let string = "The max Character" //Getting the max character
    let chars = {}; // Initializing an empty chars array

    for(let char of string) { // Looping through the string
        if(!chars[char]) { // Checking if the position in the string is not present in the array
            char = 1; // if it is true it will initialize char to 1
        } else {
            char++; // if it is present it will increment the value of char
        }
    }

    return chars; // Returning the array of characters
}