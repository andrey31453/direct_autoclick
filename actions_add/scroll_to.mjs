export default async (page, scroll_value) => {
	await page.mouse.wheel({ deltaY: scroll_value })
}
