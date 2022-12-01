// import
import timeout from '../main_add/timeout.mjs'

// export
export default async (page, old_coord, new_coord) => {
	// var-s
	const step_quantity = 10
	const step_interval = 1
	const step = {
		x: Math.round((new_coord.x - old_coord.x) / step_quantity),
		y: Math.round((new_coord.y - old_coord.y) / step_quantity),
	}

	// launch
	for (let i = 0; i < step_quantity; i++) {
		await page.mouse.move(
			old_coord.x + step.x * i,
			old_coord.y + step.y * i
		)
		await timeout(step_interval, true)
	}

	await page.mouse.move(new_coord.x, new_coord.y)
}
