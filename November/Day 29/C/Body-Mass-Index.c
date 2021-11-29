#include <stdio.h>

float BodyMassIndex(float weight, int age, float height){
    float mass = weight/10;
    return mass / (height*height);
}

int main() {
    float weight, height;
    int age;
    // person enters weight
    printf("Weight(N): ");
    scanf("%f", &weight);
    //person enters age
    printf("Age: ");
    scanf("%d", &age);
    //person enters height
    printf("Height(m): ");
    scanf("%f", &height);

    float BMI = BodyMassIndex(weight, age, height);
    printf("BMI: %0.1f kg per m squared", BMI);
}