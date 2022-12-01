// import
import open_browser from '../browser/open_browser.mjs'
import open_page from '../browser/open_page.mjs'
import get_page_settings from '../browser/get_page_settings.mjs'
import root_link from '../data/root_link.mjs'
import open_query_in_y_page from '../actions/open_query_in_y_page.mjs'
import next_action from './next_action.mjs'

// export
export default async () => {
	//
	// open browser and yandex page
	//
	const browser = await open_browser() // open browser
	let { browser_size, mouse_coordinates } = await get_page_settings() // get page settings

	let page = await open_page(browser, browser_size, root_link, true) // open yandex page

	// open query in yandex page
	const response = await open_query_in_y_page(
		browser,
		browser_size,
		page,
		mouse_coordinates,
		true
	)

	// actions
	await next_action(
		browser,
		browser_size,
		response.page,
		response.mouse_coordinates,
		'y_page'
	)
}
