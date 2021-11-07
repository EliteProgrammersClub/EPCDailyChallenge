/*
	*** A SIMPLE PROGRAM TO REVERSE AN INTEGER IN C ***

	by: Agyingi Jan Royal
*/
#include<stdio.h>


int reverseInt(int num){

	//to hold the reversed integer
	int reverse = 0;


	while(num!=0){
		
		//(num % 10) gets  the least significant digit of num 
		//and is then appended to the end of reverse.
		reverse = (reverse * 10) + (num % 10);
		
		//divide num by 10 to delete the least significant digit
		// e.g 13/10 = 1; (integer division)  
		num = num/10;
	}

return reverse;
}


int main(){

	printf("%d\n",reverseInt(15));

	printf("%d\n",reverseInt(981));

	printf("%03d\n",reverseInt(500));

	printf("%d\n",reverseInt(-15));

	printf("%03d\n",reverseInt(-90));

	return 0;
}
