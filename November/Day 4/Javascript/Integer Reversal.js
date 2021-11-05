// @Samuel Tiokeng
// on 4 Nov 2021
// Description: A Program to reverse the order of an integer

function IntegerReversal(n) {
    parseFloat( //Parsing to ease sign assignment
    n
      .split('') // spliting the elements with a space in an array
      .reverse() // Reverse the elements in the array
      .join() // Join all the reversed values together again
    ) * Math.sign(num) // Multiplying the whole answer with the sign to get the end result with its initial sign

}

//Driver code
IntegerReversal(3435);