const fs = require("fs");

const readData = () => {
  let data = fs.readFileSync("ejemplo.txt", "utf8");
  correctData(data);
};

const correctData = (data) => {
  let fixedData = data.match(/\D/g).join("");

  fs.writeFileSync("ejemploCorregido.txt", fixedData);
};

readData();
