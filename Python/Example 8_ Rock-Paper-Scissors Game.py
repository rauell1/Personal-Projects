#Objective: Create a simple Rock-Paper-Scissors game where the user plays against the computer.

#Steps:

#Take the user's choice.
#Randomly generate the computer's choice.
#Use conditional statements to determine the winner.


import random

#Define the options
options = ["rock", "paper", "scissors"]

#Take the user's choice.
user_choice = input("Enter your choice (rock, paper, scissors): ").lower()

#Validate User Input
if user_choice not in options:
    print("Invalid choice/ Please choose rock, paper or scissors.")

else:
    #Randomly generate the computer's choice.
    computer_choice = random.choice(options)
    print("Computer chose: ", computer_choice)

    if user_choice == computer_choice:
        print("Play Again!")
    elif (user_choice == "rock" and computer_choice == "scissors") or (user_choice == "paper" and computer_choice == "rock") or (user_choice == "scissors" and computer_choice == "paper"):
        print("You win!")
    else:
        print("You lose! Try Againa!")
