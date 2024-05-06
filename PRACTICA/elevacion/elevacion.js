/* Vuelve a escribir el código de la forma en que el intérprete lo vería y predice el resultado.  */

/* no1 */

console.log(hello);                     // se declara hello pero no se le asigna un valor, por tanto es undefined                                  
var hello = 'world';                    // se asigna el valor 'world' a la variable hello                                 

    /* HOISTING */

    // var hello; 
    // console.log(hello); 
    // var hello = 'world'; 
    // output: undefined 

/* no2 */

var needle = 'haystack';                // needle es una variable global, se le asigna el valor 'haystack', se eleva a la parte superior del scope
test();                                 // se llama a la función test 
function test(){                        // se declara la función test
    var needle = 'magnet';              // needle es una variable local, se le asigna el valor 'magnet', se eleva a la parte superior del scope de la función
    console.log(needle);                // se imprime el valor de needle, que es 'magnet'
}

    /* HOISTING */

    // var needle;
    // function test(){
    //     var needle;
    //     needle = 'magnet';
    //     console.log(needle);
    // }
    // needle = 'haystack';
    // test();
    // output: magnet

/* no3 */

var brendan = 'super cool';             // brendan es una variable global, se le asigna el valor 'super cool' 
function print(){                       // se declara la función print
    brendan = 'only okay';              // se asigna el valor 'only okay' a la variable brendan
    console.log(brendan);               // se imprime el valor de brendan, que es 'only okay'   
}
console.log(brendan);                   // se imprime el valor de brendan, que es 'super cool'

    /* HOISTING */

    // var brendan;
    // function print(){
    //     var brendan;
    //     brendan = 'only okay';
    //     console.log(brendan);
    // }
    // brendan = 'super cool';
    // print();
    // output: super cool

/* no4 */

var food = 'chicken';                   // food es una variable global, se le asigna el valor 'chicken'
console.log(food);                      // se imprime el valor de food, que es 'chicken'
eat();                                  // se llama a la función eat 
function eat(){                         // se declara la función eat
    food = 'half-chicken';              // se asigna el valor 'half-chicken' a la variable food
    console.log(food);                  // se imprime el valor de food, que es 'half-chicken'
    var food = 'gone';                  // se declara la variable food dentro de la función eat, se le asigna el valor 'gone'
    console.log(food);                  // se imprime el valor de food, que es 'gone'
}

    /* HOISTING */

    // var food;
    // function eat(){
    //     var food;
    //     food = 'half-chicken';
    //     console.log(food);
    //     food = 'gone';
    //     console.log(food);
    // }
    // food = 'chicken';
    // console.log(food);
    // eat();
    // output: chicken, half-chicken, gone

/* no5 */

mean();                                 // llamar a mean(); antes de su declaración resulta en un TypeError: mean is not a function         
console.log(food);                      // Esta línea va a tirar un ReferenceError: food is not defined, ya que mean() no ha sido declarada antes de su uso
                                        // Expresión de función (no se eleva a la parte superior del scope)
var mean = function() {                 // mean es declarada como variable y se le asigna una función             
    food = "chicken";                   // se asigna el valor 'chicken' a la variable food 
    console.log(food);                  // se imprime el valor de food, que es 'chicken'
    var food = "fish";                  // se declara y asigna el valor 'fish' a la variable local food
    console.log(food);                  // imprime el valor de food, que es 'fish'
}
console.log(food);                      // imprime el valor de food, que es 'chicken'

    /* HOISTING */

    // var mean;
    // mean();
    // console.log(food);
    // function mean(){
    //     var food;
    //     food = 'chicken';
    //     console.log(food);
    //     food = 'fish';
    //     console.log(food);
    // }
    // output: TypeError: mean is not a function

/* no6 */

console.log(genre);                     // output: undefined
var genre = "disco";                    // genre es una variable global, se le asigna el valor 'disco'
rewind();                               // se llama a la función rewind(); 
function rewind() {                     // se declara la función rewind();
    genre = "rock";                     // se asigna el valor 'rock' a la variable genre
    console.log(genre);                 // se imprime el valor de genre, que es 'rock'
    var genre = "r&b";                  // se declara y asigna el valor 'r&b' a la variable local genre
    console.log(genre);                 // se imprime el valor de genre, que es 'r&b'
}

console.log(genre)                      // se imprime el valor de genre, que es 'disco'

    /* HOISTING */

    // var genre;
    // rewind();
    // console.log(genre);
    // function rewind(){
    //     var genre;
    //     genre = 'rock';
    //     console.log(genre);
    //     genre = 'r&b';
    //     console.log(genre);
    // }
    // genre = 'disco';
    // console.log(genre);
    // output: undefined, rock, r&b, disco


/* no7 */

dojo = "san jose";                      // dojo es una variable global, se le asigna el valor 'san jose'
console.log(dojo);                      // se imprime el valor de dojo, que es 'san jose'
learn();                                // se llama a la función learn
function learn() {                      // se declara la función learn
    dojo = "seattle";                   // se asigna el valor 'seattle' a la variable dojo
    console.log(dojo);                  // se imprime el valor de dojo, que es 'seattle'
    var dojo = "burbank";               // se declara y asigna el valor 'burbank' a la variable local dojo
    console.log(dojo);                  // se imprime el valor de dojo, que es 'burbank'
}
console.log(dojo);                      // se imprime el valor de dojo, que es 'san jose'

    /* HOISTING */

    // var dojo;
    // console.log(dojo);
    // learn();
    // function learn(){
    //     var dojo;
    //     dojo = 'seattle';
    //     console.log(dojo);
    //     dojo = 'burbank';
    //     console.log(dojo);
    // }
    // dojo = 'san jose';
    // console.log(dojo);
    // output: san jose, seattle, burbank, san jose

/* no8 */

console.log(makeDojo("Chicago", 65));   // {name: 'Chicago', students: 65, hiring: true} 
console.log(makeDojo("Berkeley", 0));   // {name: 'Berkeley', students: 0, hiring: false}
function makeDojo(name, students){      // se declara la función makeDojo con parámetros name, students
    const dojo = {};                    // se declara la variable dojo como un objeto vacío
    dojo.name = name;                   // se asigna el valor de name a la propiedad name del objeto dojo
    dojo.students = students;           // se asigna el valor de students a la propiedad students del objeto dojo
    if(dojo.students > 50){             // si students es mayor que 50
        dojo.hiring = true;             // se asigna el valor true a la propiedad hiring del objeto dojo
    }
    else if(dojo.students <= 0){        // si students es igual o menor que 0
        dojo = "closed for now";        // se asigna el valor "closed for now" a la variable dojo
    }
    return dojo;                        // se retorna el objeto dojo 
}
    
    /* HOISTING */

    // function makeDojo(name, students){
    //     const dojo = {};
    //     dojo.name = name;
    //     dojo.students = students;
    //     if(dojo.students > 50){
    //         dojo.hiring = true;
    //     }
    //     else if(dojo.students <= 0){
    //         dojo = "closed for now";
    //     }
    //     return dojo;
    // }
    // console.log(makeDojo("Chicago", 65));
    // console.log(makeDojo("Berkeley", 0));
    // output: {hiring: true, name: "Chicago", students: 65}, TypeError: Assignment to constant variable 

