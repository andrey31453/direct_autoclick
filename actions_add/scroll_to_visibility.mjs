// import
import get_scroll_value from './get_scroll_value.mjs'
import scroll_to_window from './scroll_to_window.mjs'

// export
export default async (
	browser_size,
	page,
	mouse_coordinates,
	new_coordinates
) => {
	// get scroll value or 0
	const scroll_value = get_scroll_value(browser_size, new_coordinates)

	if (scroll_value !== 0) {
		// scroll window visibility if scroll value != 0
		new_coordinates = await scroll_to_window(
			browser_size,
			page,
			mouse_coordinates,
			new_coordinates,
			scroll_value
		)
	}

	return new_coordinates
}
