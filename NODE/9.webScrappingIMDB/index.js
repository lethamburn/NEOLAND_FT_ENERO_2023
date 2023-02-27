import fs from "fs";
import puppeteer from "puppeteer";
import inquirer from "inquirer";

const url = "https://www.imdb.com/";

const getData = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();
  await page.goto(url);
  await page.type("#suggestion-search", "The Mandalorian");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);
  await page.click(".ipc-metadata-list-summary-item__c");
  await page.waitForTimeout(7000);

  let data = await page.$eval("section.ipc-page-background", (node) => {
    return {
      title: node.querySelector("h1").innerText,
      synopsis: node.querySelector('[data-testid="storyline-plot-summary"]')
        .innerText,
      poster: node.querySelector(".ipc-image").src,
      cast: [],
    };
  });

  await page.waitForTimeout(1000);

  console.log(data);
  await browser.close();
};

getData();
