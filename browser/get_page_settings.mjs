// import
import get_browser_size from '../browser_add/get_browser_size.mjs'
import get_start_mouse_coordinates from '../browser_add/get_start_mouse_coordinates.mjs'

// export
export default async () => {
	// get start parametres

	const browser_size = get_browser_size() // get browser sizes

	let mouse_coordinates = get_start_mouse_coordinates(
		browser_size.w,
		browser_size.h
	) // set start coordinates

	return { browser_size, mouse_coordinates }
}
