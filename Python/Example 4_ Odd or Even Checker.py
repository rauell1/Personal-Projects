#Objective: Create a program that takes a number as input and checks if it is odd or even.

#Conditions:

#Use the modulo operator % to determine if the number is divisible by 2.

number = int(input("Enter a number: "))

if number % 2 == 0:
    print("Even number.")
else:
    print("Odd number.")
