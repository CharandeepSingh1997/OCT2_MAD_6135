// Animal class as a base class for different jungle animals
class Animal {
    name: string;
    sound: string;
   
    // Constructor to initialize the name and sound of an animal
    constructor(name: string, sound: string) {
      this.name = name;
      this.sound = sound;
    }
    // Method to make the animal make a sound
    makeSound(): void {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
   
  
  
  // Tiger class inheriting from Animal class
  class Tiger extends Animal {
    constructor(name: string) {
      super(name, "Roar"); // call to the parent class constructor
    }
  }
   
  // Lion class inheriting from Animal class
  class Lion extends Animal {
    constructor(name: string) {
      super(name, "Roar"); // call to the parent class constructor
    }
  }
   
  // Monkey class inheriting from Animal class
  class Monkey extends Animal {
    constructor(name: string) {
      super(name, "Chatter"); // call to the parent class constructor
    }
  }
   
  // Snake class inheriting from Animal class
  class Snake extends Animal {
    constructor(name: string) {
      super(name, "Hiss"); // call to the parent class constructor
    }
  }
   
  // Creating animal objects
  const tiger = new Tiger("Tiger");
  const lion = new Lion("Lion");
  const monkey = new Monkey("Monkey");
  const snake = new Snake("Snake");
   
  // Putting the animal object references into an array
  const jungleAnimals: Animal[] = [tiger, lion, monkey, snake];
   
  // Looping over the array and calling the makeSound method for each animal
  jungleAnimals.forEach((animal) => {
    animal.makeSound();
  });
