#Objective:

#Write a program that asks the user for a temperature in Celsius and checks whether it is hot, warm, or cold. Provide appropriate messages for each case.

#Conditions:

#temp > 30: Print "It's hot outside!"
#15 <= temp <= 30: Print "It's a warm day."
#temp < 15: Print "It's cold outside."

room_temp = int(input("What is the temperature reading as shown in the thermometer? "))

if room_temp > 30:
    print("It's hot outside!")
    
elif room_temp < 15: # elif 15 <= room_temp <= 30:
    print("It's a cold outside.")
    
else:
    print("It's a warm day.")
    
