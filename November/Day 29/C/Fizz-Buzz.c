#include <stdio.h>

void fizzBuzz(int n){
    for(int i = 1; i <= n; i++){
       
       if(i>=5 && i%5==0 && i >= 3 && i%3 == 0){
           printf("fizzbuzz\n");
        }
        else if(i >= 3 && i%3 == 0){

            printf("fizz\n");

        }else if(i>=5 && i%5==0) {
            printf("buzz\n");
        }
        
        else{
            printf("%d\n", i);
        }
        
    }
    return;
}

int main() {

fizzBuzz(30);
}