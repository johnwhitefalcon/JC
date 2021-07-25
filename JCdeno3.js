import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

var browser = await puppeteer.launch({headless: false});
var page = await browser.newPage();
await page.goto("https://quotes.toscrape.com/");

await page.waitForSelector(".col-md-4");
await page.click(".col-md-4 a");

await page.waitForSelector("#username");
await page.type("#username", "PedroTech");
await page.type("#password", "Password");

await page.click('.btn.btn-primary');

//var npage = await browser.newPage();

await page.screenshot({path: "hack.png"});

//await browser.close();