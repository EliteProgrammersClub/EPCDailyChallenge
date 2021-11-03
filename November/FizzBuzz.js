// [November]/[Day 2]/[Javascript]/{FizzBuzz.js}

/* Print all the number from 1 to n, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5, print "Buzz" instead. */

for (let i = 1; i <= 100; i++) {
  if (i % 3 != 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
    if (i % 5 != 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

/* Modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 */

for (let i = 1; i <= 100; i++){
    if ((i % 3 != 0) && (i % 5 != 0)) {
        console.log("FizzBuzz");
    }
    else console.log(i);
}

/* and still print "Fizz" or "Buzz" for numbers divisible by only one of those. */

for (let i = 1; i <= 100; i++) {
    if (i % 3 != 0) {
        console.log("Fizz");
    }
    else if (i % 5 != 0) {
        console.log("Buzz");
    }
    else console.log(i);
}

