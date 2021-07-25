import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

var browser = await puppeteer.launch();
var page = await browser.newPage();
await page.goto("https://reactjs.org/");

await page.screenshot({path: "dtwo.png"});

await browser.close();