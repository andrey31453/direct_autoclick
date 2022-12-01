// import
import timeout from '../main_add/timeout.mjs'
import get_random_query from '../browser_add/get_random_query.mjs'

// export
export default async (page) => {
	await timeout(50, false) // timeout
	// write query
	const random_query = get_random_query()
	for (let i = 0; i < random_query.length; i++) {
		await timeout(1, false) // timeout
		await page.keyboard.type(`${random_query[i]}`)
	}
	await timeout(5, false) // timeout
}
