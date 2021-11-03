[November/Day 1/Python]{Body Mass Index.py}
"""written on the 29/10/2021
BMI Calculator"""
weight = abs(int(input("please enter your weight\n")))
age = int(input("please enter your age\n"))
height = abs(float(input("please enter your height\n")))
body_mass_index = weight // height
body_mass1 = "{:.1f}".format(body_mass_index)
body_mass = float(body_mass1)
if age >= 18 and age <= 65:
    if (body_mass >= 18.5) and (body_mass <= 24.9):
        print("Your BMI is"+ body_mass + "Your living healthy ")
    elif (body_mass >= 25.0):
        print("Your BMI is " + body_mass + "Your overweight!")
    else:
        print("Your BMI is ",body_mass ,"Your underweight!")
else:
    print("Below or above expected age group. Invalid!")
