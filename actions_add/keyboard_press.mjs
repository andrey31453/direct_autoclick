// import
import timeout from '../main_add/timeout.mjs'

// export
export default async (page, name) => {
	await timeout(3, false)
	await page.keyboard.press(name)
}
