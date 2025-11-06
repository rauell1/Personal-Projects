#Objective: A store offers discounts based on the total amount spent. Write a program that calculates the discount and the final price.

#Conditions:

#If total >= $100, apply a 20% discount.
#If total >= $50 but < $100, apply a 10% discount.
#If total < $50, no discount is applied.

total = float(input("The total amount spent is: "))

if total >= 100:
    print("Apply a 20% Discount.")
    print("Price after discount is"  ,total * 0.8,)

elif 50 <= total < 100:
    print("Apply a 10% Discount.")
    print("Price after discount is" , total * 0.9,)

else:
    print("No discount.")
    print("Total price is" , total,)
