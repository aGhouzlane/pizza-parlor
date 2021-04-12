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

  pizza.crustSize = document.getElementById("size-option").value;
  $(".crust-size").html(pizza.crustSize);

  pizza.crustType = document.getElementById("type-option").value;
  $(".crust-type").html(pizza.crustType);

  if (document.getElementById("new-cheese").checked) {
    pizza.toppings[0] = "Cheese";
    $(".cheese").html(pizza.toppings[0]);
    $(".cheese").show();
  }

  if (document.getElementById("new-mushroom").checked) {
    pizza.toppings[1] = "Mushroom";
    $(".mushroom").html(pizza.toppings[1]);
    $(".mushroom").show();
  }

  if (document.getElementById("new-greenpepper").checked) {
    pizza.toppings[2] = "Green Peper";
    $(".greenpepper").html(pizza.toppings[2]);
    $(".greenpepper").show();
  }

  if (document.getElementById("new-tomato").checked) {
    pizza.toppings[3] = "Tomato";
    $(".tomato").html(pizza.toppings[3]);
    $(".tomato").show();
  }

  if (document.getElementById("new-pepperoni").checked) {
    pizza.toppings[4] = "Pepperoni";
    $(".pepperoni").html(pizza.toppings[4]);
    $(".pepperoni").show();
  }

  if (document.getElementById("new-redonion").checked) {
    pizza.toppings[5] = "Red Onion";
    $(".redonion").html(pizza.toppings[5]);
    $(".redonion").show();
  }

  if (document.getElementById("new-oliveoil").checked) {
    pizza.toppings[6] = "Olive Oil";
    $(".oliveoil").html(pizza.toppings[6]);
    $(".oliveoil").show();
  }

  if (document.getElementById("new-oliveoil").checked) {
    pizza.toppings[7] = "Olive Oil";
    $(".oliveoil").html(pizza.toppings[7]);
    $(".oliveoil").show();
  }

  if (document.getElementById("new-blackolives").checked) {
    pizza.toppings[8] = "Black Olives";
    $(".blackolives").html(pizza.toppings[8]);
    $(".blackolives").show();
  }

  if (document.getElementById("new-chicken").checked) {
    pizza.toppings[9] = "Chicken";
    $(".chicken").html(pizza.toppings[9]);
    $(".chicken").show();
  }

  if (document.getElementById("new-beef").checked) {
    pizza.toppings[10] = "Beef";
    $(".beef").html(pizza.toppings[10]);
    $(".beef").show();
  }

  if (document.getElementById("new-redpepper").checked) {
    pizza.toppings[11] = "Red pepper";
    $(".redpepper").html(pizza.toppings[11]);
    $(".redpepper").show();
  }

  if (document.getElementById("new-jalapeno").checked) {
    pizza.toppings[12] = "Jalapeno";
    $(".jalapeno").html(pizza.toppings[12]);
    $(".jalapeno").show();
  }

  if (document.getElementById("new-spinach").checked) {
    pizza.toppings[13] = "Spinach";
    $(".spinach").html(pizza.toppings[13]);
    $(".spinach").show();
  }

  if (document.getElementById("new-pineapple").checked) {
    pizza.toppings[11] = "Pineapple";
    $(".pineapple").html(pizza.toppings[11]);
    $(".pineapple").show();
  }

  if (document.getElementById("new-anchovy").checked) {
    pizza.toppings[12] = "Anchovy";
    $(".anchovy").html(pizza.toppings[12]);
    $(".anchovy").show();
  }

  if (document.getElementById("new-artichoke").checked) {
    pizza.toppings[13] = "Artichoke";
    $(".artichoke").html(pizza.toppings[13]);
    $(".artichoke").show();
  }

  if (document.getElementById("new-garlic").checked) {
    pizza.toppings[13] = "Garlic";
    $(".garlic").html(pizza.toppings[13]);
    $(".garlic").show();
  }

  if (document.getElementById("new-sausage").checked) {
    pizza.toppings[13] = "Artichoke";
    $(".sausage").html(pizza.toppings[13]);
    $(".sausage").show();
  }


  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + + pizza.id + ">Delete</button>");
}

function displayPizzaDetails(customerOrderDisplay) {
  let pizzasList = $("ul#pizzas");
  let htmlForPizzaInfo = "";
  Object.keys(customerOrderDisplay.pizzas).forEach(function (key) {
    const pizza = customerOrderDisplay.findPizza(key);
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + "Pizza #: " + pizza.id + "</li>";
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