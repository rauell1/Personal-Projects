#Objective: Simulate an ATM where users must input a correct PIN to proceed.

#Allow only 3 attempts before locking the system.
correct_pin = 1234
attempts_remaining = 3

while True:
    print("\nWelcome to ABC Bank")
    print("1. Enter PIN")
    print("2. Exit")

    # User selects an option
    choice = int(input("Which option do you want to choose? "))

    if choice == 1:
        while attempts_remaining > 0:
            pin = int(input("Enter PIN: "))
        if pin == correct_pin:
            print("You have entered the correct pin. Welcome!")
            
        else: 
            attempts_remaining -= 1
            if attempts_remaining > 0:
                print("You have ", attempts_remaining, "attempts remaining.")

            else:
                print("You have used all attempts. Your account is locked.")
                break

# Exit the outer loop if the user is locked out
        if attempts_remaining == 0 or pin == correct_pin:
            break

    elif choice == 2:
        print("Thank you for choosing to work with us!")
        break

    else:
        print("Invalid Choice! Please select a valid option.")
