//THIS CODE DOES NOT WORK

import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";


var browser = await puppeteer.launch();
var page = await browser.newPage();
await page.goto("https://www.youtube.com/");

async function f1(){
var grabYoutubeTitles = await page.evaluate(function() {
    var titleTags = document.querySelectorAll('#video-title');
    var titles =[];
    for(var i = 0; i < titleTags.length; i++){
        var currenttitle = titleTag[i];
        titles.push(currenttitle.innerHTML);
    };
return titles;

});

await console.log(titles);

await browser.close();
};
f1();
//this code isnt working yet--i think it could be because the async await is only top level so in the brackets it will need an async function