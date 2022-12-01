// import
import get_new_page from '../browser_add/get_new_page.mjs'
import mouse_backlight from '../browser_add/mouse_backlight.mjs'
import one_action from '../main/one_action.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates,
	initialy_pages_length
) => {
	const new_page = await get_new_page(browser, initialy_pages_length)

	if (new_page) {
		await new_page.bringToFront()

		// add mouse backlight
		await mouse_backlight(new_page)

		while (Math.random() > 0.17) {
			// actions
			const response = await one_action(
				browser,
				browser_size,
				new_page,
				mouse_coordinates,
				'not_y_page'
			)
			mouse_coordinates = response.mouse_coordinates
		}

		console.log('new_page.close')
		await new_page.close()
	}
}
