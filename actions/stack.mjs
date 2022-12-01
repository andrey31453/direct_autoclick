// import
import timeout from '../main_add/timeout.mjs'

// export
export default async (
	browser,
	browser_size,
	page,
	mouse_coordinates
) => {
	await timeout(30, false)

	return { page, mouse_coordinates }
}
