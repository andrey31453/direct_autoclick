// export
export default async (page, selector, n) => {
	const search_area = await page.$$(selector)

	const rect = await page.evaluate((el) => {
		let { x, y } = el.getBoundingClientRect()
		x = Math.round(x)
		y = Math.round(y)
		const w = Math.round(el.clientWidth * (Math.random() * 0.6 + 0.2))
		const h = Math.round(
			el.clientHeight * (Math.random() * 0.6 + 0.2)
		)
		return { x, y, w, h }
	}, search_area[n])

	return rect
}
