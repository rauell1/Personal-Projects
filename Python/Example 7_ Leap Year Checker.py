#Objective: Write a program that determines if a given year is a leap year.

#Conditions:

#A year is a leap year if it is divisible by 4 but not by 100, except when it is divisible by 400.
year = int(input("What year is it? "))

if (year % 4 == 0 and year % 100 !=0) or (year % 400 == 0):
    print(year , "is a leap year.")

else:
    print(year, "is not a leap year.")
