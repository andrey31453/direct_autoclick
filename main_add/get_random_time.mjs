export default (factor) => {
	const random_time =
		50 +
		Math.round(factor * 100 * Math.random()) +
		factor * 500 * Math.trunc((10 * Math.random()) / 9)

	return random_time
}
