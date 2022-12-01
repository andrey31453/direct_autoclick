// import
import scroll_to from '../actions_add/scroll_to.mjs'
import get_scroll_random_value from '../actions_add/get_scroll_random_value.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates
) => {
	let scroll_value = await get_scroll_random_value(browser_size.h)
	if (Math.random() > 0.5) scroll_value = -scroll_value

	await scroll_to(page, scroll_value)

	return { page, mouse_coordinates }
}
