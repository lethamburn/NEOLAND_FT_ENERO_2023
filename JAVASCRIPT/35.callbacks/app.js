const sayGoodMorning = () => {
  console.log("Good morning");
};

const sayGoodNight = () => {
  console.log("Good night");
};

const sayHello = (name, callback) => {
  console.log(`Hello ${name}`);
  callback();
};

sayHello("Pepe", sayGoodMorning);
sayHello("Maria", sayGoodNight);
