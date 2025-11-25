class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side ** 2;
  }
}

// Example usage:
const shapes = [new Circle(5), new Square(4)];

for (const shape of shapes) {
  console.log(`Area: ${shape.area()}`);
}
