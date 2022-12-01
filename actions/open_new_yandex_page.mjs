// import
import open_query_in_y_page from '../actions/open_query_in_y_page.mjs'
import open_page from '../browser/open_page.mjs'
import root_link from '../data/root_link.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates
) => {
	page = await open_page(browser, browser_size, root_link) // open yandex page

	// open query in yandex page
	const response = await open_query_in_y_page(
		browser,
		browser_size,
		page,
		mouse_coordinates,
		true
	)

	return { page: response.page, mouse_coordinates }
}
