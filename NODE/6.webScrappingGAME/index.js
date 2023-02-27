const puppeteer = require("puppeteer");
const fs = require("fs");

const scrapping = async () => {
  const BASE_URL = "https://www.game.es/buscar/brv/o=7&cf=000a_aa0211:5:GIDS";

  //Creamos el navegador para que se lance maximizado
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  //Abrimos el navegador
  const page = await browser.newPage();

  //Vamos a la url que hemos almacenado
  await page.goto(BASE_URL);
  await page.waitForTimeout(4000);

  //Baje hasta el fondo pillando el elemento a donde queremos viajar
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(4000);
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(4000);
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  //Esperamos a que salgan los selectores .search-item que son los que contienen la info de las peliculas
  await page.waitForSelector(".search-item");

  //Hacemos un pantallazo para comprobar que en la imagen salgan
  /*  await page.screenshot({
    path: "yoursite.png",
    fullPage: true,
  }); */

  //Vamos a recuperar todos los textos de los elementos con la clase cm-txtm con el metodo $$eval hacemos un pseudo QuerySelectorAll

  //Los titulos estan en los anchor con la clase cm-txt
  const titles = await page.$$eval("a.cm-txt", (nodes) =>
    nodes.map((n) => n.innerText)
  );

  //Los precios estan en un div con la clase buy--price
  const prices = await page.$$eval("div.buy--price", (nodes) =>
    nodes.map((n) => n.innerText)
  );

  //Las imagenes estan en los elementos con la clase img-responsive
  const images = await page.$$eval(".img-responsive", (nodes) =>
    nodes.map((n) => n.src)
  );

  const GAMEPRODUCTS = titles.map((item, index) => ({
    title: titles[index],
    price: prices[index],
    image: images[index],
  }));

  //La ultima pelicula siempre está vacia asi que la quitamos antes de guardar el json
  GAMEPRODUCTS.pop();
  const gamesData = JSON.stringify(GAMEPRODUCTS);

  fs.writeFile("data.json", gamesData, () => {
    console.log("DATA CREATED");
  });

  await browser.close();
};

scrapping();
