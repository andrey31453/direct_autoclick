// export
export default () => {
	const sizes = [
		{ w: 1280, h: 1024 },
		{ w: 1280, h: 1024 },
		{ w: 1600, h: 1200 },
		{ w: 1680, h: 1050 },
		{ w: 1680, h: 1050 },
		{ w: 1680, h: 1050 },
		{ w: 1900, h: 1200 },
		{ w: 1920, h: 1080 },
		{ w: 1920, h: 1080 },
		{ w: 1920, h: 1080 },
		{ w: 1920, h: 1080 },
		{ w: 800, h: 600 },
		{ w: 1024, h: 768 },
		{ w: 1024, h: 768 },
	]

	// return
	return sizes[Math.floor(sizes.length * Math.random())]
}
