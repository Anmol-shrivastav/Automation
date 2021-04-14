const puppeteer = require("puppeteer");
var numberofpicture = process.argv[2];
(async function(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://en-gb.facebook.com/login/");
    await page.type("input[type='text']", "anmolshrivastav.08@gmail.com");
    await page.type("input[type='password']", "Mahadev@2000");
    await page.click("button[type='submit']");
    await page.waitForSelector(".pybr56ya .k4urcfbm a", {visible: true});
    await page.click(".pybr56ya .k4urcfbm a");
    setTimeout(function() { console.log("Hello"); }, 6000);
    await page.waitForSelector(".actionChildElement", {visible: true});
    await page.click(".actionChildElement");
    var url = await page.url();
    console.log(url);
    url += "_albums";
    console.log(url);
    await page.goto(url);
    await page.waitForSelector(".sjgh65i0 .j83agx80 .rq0escxv .dati1w0a .j83agx80 .rq0escxv .l9j0dhe7 a");
    await page.click(".sjgh65i0 .j83agx80 .rq0escxv .dati1w0a .j83agx80 .rq0escxv .l9j0dhe7 a");
    //Image click
    await page.waitForSelector(".j83agx80 .rq0escxv .j83agx80 .g6srhlxm a");
    await page.click(".j83agx80 .rq0escxv .j83agx80 .g6srhlxm a");
    var i = 1;
    do{
        //Download popup
        await page.waitForSelector(".btwxx1t3 .nqmvxvec .oajrlxb2", { visible: true});
        await page.click(".btwxx1t3 .nqmvxvec .oajrlxb2");
        //Click on download button
        await page.waitForSelector(".l9j0dhe7 .rq0escxv .q5bimw55 .j83agx80 .tojvnm2t a .bp9cbjyn i");
        await page.click(".l9j0dhe7 .rq0escxv .q5bimw55 .j83agx80 .tojvnm2t a .bp9cbjyn i");
        //Next Click
        await page.waitForSelector(".sx_af3990");
        await page.click(".sx_af3990");
        i++;
    }while(i <= numberofpicture){

    }
    
})();
