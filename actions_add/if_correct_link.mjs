// import
import get_href_on_selector from './get_href_on_selector.mjs'
import not_find_href from './not_find_href.mjs'

// export
export default async (selectors, random_selector_number) => {
	const href = await get_href_on_selector(
		selectors,
		random_selector_number
	)

	if (not_find_href(href)) return true
	else return false
}
