(function() {

	const IFRAME_SELECTOR = 'body > div.container-fluid > div:nth-child(3) > div.col-md-8 > div.view-container > div > form > div:nth-child(1) > div > div > input';
	const APPLY_BUTTON_SELECTOR = 'body > div.container-fluid > div:nth-child(3) > div.col-md-8 > div.view-container > div > form > div:nth-child(17) > div > div > button';
	const POPUP_SELECTOR = 'body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button';
    const IFRAME_SELECTOR_LOW = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > form > div:nth-child(1) > div > div > input';
    const BITRATE_KONTROL_METODU = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > form > div:nth-child(2) > div > div > select';
	const KODLAYICI_KALITESİ = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > form > div:nth-child(3) > div > div > select';
    const BITRATE_SANİYEDE_BIT_AKTARIMI = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > form > div:nth-child(6) > div > div > input';
    const UYGULA_BUTON = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > form > div:nth-child(9) > div > div > button';
    const KODLAMA_DUSUK_OK = 'body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button';
    const YAYIN1_COZUNURLUK = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(3) > div > div > select';
    const YAYIN1_FPS = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(4) > div > div > select';
    const COZUNURLUK_UYGULA = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(11) > div > div > button';
    const COZUNURLUK_OK_BUTTON = 'body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button';
    const YAYIN2_COZUNURLUK = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(5) > div > div > select';
    const YAYIN2_FPS = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(6) > div > div > select';
    const COZUNURLUK_PROFIL = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(1) > div > div > select';
    const COZUNURLUK_YAYIN_MODU = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(2) > div > div > select';
    
    
    /* module.exports.change = async function(page, iFrameInterval) {

		await page.click(IFRAME_SELECTOR);
		for (let i = 0; i < 10; i++)
			await page.keyboard.down('Backspace');
		await page.keyboard.type(iFrameInterval);
		await page.click(APPLY_BUTTON_SELECTOR);
		await page.waitFor(4000);
		await page.click(POPUP_SELECTOR);
		await page.waitFor(5000);
		console.log("Encoding settings applied");
	}
	*/
	
	module.exports.low = async function(page, iFrameInterval) {
		await page.click(IFRAME_SELECTOR_LOW);
		for (let i = 0; i < 10; i++)
			await page.keyboard.down('Backspace');
		await page.keyboard.type(iFrameInterval);
		await page.click(BITRATE_KONTROL_METODU);
        await page.keyboard.type('CBR');
        await page.click(BITRATE_KONTROL_METODU);
        await page.click(KODLAYICI_KALITESİ);
        await page.keyboard.type('Orta');
        await page.click(KODLAYICI_KALITESİ);
        await page.click(BITRATE_SANİYEDE_BIT_AKTARIMI);
        for (let i = 0; i < 10; i++)
			await page.keyboard.down('Backspace');
        await page.keyboard.type('0.4');
		await page.waitFor(4000);
		await page.click(UYGULA_BUTON);
		await page.waitFor(2000);
        await page.click(KODLAMA_DUSUK_OK);
		console.log("Encoding settings applied");
	}
	
	////////ÇÖZÜNÜRLÜK////////////
	module.exports.yayin1cozunurluk = async function(page, cozunurluk){
        await page.click(YAYIN1_COZUNURLUK);
        await page.keyboard.type(cozunurluk);
        await page.keyboard.type('Enter');
    }
    
    module.exports.yayin2cozunurluk = async function(page, cozunurluk){
        await page.click(YAYIN2_COZUNURLUK);
        await page.keyboard.type(cozunurluk);
        await page.keyboard.type('Enter');
    }
    module.exports.yayin1fps = async function (page, fps){
        await page.click(YAYIN1_FPS);
        await page.keyboard.type(fps);
        await page.keyboard.type('Enter');
    }
    module.exports.yayin2fps = async function (page, fps){
        await page.click(YAYIN2_FPS);
        await page.keyboard.type(fps);
        await page.keyboard.type('Enter');
    }
    module.exports.cozunurlukUygulaButton = async function (page){
        await page.click(COZUNURLUK_UYGULA);
        await page.waitFor(4000);
        await page.click(COZUNURLUK_OK_BUTTON);
        await page.waitFor(3000);
    }
    module.exports.cozunurlukProfil = async function (page, profil){
        await page.click(COZUNURLUK_PROFIL);
        await page.keyboard.type(profil);
        await page.keyboard.type('Enter');
    }
    module.exports.cozunurlukYayinModu = async function (page, yayinModu){
        await page.click(COZUNURLUK_YAYIN_MODU);
        await page.keyboard.type(yayinModu);
        await page.keyboard.type('Enter');
    }
    
}());
