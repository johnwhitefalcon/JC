import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

var browser = await puppeteer.launch();
var page = await browser.newPage();
await page.goto("https://reactjs.org/");

var grabheadline = await page.evaluate(function() {
    var headline = document.querySelector('.css-1s44ra')
    return headline.innerHTML
})

console.log(grabheadline);
await browser.close();
