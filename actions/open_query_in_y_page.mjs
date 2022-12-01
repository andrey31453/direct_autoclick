// import
import selectors from '../data/selectors.mjs'
import timeout from '../main_add/timeout.mjs'
import click_on_selector from '../actions_add/click_on_selector.mjs'
import mouse_backlight from '../browser_add/mouse_backlight.mjs'
import get_random_time from '../main_add/get_random_time.mjs'
import page_load_delay from '../data/page_load_delay.mjs'
import write_query from '../actions_add/write_query.mjs'
import delete_text from '../actions_add/delete_text.mjs'
import keyboard_press from '../actions_add/keyboard_press.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates,
	first
) => {
	// click_on_selector
	await page.waitForSelector(selectors.search_textarea)

	mouse_coordinates = await click_on_selector(
		browser_size,
		page,
		selectors.search_textarea,
		0,
		mouse_coordinates
	)

	// delete text area value
	if (!first) {
		await timeout(10, false)
		await delete_text(page)
		await timeout(10, false)
	}

	// write query
	await write_query(page)

	// click enter and await page load
	await keyboard_press(page, 'Enter')
	await timeout(page_load_delay, true)
	await timeout(10, false)
	await page.waitForSelector('.organic__url')
	await timeout(5, false)

	// add mouse backlight
	await mouse_backlight(page)

	return { page, mouse_coordinates }
}
