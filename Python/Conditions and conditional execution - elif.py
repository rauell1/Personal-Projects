#weather_is_good = False
weather_is_good = str(input("The weather today is good isnt it? "))
tickets_are_available = False
table_is_available = False
def go_for_a_walk():
    print("We will go for a walk.")
def go_to_the_theater():
    print("We will go to the theatre.")
def go_for_lunch():
    print("We will go for lunch.")
def play_chess_at_home():
    print("We will stay at home and play chess.")

if weather_is_good:
    go_for_a_walk()
elif tickets_are_available:
    go_to_the_theater()
elif table_is_available:
    go_for_lunch()

else:
    play_chess_at_home()
