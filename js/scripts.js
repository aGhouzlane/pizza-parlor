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

CustomerOrder.prototype.calculatePrice = function (pizzaId) {

  const pizza = customerOrder.findPizza(pizzaId);
  let totalPrice = 0;
  if (pizza.crustSize == "X-Large") {
    totalPrice += 12;
  } else if (pizza.crustSize == "Large") {
    totalPrice += 10;
  } else if (pizza.crustSize == "Medium") {
    totalPrice += 7;
  }
  else if (pizza.crustSize == "Small") {
    totalPrice += 5;
  }

  if (pizza.toppings[0] == "Cheese") {
    totalPrice += 2;
  }
  if (pizza.toppings[1] == "Mushroom") {
    totalPrice += 2;
  }
  if (pizza.toppings[2] == "Green pepper") {
    totalPrice += 2;
  }
  if (pizza.toppings[3] == "Tomato") {
    totalPrice += 2;
  }
  if (pizza.toppings[4] == "Pepperoni") {
    totalPrice += 2;
  }
  if (pizza.toppings[5] == "Red Onion") {
    totalPrice += 2;
  }
  if (pizza.toppings[6] == "Olive Oil") {
    totalPrice += 2;
  }
  if (pizza.toppings[7] == "Black Olives") {
    totalPrice += 2;
  }
  if (pizza.toppings[8] == "Chicken") {
    totalPrice += 2;
  }
  if (pizza.toppings[9] == "Beef") {
    totalPrice += 2;
  }
  if (pizza.toppings[10] == "Red Pepper") {
    totalPrice += 2;
  }
  if (pizza.toppings[11] == "Jalapeno") {
    totalPrice += 2;
  }
  if (pizza.toppings[12] == "Spinach") {
    totalPrice += 2;
  }
  if (pizza.toppings[13] == "Pineapple") {
    totalPrice += 2;
  }
  if (pizza.toppings[14] == "Anchovy") {
    totalPrice += 2;
  }
  if (pizza.toppings[15] == "Artichoke") {
    totalPrice += 2;
  }
  if (pizza.toppings[16] == "Garlic") {
    totalPrice += 2;
  }
  if (pizza.toppings[17] == "Sausage") {
    totalPrice += 2;
  }

  return totalPrice;
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
  $(".crust-size").html(pizza.crustSize);
  $(".crust-type").html(pizza.crustType);
  $(".cheese").html(pizza.toppings[0]);
  $(".mushroom").html(pizza.toppings[1]);
  $(".greenpepper").html(pizza.toppings[2]);
  $(".tomato").html(pizza.toppings[3]);
  $(".pepperoni").html(pizza.toppings[4]);
  $(".redonion").html(pizza.toppings[5]);
  $(".oliveoil").html(pizza.toppings[6]);
  $(".blackolives").html(pizza.toppings[7]);
  $(".chicken").html(pizza.toppings[8]);
  $(".beef").html(pizza.toppings[9]);
  $(".redpepper").html(pizza.toppings[10]);
  $(".jalapeno").html(pizza.toppings[11]);
  $(".spinach").html(pizza.toppings[12]);
  $(".pineapple").html(pizza.toppings[13]);
  $(".anchovy").html(pizza.toppings[14]);
  $(".artichoke").html(pizza.toppings[15]);
  $(".garlic").html(pizza.toppings[16]);
  $(".sausage").html(pizza.toppings[17]);

  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + + pizza.id + ">Delete</button>");
}

