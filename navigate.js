(function() {
	
	const TAB_ENCODINGH_SELECTOR = 'body > div.container-fluid > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(5) > a';
	const TAB_ENCODINGL_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(6) > a';
    const TAB_VERSION_SELECTOR = 'body > div.container-fluid > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(15) > a';
    const TAB_COZUNURLUK_SELECTOR ='body > div > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(7) > a';
	
	module.exports.toEncodingHigh = async function(page) {
		await page.click(TAB_ENCODINGH_SELECTOR);
		await page.waitFor(2000);
	}
	module.exports.toEncodingLow = async function(page) {
        await page.click(TAB_ENCODINGL_SELECTOR);
        await page.waitFor(2000);
    }    
	module.exports.toVersion = async function(page) {
		await page.click(TAB_VERSION_SELECTOR);
		await page.waitFor(2000);
	}
	module.exports.toCozunurluk = async function(page) {
		await page.click(TAB_COZUNURLUK_SELECTOR);
		await page.waitFor(2000);
	}	
}());
