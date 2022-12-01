// import
import timeout from '../main_add/timeout.mjs'
import page_load_delay from '../data/page_load_delay.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates
) => {
	await page.reload()

	// await for load page
	await timeout(page_load_delay, true)
	await timeout(10, false)

	return { page, mouse_coordinates }
}
