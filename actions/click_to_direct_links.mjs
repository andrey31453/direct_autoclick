// import
import click_to_top_organic_links from '../actions_add/click_to_top_organic_links.mjs'
import click_to_bottom_organic_links from '../actions_add/click_to_bottom_organic_links.mjs'
import get_selectors_length from '../actions_add/get_selectors_length.mjs'
import selectors from '../data/selectors.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates
) => {
	// chose random direct link
	const selectors_length = await get_selectors_length(
		page,
		selectors.organic_link
	)
	let response

	if (Math.random() > 0.5) {
		response = await click_to_top_organic_links(
			browser,
			browser_size,
			page,
			mouse_coordinates,
			selectors_length
		)
	} else {
		response = await click_to_bottom_organic_links(
			browser,
			browser_size,
			page,
			mouse_coordinates,
			selectors_length
		)
	}

	return {
		page: response.page,
		mouse_coordinates: response.mouse_coordinates,
	}
}
