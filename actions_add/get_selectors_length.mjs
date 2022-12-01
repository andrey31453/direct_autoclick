export default async (page, selector) => {
	const result = await page.$$(selector)

	return result.length
}
