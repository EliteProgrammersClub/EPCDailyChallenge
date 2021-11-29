#include <stdio.h>

// The numberOfLetters function, gets the number of characters the person has entered
// so that the reverse function can iterate through the loop

int numberOfLetters(char word[]){
    int count = 0;
       while(count>=0 ) {
         count++;
        if(word[count-1] == '\0') {
            return count-1; 
        }
       
    }
}



void reverse(char word[]){
    int num = numberOfLetters(word);
    for(int i=num; i>=0; i--){
        printf("%c", word[i]);
    }

    printf("\n");
    return;
}

int main() {

    reverse("Greetings!");

}