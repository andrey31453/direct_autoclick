// import
import browser_folders from '../data/browser_folders.mjs'

// export
export default () => {
	const b_folders = browser_folders[browser_folders.location]
	const b_folder =
		b_folders[Math.floor(b_folders.length * Math.random())]

	return b_folder
}
