
#IF
def read_a_book():
    print("I read Agent 47 novel.")
def make_supper():
    print("Then went and made supper.")
def clean_dishes():
    print("Lastly, I went and cleaned te dishes.")

no_work_day = False

if no_work_day:
    read_a_book()
    make_supper()
    clean_dishes()

else:
    print("Go to work!")

    
#New Line
    
print()
def read_a_book():
    print("I read Agent 47 novel.")
def make_supper():
    print("Then went and made supper.")
def clean_dishes():
    print("Lastly, I went and cleaned te dishes.")

no_work_day = True 

if no_work_day:
    read_a_book()
    make_supper()
    clean_dishes()

else:
    print("Go to work!")

  
#New Line   

print()
def go_for_walk():
    print("You went for a walk!")

def have_lunch():
    print("You had lunch!")

weather_is_good = True
if weather_is_good:
    go_for_walk()
have_lunch()


print()
def go_for_walk():
    print("You went for a walk!")

def have_lunch():
    print("You had lunch!")

weather_is_good = False # Change this to False to test the behavior

if weather_is_good:
    go_for_walk()
have_lunch()

    
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





#ELSE

print()

def fall_asleep():
    print("You are asleep.")
     
sheep_counted = int(input("Number of sheep counted: "))

if sheep_counted >= 120:
    fall_asleep()

else:
    print("You have to continue counting sheep!")

    
#New Line    


print()
def make_bed():
    print("First you have to make your bed.")
    
def take_a_shower():
    print("Then take a shower.")
    
def sleep_and_dream():
    print("Lastly you have to go to sleep.")
    

hour_of_day = int(input("Enter time: "))
if hour_of_day >= 9:
    make_bed()
    take_a_shower()
    sleep_and_dream()
else: 
    #watch_movie()
    print("Continue watching a movie.")



    

