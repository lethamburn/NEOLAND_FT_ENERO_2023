import "./style.css";

const products = [
  {
    title: "Vaporware tee",
    price: "40.00",
    image:
      "https://res.cloudinary.com/dfnh5hecu/image/upload/v1674466530/Dayseeker/1222DayseekerTourReturnsWebMock6-Tee1_360x_x7nvwa.webp",
  },
  {
    title: "Tropical tee",
    price: "40.00",
    image:
      "https://res.cloudinary.com/dfnh5hecu/image/upload/v1674466530/Dayseeker/1222DayseekerTourReturnsWebMock5-Tee1b_360x_c1poqh.webp",
  },
  {
    title: "Lily tee",
    price: "40.00",
    image:
      "https://res.cloudinary.com/dfnh5hecu/image/upload/v1674466530/Dayseeker/1222DayseekerTourReturnsWebMock4-Tee1_360x_mbcqnn.webp",
  },
  {
    title: "6ft Coffee Dye tee",
    price: "45.00",
    image:
      "https://res.cloudinary.com/dfnh5hecu/image/upload/v1674466530/Dayseeker/1222DayseekerTourReturnsWebMock3-DyeTee1_360x_t2c77b.webp",
  },
  {
    title: "See the sun forever tee",
    price: "40.00",
    image:
      "https://res.cloudinary.com/dfnh5hecu/image/upload/v1674466530/Dayseeker/0722DayseekerNewCollection-03BlackTee_360x_zj57oj.webp",
  },
  {
    title: "Deconstructed sunset cut off",
    price: "35.00",
    image:
      "https://res.cloudinary.com/dfnh5hecu/image/upload/v1674466529/Dayseeker/1222DayseekerTourReturnsWebMock2-Tank1_360x_xcosdl.webp",
  },
  {
    title: "Dark sun acid wash hoodie",
    price: "65.00",
    image:
      "https://res.cloudinary.com/dfnh5hecu/image/upload/v1674466530/Dayseeker/1222DayseekerTourReturnsWebMock7-Hoodie1_360x_leamho.webp",
  },
  {
    title: "Dark sun vynil - black variant",
    price: "30.00",
    image:
      "https://res.cloudinary.com/dfnh5hecu/image/upload/v1674466529/Dayseeker/Dayseeker_VinylVariantMocks_Black_360x_t9q5ac.webp",
  },
];

const printProducts = (items) => {
  const container = document.querySelector("#app");
  for (const item of items) {
    container.innerHTML += `
    <figure>
    <img src=${item.image} alt=${item.title} />
    <h3>${item.title}</h3>
    <h4>$${item.price}</h4>
    </figure>`;
  }
};

printProducts(products);
