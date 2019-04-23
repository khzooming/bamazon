# bamazon

bamazon is a CLI (Command Line Interface) shopping app that lets you see what's in the store, order a product to confirm stock levels, and find out the total price.

The first step is to start up the app using the command line:
<img width="600" alt="Screen Shot 2019-04-22 at 11 15 16 PM" src="https://user-images.githubusercontent.com/48226041/56558742-871d1880-6554-11e9-8a51-2df60af2c463.png">

The app will show you all the products in the store including the item name, price and quantity available, as shown below.  
<img width="603" alt="Screen Shot 2019-04-22 at 11 17 35 PM" src="https://user-images.githubusercontent.com/48226041/56558931-090d4180-6555-11e9-9442-9f551180e194.png">

The first question is to identify the ID of the item you'd like to purchase, as you can see at the bottom of the screen above.
Enter the ID number and press enter.  Here we chose item #2.

The next question, at the bottom of the screen below, is to enter the number of units you'd like to purchase.  Enter the number, and press enter.  Here we chose to order 205 items.

<img width="599" alt="Screen Shot 2019-04-22 at 11 20 44 PM" src="https://user-images.githubusercontent.com/48226041/56559023-4b368300-6555-11e9-8a35-7c38d428c1b1.png">

The last step of the process is to inform you of the total price, and the amount of stock left of that item.  Our total price for the 205 shirts is $6560.  The stock originally was 778, and with the 205 piece sale the udpated stock is 573.
<img width="602" alt="Screen Shot 2019-04-22 at 11 23 28 PM" src="https://user-images.githubusercontent.com/48226041/56559172-abc5c000-6555-11e9-8930-9015e3db9684.png">

If we run the app again and check the stock amount for item #2, you can see that it's been updated in the database to reflect the latest order.  Note the stock amount for #2 is 573.
