const character = {
  name: "Peter",
  surname: "Parker",
};

const array = [1, 2, 3];
console.log(character.hasOwnProperty("age"));

const ObjectConstructor = {
  quote: function () {
    return "Hola, soy un superheroe";
  },
};

const Superhero = (name, realName) => {
  const superheroe = Object.create(ObjectConstructor);
  superheroe.name = name;
  superheroe.realName = realName;
  return superheroe;
};

const spiderman = Superhero("Spiderman", "Peter Parker");
console.log(spiderman.name);
console.log(spiderman.quote());

//Class
class Character {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  attack() {
    return `${this.name} está atacando!`;
  }

  defense() {
    return `${this.name} está defendiéndose!`;
  }
}

const Daredevil = new Character("Daredevil", 40);
console.log(Daredevil);
console.log(Daredevil.attack());

const Spiderman = new Character("Spiderman", 25);
console.log(Spiderman);
console.log(Spiderman.defense());

//Herencia
class Vehicle {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  move() {
    return `${this.name} se está moviendo`;
  }

  stop() {
    return `${this.name} se ha parado`;
  }
}

class Car extends Vehicle {
  constructor(name, color, doors) {
    super(name, color);
    this.doors = doors;
    this.wheels = 4;
  }

  handBrake() {
    return `${this.name} ha echado el freno de mano`;
  }
}

const SeatIbiza = new Car("Seat Ibiza", "Rosa", 4);
console.log(SeatIbiza);
console.log(SeatIbiza.move());
console.log(SeatIbiza.handBrake());

class Plane extends Vehicle {
  constructor(name, color, wings) {
    super(name, color);
    this.wings = wings;
  }

  fly() {
    return `${this.name} está volando`;
  }
}

const Boeing747 = new Plane("Boeing 747", "blanco", 2);
console.log(Boeing747);
console.log(Boeing747.move());
console.log(Boeing747.fly());
