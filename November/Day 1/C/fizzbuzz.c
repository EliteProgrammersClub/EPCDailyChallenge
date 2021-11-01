/**
 * @file: Write a program that console logs the nubers from 1 to n. 
 * But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz". 
 * For numbers which are multiples of both three and five print "fizzbuzz" .Make use of functions and methods where necessary.
 **/

#include <stdio.h>  //for I/O operations.

//prototype
void fizzBuzz(int );

int main(void){
    int n;
    printf("Enter number: ");
    scanf("%d", &n);

    fizzBuzz(n);
    return 0;
}

/**
 * @brief: Prints numbers from 1 to n in the form above
 * @param n: stop interger.
 * @return: void.
 **/

void fizzBuzz(int n){
    for(int i = 1; i <= n; i++){
        if (i % 3 == 0 && i % 5 == 0)
            printf("fizzbuzz\n");
        else if (i % 3 == 0)
            printf("fizz\n");
        else if(i % 5 == 0)
            printf("buzz\n");
        else 
            printf("%d\n", i);
    }
}