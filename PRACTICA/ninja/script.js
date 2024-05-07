class Ninja {
    // Constructor function to initialize Ninja properties
    constructor(nombre, salud) {
        this.nombre = nombre; // Assigning name parameter to Ninja object
        this.salud = salud; // Assigning health parameter to Ninja object
        this.velocidad = 3; // Setting default speed to 3
        this.fuerza = 3; // Setting default strength to 3
    }

    // Method to display Ninja's name
    sayName() {
        console.log(`Ninja's name: ${this.nombre}`);
    }

    // Method to display Ninja's stats
    showStats() {
        console.log(`Name: ${this.nombre}, Strength: ${this.fuerza}, Speed: ${this.velocidad}, Health: ${this.salud}`);
    }

    // Method to increase Ninja's health by 10
    drinkSake() {
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Pepito"); 
ninja1.sayName(); 
ninja1.showStats(); 
ninja1.drinkSake(); 
