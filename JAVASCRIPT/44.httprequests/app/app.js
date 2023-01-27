let listProducts = [];

const getProducts = async () => {
  const data = await fetch("http://localhost:8080/products");
  const products = await data.json();
  listProducts = products;
  printProducts(listProducts);
};

const printProducts = (products) => {
  const container = document.querySelector("#container");
  for (const item of products) {
    container.innerHTML += `
    <figure>
    <h2>${item.name} - #${item.id}</h2>
    <h3>${item.price} €</h3>
    </figure>
    `;
  }
};

//FORMULARIO DE CREAR
const nameInput = document.querySelector("#nameProduct");
const priceInput = document.querySelector("#priceProduct");
const createBtn = document.querySelector("#createProductBtn");

createBtn.addEventListener("click", () => {
  const product = {
    name: nameInput.value,
    price: priceInput.value,
  };

  fetch("http://localhost:8080/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
});

//EDITAR PRODUCTOS

const editIdProduct = document.querySelector("#editIdProduct");
const editNameProduct = document.querySelector("#editNameProduct");
const editPriceProduct = document.querySelector("#editPriceProduct");
const editProductBtn = document.querySelector("#editProductBtn");

editProductBtn.addEventListener("click", () => {
  const product = {
    name: editNameProduct.value,
    price: editPriceProduct.value,
  };

  fetch(`http://localhost:8080/products/${editIdProduct.value}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
});

//ELIMINAR PRODUCTO

const deleteIdProduct = document.querySelector("#deleteIdProduct");
const deleteBtn = document.querySelector("#deleteBtn");

deleteBtn.addEventListener("click", () => {
  fetch(`http://localhost:8080/products/${deleteIdProduct.value}`, {
    method: "DELETE",
  });
});

getProducts();
