// import
import functions from '../main_add/functions.mjs'

// export
export default (page_type) => {
	let max_val = 0
	let max_number = -1

	for (let i = 0; i < functions.length; i++) {
		const random = functions[i].rank[page_type] * Math.random()

		if (random > max_val) {
			max_val = random
			max_number = i
		}
	}
	return max_number
}
