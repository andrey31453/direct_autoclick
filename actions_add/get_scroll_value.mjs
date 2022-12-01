// import
import get_scroll_random_value from './get_scroll_random_value.mjs'

// export
export default (browser_size, new_coordinates) => {
	if (new_coordinates.y >= browser_size.h) {
		return get_scroll_random_value(browser_size.h)
	} else if (new_coordinates.y < 0) {
		return -get_scroll_random_value(browser_size.h)
	}
	return 0
}
