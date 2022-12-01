export default async (selectors, random_selector_number) => {
	const params = await Promise.all(
		selectors.map((handle) => handle.getProperty('href'))
	)
	const hrefs = await Promise.all(
		params.map((handle) => handle.jsonValue())
	)

	return hrefs[random_selector_number]
}
