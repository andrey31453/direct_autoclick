// import
import get_action from '../main_add/get_action.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates,
	page_type
) => {
	const action = get_action(page_type)

	const response = await action(
		browser,
		browser_size,
		page,
		mouse_coordinates
	) // do action

	return {
		page: response.page,
		mouse_coordinates: response.mouse_coordinates,
	}
}
