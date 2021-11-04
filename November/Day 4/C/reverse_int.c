/*
	*** A SIMPLE PROGRAM TO REVERSE AN INTEGER IN C ***

	by: Jan
*/
#include<stdio.h>


int reverseInt(int num){
	 int reverse = 0;
	while(num!=0){
		reverse = (reverse * 10) + (num%10);
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
