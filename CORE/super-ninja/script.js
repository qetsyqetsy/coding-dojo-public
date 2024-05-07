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

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200); // Call the Ninja constructor with default health of 200
        this.velocidad = 10; // Set default speed to 10
        this.fuerza = 10; // Set default strength to 10
        this.sabiduria = 10; // Add wisdom attribute with default value of 10
    }

    speakWisdom() {
        this.drinkSake(); // Call drinkSake method from Ninja class
        console.log("True mastery stems from knowing that you know nothing."); // Log wisdom message
    }
}

const sensei1 = new Sensei("Master Splinter");
sensei1.sayName(); // Output: Ninja's name: Master Splinter
sensei1.showStats(); // Output: Name: Master Splinter, Strength: 10, Speed: 10, Health: 200
sensei1.speakWisdom(); // Output: True mastery stems from knowing that you know nothing.
