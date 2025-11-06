
# Read three numbers.
number1 = int(input("Enter the first number: "))
number2 = int(input("Enter the second number: "))
number3 = int(input("Enter the third number: "))
 
# Check which one of the numbers is the greatest
# and pass it to the largest_number variable.
 
largest_number = max(number1, number2, number3)
 
# Print the result.
print("\nThe largest number is:", largest_number)
 
 
#Objective: Simulate a simple banking app where users can check their balance, deposit money, or withdraw money.

#Conditions:

#If the withdrawal amount exceeds the balance, print "Insufficient funds."
#If the balance is below a certain threshold (e.g., $10), print a warning.

account_balance = 50000

while True:
    print("\nWelcome to your banking app!")
    print("1. Check Balance")
    print("2. Withdraw")
    print("3. Deposit")
    print("4. Exit")

    #Get User Input
    choice =  int(input("Which option do you want? "))

    if choice == 1:
        print("Your account balance is ", account_balance)

        if account_balance < 10:
            print("Your account balance is too low!")    

    elif choice ==2:
        withdraw = int(input("How much are you withdrawing? "))
        print("You have successfully withdrawn ", withdraw )  
        print("Your account balance is ", account_balance- withdraw )

        if withdraw > account_balance:
            print("Your account balance is insufficient to complete this transaction.")
            
        elif withdraw < 10:
            print("The minimum withdrawal limit is 10. Try again!")

        else:
            print("Your withdrawal is successful") 
            if account_balance - withdraw < 10:
                print("Your account balance is too low!")

    elif choice == 3:
        deposit = int(input("Enter the amount you wish to deposit "))
        print("You have deposited ", deposit)
        print("The new account balance is ", deposit + account_balance)

        if deposit < 10:
            print("Mimimum deposit is 10. TOp up and try again")

        else:
            print("Your deposit was successful.")

    elif choice == 4:
        print("Thank you for choosing to work with us")
        break

    else:
        print("Invalid Choice")



