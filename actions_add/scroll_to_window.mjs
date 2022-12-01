// import
import timeout from '../main_add/timeout.mjs'
import scroll_to from './scroll_to.mjs'
import scroll_to_visibility from './scroll_to_visibility.mjs'

// export
export default async (
	browser_size,
	page,
	mouse_coordinates,
	new_coordinates,
	scroll_value
) => {
	await scroll_to(page, scroll_value)
	new_coordinates.y = new_coordinates.y - scroll_value

	await timeout(20, false)

	await scroll_to_visibility(
		browser_size,
		page,
		mouse_coordinates,
		new_coordinates
	)

	return new_coordinates
}
