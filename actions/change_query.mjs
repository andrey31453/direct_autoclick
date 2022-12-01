// import
import open_query_in_y_page from './open_query_in_y_page.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates
) => {
	const response = await open_query_in_y_page(
		browser,
		browser_size,
		page,
		mouse_coordinates,
		false
	)

	return {
		page: response.page,
		mouse_coordinates: response.mouse_coordinates,
	}
}
