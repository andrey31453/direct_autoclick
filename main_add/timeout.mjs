// import
import get_random_time from './get_random_time.mjs'

// export
export default async (factor, type) => {
	// set timer
	let timer
	if (type) {
		timer = factor
	} else {
		timer = get_random_time(factor)
	}

	// return promise
	return new Promise((resolve) => setTimeout(resolve, timer))
}
