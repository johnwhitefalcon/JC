//SUCCESS JC YOU GOT IT TO WORK

import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

async function f1() {
var browser = await puppeteer.launch();
var page = await browser.newPage();
await page.goto("https://www.youtube.com/");

var grabYoutubeTitles = await page.evaluate(function() {
    var titleTags = Array.from(document.querySelectorAll('#video-title'));
    var titles = [];
 //   titleTags.forEach((element)=> {
 //       titles.push(element.innerHTML);
 //  })
  for(i = 0; i<titleTags.length; i++){
      titles.push(titleTags[i].innerHTML);
  };
return titles


});

await console.log(grabYoutubeTitles);

await browser.close();

}
f1();