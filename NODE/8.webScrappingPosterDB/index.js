import fs from "fs";
import puppeteer from "puppeteer";
import inquirer from "inquirer";

const getData = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();
  await page.goto("https://www.movieposterdb.com/");

  await page.type("input", "The Batman");

  await page.keyboard.press("Enter");

  await page.waitForTimeout(3000);
  await page.click(".gallery-item");
  await page.waitForTimeout(3000);
  const posters = await page.$$eval("figure", (nodes) => {
    return nodes.map((n) =>
      n.querySelector("img").src.replace("posters", "xl").replace("s_", "xl_")
    );
  });

  const filteredPosters = posters.filter(
    (poster) =>
      poster !== "https://www.movieposterdb.com/images/mpdb-logo-red.svg"
  );

  const jsonPosters = JSON.stringify(filteredPosters);

  fs.writeFile("poster.json", jsonPosters, () => {
    console.log("Posters created");
  });
};

getData();
