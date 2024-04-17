function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas, picante, size) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    pizza.picante = picante;
    pizza.size = size;
    return pizza
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni","salchicha"], "extra hot", "XL");
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champinhones", "aceitunas", "cebollas"], "sin picante", "s");
console.log(pizza2);

var pizza3 = pizzaOven("fina y crujiente", "barbacoa", ["mozzarella", "cheddar"], ["pimientos", "cebolla caramelizada"], "medio picante", "M");
console.log(pizza3);

var pizza4 = pizzaOven("tradicional", "napolitana", ["parmesano", "ricotta"], ["tomates cherry", "albahaca"], "sin picante", "L");
console.log(pizza4);
