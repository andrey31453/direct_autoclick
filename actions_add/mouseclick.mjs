export default async (page, mouse_coordinates, type) => {
	// set mouse template
	let mouse_btn
	if (type) {
		mouse_btn = 'left'
	} else {
		mouse_btn = `${Math.random() > 0.5 ? 'middle' : 'left'}`
	}

	// click
	page.mouse.click(mouse_coordinates.x, mouse_coordinates.y, {
		button: mouse_btn,
	})
}
