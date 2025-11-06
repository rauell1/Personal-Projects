#Objective: Simulate a traffic light system.

#Conditions:

#light == "red": Print "Stop."
#light == "yellow": Print "Get ready to move."
#light == "green": Print "Go!"

import random

light = ["red", "yellow", "green"]


traffic_light = random.choice(light)

if traffic_light == "red":
    print("Stop!")

elif traffic_light == "yellow":
    print("Get Ready!")

elif traffic_light == "green":
    print("Go!")

