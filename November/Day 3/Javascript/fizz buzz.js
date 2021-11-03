function myFunc(n){
    // variable use to track value of n
    let i = 1;
    while(i <= n){
        // check if i is a multiple of 3 and 5
        if(i % 3 == 0 && i % 5 == 0)
        console.log('fizzbuzz');
        // check if i is a multiple of 3
        else if(i % 3 == 0)
        console.log('fizz');
        // check if i is a multiple of 5
        else if(i % 5 == 0)
        console.log('buzz');
        // else we print the values of i and increment and check conditions again
        else
        console.log(i);
        i++;
    }
    }    
    // passing values to the function by asking input from user
myFunc(prompt('Enter a number'));