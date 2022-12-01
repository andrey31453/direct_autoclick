export default (b_width, b_height) => {
	const mouse_x = Math.round(b_width * Math.random())
	const mouse_y = Math.round(b_height * Math.random())

	return { x: mouse_x, y: mouse_y }
}
