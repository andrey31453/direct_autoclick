// import
import get_area_coordinates from './get_area_coordinates.mjs'
import scroll_to_visibility from './scroll_to_visibility.mjs'
import mouse_move from './mouse_move.mjs'

// export
export default async (
	browser_size,
	page,
	selector,
	n,
	mouse_coordinates
) => {
	// calc new mouse coord

	const rect = await get_area_coordinates(page, selector, n)

	let new_coordinates = { x: rect.x + rect.w, y: rect.y + rect.h }

	new_coordinates = await scroll_to_visibility(
		browser_size,
		page,
		mouse_coordinates,
		new_coordinates
	)

	await mouse_move(page, mouse_coordinates, new_coordinates)

	return new_coordinates
}
