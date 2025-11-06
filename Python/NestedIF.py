weather_good = False        #Change values from True to False and vice versa and see how the code behaves
find_restaurant = True
tickets_available = True

if weather_good:
    print("We will go for a walk.")
    if find_restaurant:
        print("We will have lunch.")
    else:
        print("We will have a sandwich.")


else:
    if tickets_available:
        print("We will go to the movies.")

    else:
        print("We will go shopping.") 
    
