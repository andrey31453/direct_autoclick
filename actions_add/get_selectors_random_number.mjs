// import
import get_selectors_random_number from './get_selectors_random_number.mjs'
import if_correct_link from './if_correct_link.mjs'

// export
export default async (page, selector, click_function) => {
	const selectors = await page.$$(selector)
	const random_selector_number = Math.floor(
		selectors.length * Math.random()
	)
	if (
		!click_function ||
		(await if_correct_link(selectors, random_selector_number))
	) {
		return random_selector_number
	} else {
		return await get_selectors_random_number(
			page,
			selector,
			click_function
		)
	}
}
