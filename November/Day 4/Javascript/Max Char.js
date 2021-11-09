// By @Samuel Tiokeng
// on Nov 5 2021
// Description: A Program to get the highest number of chars from a string

function maxChar(str) {
    let string = "The max Character"
    let chars = {};

    for(let char of string) {
        if(!chars[char]) {
            char = 1;
        } else {
            char++
        }
    }

    return chars;
}