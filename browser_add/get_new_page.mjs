// import
import timeout from '../main_add/timeout.mjs'

// export
export default async (browser, initialy_pages_length) => {
	let i = 0

	while (i < 10) {
		const pages_length = (await browser.pages()).length

		if (pages_length == initialy_pages_length) {
			i++
			await timeout(10)
		} else {
			return (await browser.pages())[pages_length - 1]
		}
	}

	return false
}
