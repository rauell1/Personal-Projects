#Objective: Ask the user for their age and classify them into age groups.

#Conditions:

#age < 13: Print "Child"
#13 <= age < 20: Print "Teenager"
#20 <= age < 65: Print "Adult"
#age >= 65: Print "Senior"

age = int(input("How old are you? "))

if age < 13:
    print("Child")
elif 13 <= age < 20:
    print("Teenager")
elif 20 <= age < 65:
    print("Adult")
else:
    print("Senior")
