// import
import user_agents from 'user-agents'
import mouse_backlight from '../browser_add/mouse_backlight.mjs'

// export
export default async (browser, browser_size, link, first) => {
	// open page
	let page
	if (first && Math.random() > 0.25) {
		page = (await browser.pages())[0]
	} else {
		page = await browser.newPage()
	}

	await page.setUserAgent(user_agents.toString()) // set user agent
	await page.setViewport({
		width: browser_size.w,
		height: browser_size.h,
	})
	await page.goto(link, {
		waitUntil: 'domcontentloaded',
		timeout: 30000000,
		ignoreHTTPSErrors: true,
	})

	// add mouse backlight
	await mouse_backlight(page)

	return page
}
