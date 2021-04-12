//Business Logic -------

function CustomerOrder() {
  this.pizzas = {};
  this.currentId = 0;
}

CustomerOrder.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

CustomerOrder.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

CustomerOrder.prototype.deleteContact = function (id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  delete this.pizzas[id];
  return true;
}

function Pizza(crustSize, crustType, toppings = []) {
  this.crustSize = crustSize;
  this.crustType = crustType;
  this.toppings = toppings;
}

let order = new CustomerOrder();
let pizza1 = new Pizza("Large", "Thin Crust", ["Cheese", "Peporoni", "Tomato", "Red Onion"]);
let pizza2 = new Pizza("X-Large", "Regular Crust", ["Cheese", "Peporoni", "Tomato", "Red Onion"]);

order.addPizza(pizza1);
order.addPizza(pizza2);

console.log(order);






//User Interface Logic -------
