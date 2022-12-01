// import
import puppeteer from 'puppeteer'
import get_browser_folder from '../browser_add/get_browser_folder.mjs'

// export
export default async () => {
	// chose browser
	const browser_folder = get_browser_folder()

	// open browser
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 20 + 10 * Math.trunc(10 * Math.random()),
		devtools: Math.random() > 0.15 ? false : true,
		ignoreHTTPSErrors: true,
		executablePath: browser_folder,
	})

	return browser
}
