// import
import timeout from '../main_add/timeout.mjs'
import do_action from './do_action.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates,
	page_type
) => {
	await timeout(10)
	const response = await do_action(
		browser,
		browser_size,
		page,
		mouse_coordinates,
		page_type
	)

	return {
		page: response.page,
		mouse_coordinates: response.mouse_coordinates,
	}
}
