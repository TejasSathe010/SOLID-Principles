// Bad Example
class Shape {
    constructor() {
      this.type = "";
    }
  
    draw() {
      // Draw shape
    }
  }
  
  class Square extends Shape {
    constructor() {
      super();
      this.type = "square";
    }
  
    draw() {
      // Draw square
    }
  }
  
  class Circle extends Shape {
    constructor() {
      super();
      this.type = "circle";
    }
  
    draw() {
      // Draw circle
    }
  }
  
  // Good Example
  class Shape {
    draw() {
      throw new Error("This method should be overridden");
    }
  }
  
  class Square extends Shape {
    draw() {
      // Draw square
    }
  }
  
  class Circle extends Shape {
    draw() {
      // Draw circle
    }
  }
  