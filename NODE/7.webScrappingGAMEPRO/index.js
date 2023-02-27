import fs from "fs";
import puppeteer from "puppeteer";
import inquirer from "inquirer";

let keyword = "";

const scrapping = async () => {
  const URL = "https://www.game.es/";

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();

  await page.goto(URL);

  await page.click("#searchinput");

  await page.type("#searchinput", keyword);

  await page.keyboard.press("Enter");
  console.log("1/4");
  await page.waitForTimeout(5000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(4000);
  console.log("2/4");
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(4000);
  console.log("3/4");
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(4000);
  console.log("4/4");
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  const items = await page.$$eval("div.search-item", (nodes) => {
    return nodes.map((n) => ({
      title: n.querySelector("a.cm-txt").innerText,
      price: n.querySelector("div.buy--price")?.innerText,
      image: n.querySelector("img.img-responsive").src,
      type: n.querySelector("span.cm-txt")?.innerText,
    }));
  });

  await browser.close();

  items.pop();

  const jsonItems = JSON.stringify(items);
  fs.writeFile(
    `${keyword.replace(" ", "").toLowerCase()}.json`,
    jsonItems,
    () => {
      console.log("DATA CREATED!");
    }
  );
};

inquirer
  .prompt([
    {
      name: "search",
      message: "¿Qué es lo que quieres buscar?",
    },
  ])
  .then((answers) => {
    keyword = answers.search;
    scrapping();
  });
