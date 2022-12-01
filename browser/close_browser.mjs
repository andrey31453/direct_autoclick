import autoclick from '../main/autoclick.mjs'

// functions
export default async (browser) => {
	await browser.close()
	autoclick()
}
