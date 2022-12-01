// import
import next_action from './next_action.mjs'
import do_one_action from '../main/do_one_action.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates,
	page_type
) => {
	const response = await do_one_action(
		browser,
		browser_size,
		page,
		mouse_coordinates,
		page_type
	) // do action

	await next_action(
		browser,
		browser_size,
		response.page,
		response.mouse_coordinates,
		page_type
	) // do next action
}
