// import
import timeout from '../main_add/timeout.mjs'
import mouse_move_onto_selector from './mouse_move_onto_selector.mjs'
import mouseclick from './mouseclick.mjs'

// export
export default async (
	browser_size,
	page,
	selector,
	n,
	mouse_coordinates
) => {
	mouse_coordinates = await mouse_move_onto_selector(
		browser_size,
		page,
		selector,
		n,
		mouse_coordinates
	)

	timeout(3, false)

	// mouse click
	mouseclick(page, mouse_coordinates, false)

	return mouse_coordinates
}
