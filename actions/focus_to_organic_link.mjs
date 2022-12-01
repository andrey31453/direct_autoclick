// import
import timeout from '../main_add/timeout.mjs'
import selectors from '../data/selectors.mjs'
import get_selectors_random_number from '../actions_add/get_selectors_random_number.mjs'
import mouse_move_onto_selector from '../actions_add/mouse_move_onto_selector.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates
) => {
	// chose random direct link
	const link_random_number = await get_selectors_random_number(
		page,
		selectors.organic_link,
		false
	)

	// focus on link
	mouse_coordinates = await mouse_move_onto_selector(
		browser_size,
		page,
		selectors.organic_link,
		link_random_number,
		mouse_coordinates
	)

	// wait for load page
	await timeout(10, false)

	return { page, mouse_coordinates }
}
