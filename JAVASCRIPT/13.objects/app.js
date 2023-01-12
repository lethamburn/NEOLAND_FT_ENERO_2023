const objeto = {
  clave: "valor",
};

const batman = {
  name: "Batman",
  realName: "Bruce Wayne",
  age: 70,
  city: "Gotham",
  habilities: ["detective", "millonaire"],
};

console.log(batman.name);
console.log(batman.habilities[0]);
console.log(batman["name"]);
batman.age = 80;
console.log(batman);

for (const key in batman) {
  console.log(`La clave ${key} tiene como valor ${batman[key]}`);
}
//Object keys
const batmanKeys = Object.keys(batman);
console.log(batmanKeys);
