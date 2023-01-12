//1º

for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log(i, "Intentando dormir 🐑");
  } else {
    console.log(i, "Dormido");
  }
}

//2º
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {
  let word = "";
  for (const item of param) {
    if (item.length > word.length) {
      word = item;
    }
  }
  return word;
}

console.log(findLongestWord(avengers));
