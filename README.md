# Pizza Parlor

#### A web application that allows users to add pizza orders to a mock database and update the total price based on the added pizza orders and deleled ones. The user can select the pizza size and crust type and choose between a wide variety of toppings, then add the a pizza order. Once an order is successfully added, a new oder view will appear giving the user the option to review the order before checking out. Users can add as many orders as they want and delete the ones no longer needed and the price will automatically reflect the change. After checkout, users are directed to a form to fill their name and address information; then they can place the order and get redirected to the main page to place new orders.

#### By Ahmed Ghouzlane

## Tests

Describe: CustomerOrder()
Test: "Should create an object of type CustomerOrder"
Code: CustomerOrder();
Expected Output: A new object of type CustomerOrder

Describe: CustomerOrder.prototype.addPizza()
Test: "Should a add pizza to the pizzas array"
Code: CustomerOrder.prototype.addPizza(pizza)
Expected Output: new pizza added to the CustomerOrder object

Describe: CustomerOrder.prototype.assignId()
Test: "Should increment CustomerOrder.currentId by 1 each time a new order is added"
Code: CustomerOrder.prototype.assignId()
Expected Output: CustomerOrder.currentId + 1

Describe: CustomerOrder.prototype.findPizza()
Test: "Should return a Pizza object that matches a given id input"
Code: CustomerOrder.prototype.findPizza(id = 1)
Expected Output: pizza with id = 1

Describe: CustomerOrder.prototype.deletePizza()
Test: "Should delete a Pizza object that matches a given id input"
Code: CustomerOrder.prototype.deletePizza(id = 1)
Expected Output: deleted pizza with id = 1

Describe: Pizza.prototype.calculatePrice()
Test: "Should update price property of Pizza based on the given input"
Code: Pizza.prototype.calculatePrice(pizzaId)
Expected Output: price of one object Pizza

Describe: Pizza()
Test: "Should create an object of type Pizza"
Code: Pizza(crustSize, crustType, toppings = [], price)
Expected Output: an object of pizza with the above properties

Describe: attachPizzaListeners()
Test: "Should create event listeners"
Code: attachPizzaListeners()
Expected Output: some event listeners

Describe: attachPizzaListeners()
Test: "Should create event listeners"
Code: attachPizzaListeners()
Expected Output: some event listeners like showing pizzas

Describe: showPizza()
Test: "Should show pizza properties based on id"
Code: showPizza(pizzaId)
Expected Output: pizza properties that matches the given id

Describe: displayPizzaDetails()
Test: "Should display and add pizzas to the ul as list elements"
Code: displayPizzaDetails(customerOrderDisplay)
Expected Output: pizza orders in HTML

## Technologies Used

* HTML
* CSS
* Git
* JavaScript
* JQuery

## Setup/Installation Requirements

1. Clone git repository [Click here](https://github.com/aGhouzlane/my-resort-website.git)
2. Find index.html file
3. Open with your favorite browser by double clicking, or right-click, open with...

## License

[MIT License](https://opensource.org/licenses/MIT)
&copy; Ahmed Ghouzlane

## Contact Information

[email me](mailto:ahmedghouzlane@gmail.com)