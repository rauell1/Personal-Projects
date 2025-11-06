#Objective:

#Build a program that calculates a student's grade based on a score and prints the corresponding letter grade.

#Conditions:

#score >= 90: Print "Grade: A"
#80 <= score < 90: Print "Grade: B"
#70 <= score < 80: Print "Grade: C"
#60 <= score < 70: Print "Grade: D"
#score < 60: Print "Grade: F"


grade_score = int(input("Enter the grades of the student: "))

if grade_score >= 90:
    print("Grade: A")

elif 80<= grade_score < 90:
    print("Grade: B")

elif 70 <= grade_score < 80:
    print("Grade: C")
    
elif 60 <= grade_score < 70:
    print("Grade: D")

else:
    print("Grade: F")
