#Objective: Simulate a simple banking app where users can check their balance, deposit money, or withdraw money.

#Conditions:

#If the withdrawal amount exceeds the balance, print "Insufficient funds."
#If the balance is below a certain threshold (e.g., $10), print a warning.

#Account Balance
money_balance = 400000

while True:
    #Options for the user
    print("\nWelcome to the Banking App")
    print("1. Check Balance")
    print("2. Deposit Money")
    print("3. Withdraw Money")
    print("4. Exit")

#Get user choice
    choice = int(input("What option do you want to choose? "))

    if choice == 1:
        print("\nYour balance is " , money_balance)
        if money_balance < 10:
            print("\nWarning: Your balance is critically low")

    elif choice == 2:
        money_deposit = int(input("\nHow much do you want to deposit? "))
        if money_deposit > 0:
            print("\nYou have successfully deposited " , money_deposit)
            print("\nYour new balance is " , money_deposit + money_balance)
        else:
            print("\nInvalid deposit amount")
            
    elif choice == 3:
        money_withdraw = int(input("\nHow much money do you want to withdraw? "))
        if money_withdraw > money_balance:
            print("\nYou have insufficient funds")
        elif money_withdraw < 0:
            print("\nInvalid amount")
        else:
            print("\nYou have successfully withdrawn " , money_withdraw)
            print("\nYour new balance is " , money_balance - money_withdraw)

            if money_balance < 10:
                print("\nWarning: Your balance is critically low")
                
    elif choice == 4:
        print("Thank you for using the Banking App. Goodbye!")
        break

    else:
        print("\nInvalid choice, please try again!")

