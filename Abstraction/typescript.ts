interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  getFuelLevel(): number;
  drive(): void;
}

abstract class Vehicle implements IVehicle {
  protected fuelLevel: number;

  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract drive(): void;

  constructor(initialFuel: number) {
    this.fuelLevel = initialFuel;
  }

  getFuelLevel(): number {
    return this.fuelLevel;
  }

  refuel(amount: number): void {
    this.fuelLevel += amount;
    console.log(
      `Refueled ${amount} units. Current fuel level: ${this.fuelLevel}`,
    );
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started.");
    this.fuelLevel -= 1; // Consumes fuel when starting the engine
  }

  stopEngine(): void {
    console.log("Car engine stopped.");
  }

  drive(): void {
    if (this.fuelLevel > 0) {
      console.log("Car is driving.");
      this.fuelLevel -= 5; // Consumes fuel when driving
    } else {
      console.log("Not enough fuel to drive.");
    }
  }
}

const myCar = new Car(10);
console.log(`Fuel level: ${myCar.getFuelLevel()}`);
myCar.startEngine();
console.log(`Fuel level: ${myCar.getFuelLevel()}`);
myCar.drive();
console.log(`Fuel level: ${myCar.getFuelLevel()}`);
myCar.refuel(6);
myCar.stopEngine();
