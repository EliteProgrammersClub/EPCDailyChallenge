/*
	*** A SIMPLE PROGRAM TOP PRINT STEPS ***

	e.g:#
		##
		###
		####
	
	by: AGYINGI JAN ROYAL
*/

#include<stdio.h>

// function to print out steps
void steps(int num){

	//for every value of i ranging from 0 - num-1,
	//we print out '#' i times.
	for(int i=0; i<num; i++){
		for(int j=0; j<=i; j++){
				printf("#");
		}
		printf("\n");
	}

}

int main(void){


	steps(30);

}
