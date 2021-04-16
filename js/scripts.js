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

CustomerOrder.prototype.findPizza = function (id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
}


CustomerOrder.prototype.deletePizza = function (id) {
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

//User Interface Logic -------
let customerOrder = new CustomerOrder();

function attachPizzaListeners() {
  $("ul#pizzas").on("click", "li", function () {
    showPizza(this.id);
  });

  $("#buttons").on("click", ".deleteButton", function () {
    customerOrder.deletePizza(this.id);
    $("#show-pizza").hide();
    displayPizzaDetails(customerOrder);
  });
};

function showPizza(pizzaId) {
  const pizza = customerOrder.findPizza(pizzaId);
  $("#show-pizza").show();

  pizza.crustSize = document.getElementById('option').value;
  $(".crust-type").html(pizza.crustSize);

  if (document.getElementById('new-crust-type').checked) {
    pizza.crustType = "Thin Crust";
    $(".curst-size").html(pizza.crustType);
  }

  $(".cheese").html(pizza.toppings[0]);

  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + + pizza.id + ">Delete</button>");
}

function displayPizzaDetails(customerOrderDisplay) {
  let pizzasList = $("ul#pizzas");
  let htmlForPizzaInfo = "";
  Object.keys(customerOrderDisplay.pizzas).forEach(function (key) {
    const pizza = customerOrderDisplay.findPizza(key);
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.crustSize + " " + pizza.crustType + "</li>";
  });
  pizzasList.html(htmlForPizzaInfo);
};

$(document).ready(function () {
  attachPizzaListeners();
  $("form#new-pizza").submit(function (event) {

    event.preventDefault();
    const inputtedCrustSize = $("input#new-crust-size").val();
    const inputtedCrustType = $("input#new-crust-type").val();
    const inputtedCheese = $("input#new-cheese").val();
    const inputtedTomato = $("input#new-tomato").val();
    const inputtedPepperoni = $("input#new-pepperoni").val();
    const inputtedRedOnion = $("input#new-redonion").val();
    const inputtedOliveOil = $("input#new-oliveoil").val();
    const inputtedBlackOlives = $("input#new-blackolives").val();
    const inputtedToppings = [
      inputtedCheese, inputtedTomato,
      inputtedPepperoni, inputtedRedOnion,
      inputtedOliveOil, inputtedBlackOlives];

    console.log(inputtedToppings);

    // The next three lines are new:
    $("input#new-crust-size").val("");
    $("input#new-crust-type").val("");
    $("input#new-cheese").val("");
    $("input#new-tomato").val("");
    $("input#new-pepperoni").val("");
    $("input#new-redonion").val("");
    $("input#new-oliveoil").val("");
    $("input#new-blackolives").val("");


    let newPizza = new Pizza(inputtedCrustSize, inputtedCrustType, inputtedToppings);
    customerOrder.addPizza(newPizza);

    console.log(customerOrder.pizzas);
    displayPizzaDetails(customerOrder);  // <--- This is the new line!
  });
});