class Animal {
  speak() {
    return "Some sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

const myDog = new Dog();
const myCat = new Cat();

console.log(myDog.speak()); // Output: Woof!
console.log(myCat.speak()); // Output: Meow!
