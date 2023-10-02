/* 
 function onefunction(z){
    function sum(m,n){return m+n;}//method
    //return "I am A FUnction One";
   let a =z; // data attributes
   //return a;
   return sum(2,2);
}
//console.log(onefunction)
var a = onefunction('cat');
console.log(a);

*/

// Function serving as an object creator for a Tiger
function Tiger(name) {
    this.name = name;
    this.sound = "Roar";
    this.makeSound = function() {
    console.log(this.name + " says "+ this.sound);
    }
}

// Function serving as an object creator for a Lion
function Lion(name) {
    this.name = name;
    this.sound = "Roar";
    this.makeSound = function() {
    console.log(this.name + ' says '+ this.sound);
    }
}

// Function serving as an object creator for a Monkey
function Monkey(name) {
    this.name = name;
    this.sound = "Chatter";
    this.makeSound = function() {
        console.log(this.name + " says " + this.sound);
    }
}


// Function serving as an object creator for a Snake
function Snake(name) {
    this.name = name;
    this.sound = "Hiss";
    this.makeSound = function() {
    console.log(this.name + " says " + this.sound);
    }
}

// Creating animal objects
var tiger = new Tiger("Tiger");
var lion = new Lion("Lion");
var monkey = new Monkey("Monkey");
var snake = new Snake("Snake");
// Putting the animal object references into an array
var jungleAnimals = [tiger, lion, monkey, snake];
// Looping over the array and calling the makeSound mel
jungleAnimals.forEach(function(animal) {
animal.makeSound();
});
