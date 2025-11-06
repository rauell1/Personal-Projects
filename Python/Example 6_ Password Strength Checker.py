#Objective: Check if a password entered by the user meets specific criteria.

#Conditions:

#At least 8 characters: Print "Strong password."
#5–7 characters: Print "Moderate password."
#Less than 5 characters: Print "Weak password."

password = str(input("Enter your password: "))
length =(len(password))
if length >= 8:
    print("Strong password.")
elif 5 <= length < 8:
    print("Moderate password.")
else:
    print("Weak password.")
