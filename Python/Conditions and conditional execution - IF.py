
#IF   

def go_for_walk():
    print("You went for a walk!")

def have_lunch():
    print("You had lunch!")

weather_is_good = True

if weather_is_good:
    go_for_walk()
have_lunch()


print()
def stay_in():
    print("You stay in the house!")

def play_indoor_games():
    print("You play indoor games!")

weather_is_bad = True # Change this to False to test the behavior

if weather_is_bad:
    stay_in()
play_indoor_games()


print()
def stay_in():
    print("You stay in the house!")

def play_indoor_games():
    print("You play indoor games!")

weather_is_bad = False 

if weather_is_bad:
    stay_in()
play_indoor_games()


    
#New Line

print()

def make_a_bed():
    print("You first have to make your bed!")

def take_a_shower():
    print("Then you go take a shower!")
          
def sleep_and_dream():
    print("Lastly, got to bed and sleep.")

def feed_the_sheepdogs():
    print("Wake up in the morning to feed the sheepdogs.")

sheep_counted = int(input("Enter number of sheep counted: "))

if sheep_counted >= 100:
    make_a_bed()
    take_a_shower()
    sleep_and_dream()
feed_the_sheepdogs()