function displayPizzaDetails(customerOrderDisplay) {
  let pizzasList = $("ul#pizzas");
  let htmlForPizzaInfo = "";
  Object.keys(customerOrderDisplay.pizzas).forEach(function (key) {
    const pizza = customerOrderDisplay.findPizza(key);
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + "Pizza #" + pizza.id +
      " order was added successfully. <button>Check order</button></li>";
  });
  pizzasList.html("<h2>Pizzas:</h2>" + htmlForPizzaInfo);
};
let finalPrice = 0;
$(document).ready(function () {
  attachPizzaListeners();

  $("form#new-pizza").submit(function (event) {
    event.preventDefault();
    let inputtedCrustSize = document.getElementById("size-option").value;
    let inputtedCrustType = document.getElementById("type-option").value;
    let inputtedCheese = document.getElementById("new-cheese").checked;
    if (inputtedCheese) {
      inputtedCheese = "Cheese";
    }
    let inputtedMushroom = document.getElementById("new-mushroom").checked;
    if (inputtedMushroom) {
      inputtedMushroom = "Mushroom";
    }
    let inputtedGreenpepper = document.getElementById("new-greenpepper").checked;
    if (inputtedGreenpepper) {
      inputtedGreenpepper = "Green pepper";
    }
    let inputtedTomato = document.getElementById("new-tomato").checked;
    if (inputtedTomato) {
      inputtedTomato = "Tomato";
    }

    let inputtedPepperoni = document.getElementById("new-pepperoni").checked;
    if (inputtedPepperoni) {
      inputtedPepperoni = "Pepperoni";
    }
    let inputtedRedOnion = document.getElementById("new-redonion").checked;
    if (inputtedRedOnion) {
      inputtedRedOnion = "Red Onion";
    }
    let inputtedOliveOil = document.getElementById("new-oliveoil").checked;
    if (inputtedOliveOil) {
      inputtedOliveOil = "Olive Oil";
    }
    let inputtedBlackOlives = document.getElementById("new-blackolives").checked;
    if (inputtedBlackOlives) {
      inputtedBlackOlives = "Black Olives";
    }

    let inputtedChicken = document.getElementById("new-chicken").checked;
    if (inputtedChicken) {
      inputtedChicken = "Chicken";
    }
    let inputtedBeef = document.getElementById("new-beef").checked;
    if (inputtedBeef) {
      inputtedBeef = "Beef";
    }
    let inputtedRedpepper = document.getElementById("new-redpepper").checked;
    if (inputtedRedpepper) {
      inputtedRedpepper = "Red Pepper";
    }
    let inputtedJalopeno = document.getElementById("new-jalapeno").checked;
    if (inputtedJalopeno) {
      inputtedJalopeno = "Jalapeno";
    }

    let inputtedSpinach = document.getElementById("new-spinach").checked;
    if (inputtedSpinach) {
      inputtedSpinach = "Spinach";
    }
    let inputtedPineapple = document.getElementById("new-pineapple").checked;
    if (inputtedPineapple) {
      inputtedPineapple = "Pineapple";
    }
    let inputtedAnchovy = document.getElementById("new-anchovy").checked;
    if (inputtedAnchovy) {
      inputtedAnchovy = "Anchovy";
    }
    let inputtedArtichoke = document.getElementById("new-artichoke").checked;
    if (inputtedArtichoke) {
      inputtedArtichoke = "Artichoke";
    }

    let inputtedGarlic = document.getElementById("new-garlic").checked;
    if (inputtedGarlic) {
      inputtedGarlic = "Garlic";
    }
    let inputtedSausage = document.getElementById("new-sausage").checked;
    if (inputtedSausage) {
      inputtedSausage = "Sausage";
    }


    const inputtedToppings = [
      inputtedCheese, inputtedMushroom,
      inputtedGreenpepper, inputtedTomato,
      inputtedPepperoni, inputtedRedOnion,
      inputtedOliveOil, inputtedBlackOlives,
      inputtedChicken, inputtedBeef,
      inputtedRedpepper, inputtedJalopeno,
      inputtedSpinach, inputtedPineapple,
      inputtedAnchovy, inputtedArtichoke,
      inputtedGarlic, inputtedSausage
    ];

    let newPizza = new Pizza(inputtedCrustSize, inputtedCrustType, inputtedToppings);
    customerOrder.addPizza(newPizza);


    let testTotalPrice = customerOrder.calculatePrice(newPizza.id);
    finalPrice += testTotalPrice;
    console.log(testTotalPrice);
    console.log(finalPrice);

    console.log(customerOrder.pizzas);
    displayPizzaDetails(customerOrder);  // <--- This is the new line!
    $("form").hide();
    $("#redirect").show();
    $("#checkout").show();

    $("#checkout").click(function () {
      $("#result").hide();
      $("#address").show();
    });

    $("#price").show();
    $("#price").html('<p>The total price: $' + finalPrice + '.99</P>');

    $("#redirect").click(function () {
      $("form#new-pizza").show();
      $("#size-option").val("");
      $("#type-option").val("");
      $('input[type=checkbox]').each(function () {
        this.checked = false;
      });
      $("#redirect").hide();
    });

    $("#place-order").click(function () {
      $("#order-placed").show();
      $("#address").hide();
    });

  });
});