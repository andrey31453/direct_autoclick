// import
import timeout from '../main_add/timeout.mjs'
import page_load_delay from '../data/page_load_delay.mjs'
import selectors from '../data/selectors.mjs'
import get_selectors_random_number from '../actions_add/get_selectors_random_number.mjs'
import click_on_selector from '../actions_add/click_on_selector.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates
) => {
	// chose random direct link
	let link_random_number = await get_selectors_random_number(
		page,
		selectors.link,
		true
	)

	// click on direct link
	mouse_coordinates = await click_on_selector(
		browser_size,
		page,
		selectors.link,
		link_random_number,
		mouse_coordinates
	)

	// wait for load page
	await timeout(page_load_delay, true)
	await timeout(10, false)

	// back to yandex page
	await page.bringToFront()

	return { page, mouse_coordinates }
}
