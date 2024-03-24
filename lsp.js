// Bad Example
class Bird {
    fly() {
      console.log("Flying...");
    }
  }
  
  class Duck extends Bird {
    quack() {
      console.log("Quack quack!");
    }
  }
  
  class Ostrich extends Bird {
    // Ostriches cannot fly
    fly() {
      throw new Error("Ostriches cannot fly");
    }
  }
  
  // Good Example
  class Bird {
    fly() {
      throw new Error("This method should be overridden");
    }
  }
  
  class Duck extends Bird {
    fly() {
      console.log("Flying...");
    }
  
    quack() {
      console.log("Quack quack!");
    }
  }
  
  class Ostrich extends Bird {
    // Ostriches cannot fly, so no fly method is defined here.
  }
  