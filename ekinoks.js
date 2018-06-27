const puppeteer = require('puppeteer');

var login = require("./login");
var nav = require("./navigate");
var encoding = require("./encoding");

let testIt = async () => {
	const browser = await puppeteer.launch({headless: false});

	const page = await browser.newPage();
	await login.loginCamera(page, 'http://10.5.177.47:8080'); //176.249    http://10.5.177.53:8080
/*
	while (1) {
		var iframes = ["12", "24", "36", "48"];
		for (let i = 0; i < iframes.length; i++) {
			await nav.toVersion(page);
			await nav.toEncodingHigh(page);
			console.log("Setting i-frame interval to " + iframes[i]);
			await encoding.change(page, iframes[i]);
		}
	}
*/	

    /////KONTROL 53-54-55-56-57-58-59-60//////
    {
        console.log("Document 1 Test Started" );
        var cozunurluk1 = ["1920 x 1080 (Max:30fps)", "1280 x 720 (Max:30fps)", "1280 x 720 (Max:25fps)", "1920 x 1080 (Max:25fps)"];
        var fps1 = ["15", "10", "20", "12.5"];
        var cozunurluk2 = ["640 x 368", "480 x 272", "320 x 180", "640 x 368"];
        var fps2 = ["5", "15", "20", "12.5"];
        for (let i = 0; i < cozunurluk1.length; i++){
            await nav.toCozunurluk(page);
            await encoding.cozunurlukYayinModu(page, "Yayın1");
            await encoding.yayin1cozunurluk(page, cozunurluk1[i]);  
            await encoding.yayin1fps(page, fps1[i]);
            await encoding.cozunurlukUygulaButton(page);
            console.log("Testing Done " + (i+53));
        }
        
        for (let i = 0; i < cozunurluk2.length; i++){
            await nav.toCozunurluk(page);
            await encoding.cozunurlukYayinModu(page, "Yayın1");
            await encoding.yayin2cozunurluk(page, cozunurluk2[i]);    
            await encoding.yayin2fps(page, fps2[i]);
            await encoding.cozunurlukUygulaButton(page);
            console.log("Testing Done " + (i+57));
        }
        
    }
    //////KONTROL 30//////
    {
        await nav.toCozunurluk(page);
        await encoding.cozunurlukProfil(page, '1080p');
        await encoding.cozunurlukYayinModu(page, 'Yayın1');
        await encoding.yayin1cozunurluk(page, "1920 x 1080 (Max:25fps)");
        await encoding.yayin1fps(page, '12.5');
        await encoding.yayin2cozunurluk(page, "640 x 368");
        await encoding.yayin2fps(page, '12.5');
        await encoding.cozunurlukUygulaButton(page);
        console.log("Testing Done 30" );
    }
            //////////DÖKÜMAN 2//////////
    ///////////61-62-63-64-65-66-67-68/////////// 
    {
        console.log("Document 2 Test Started" );
        //61-62-63-64
        for (let i = 0; i < cozunurluk1.length; i++){
            await nav.toCozunurluk(page);
            await encoding.cozunurlukYayinModu(page, "Yayın1");
            await encoding.yayin1cozunurluk(page, cozunurluk1[i]);
            await encoding.yayin1fps(page, fps1[i]);
            await encoding.cozunurlukUygulaButton(page);
            console.log("Testing Done " + (i+61));
            }
        //65-66-67-68
        for(let i = 0; i < cozunurluk2.length; i++){
            await nav.toCozunurluk(page);
            await encoding.cozunurlukYayinModu(page, "Yayın1");
            await encoding.yayin2cozunurluk(page, cozunurluk2[i]);
            await encoding.yayin2fps(page, fps2[i]);
            await encoding.cozunurlukUygulaButton(page);
            console.log("Testing Done " + (i+65));
        }
    }
    //29
    {
        await nav.toCozunurluk(page);
        await encoding.cozunurlukYayinModu(page, "Sadece yayın1");
        await encoding.yayin1cozunurluk(page, cozunurluk1[1]);
        await encoding.yayin1fps(page, fps1[1]);
        console.log("Testing Done 29" );
    }
    
	await page.waitFor(30000);
	await page.close();
	await browser.close();
	return 0;
}

testIt().then((value) => {
	console.log("Testing done " + value); // Success!
});
