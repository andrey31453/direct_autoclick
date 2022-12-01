// import
import click_to_organic_link from '../actions/click_to_organic_link.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates,
	selectors_length
) => {
	let response
	for (
		let i = Math.max(selectors_length - 4, 0);
		i < selectors_length;
		i++
	) {
		response = await click_to_organic_link(
			browser,
			browser_size,
			page,
			mouse_coordinates,
			i
		)
	}

	return {
		page: response.page,
		mouse_coordinates: response.mouse_coordinates,
	}
}
