// [November]/[Day 10]/[Javascript]/{sentenceCapitalize.js}

/* Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string. Use functions and methods where needed. */

function capitalize(text) {
    var wordsArray = text.toLowerCase().split(' ');  // The split method return an array of all text in the lowercase sentence
    var capsArray = wordsArray.map(word => {  // The map method iterate through every word in the array
        return word[0].toUpperCase() + word.slice(1);  // Here the first letter of the word is capitalized, the slice method extract a section of the string and return it as a new string
    })
    return capsArray.join(' ');  // Gives us a capitalized sentence by joining the word in the capsArray with blank spaces the separator
}

console.log(capitalize("hello world my name is junior"));  // Hello World My Name Is Junior