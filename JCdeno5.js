//THIS CODE DOES WORK

import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

(async () => {
var browser = await puppeteer.launch();
var page = await browser.newPage();
await page.goto("https://www.youtube.com/");

var grabYoutubeTitles = await page.evaluate(()=> {
    var titleTags = document.querySelectorAll('#video-title');
    var titles = [];
    titleTags.forEach((element)=> {
        titles.push(element.innerHTML);
    })
return titles

})

await console.log(grabYoutubeTitles);

await browser.close();

})();