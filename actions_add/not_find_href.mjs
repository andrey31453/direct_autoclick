// import
import ban_links from '../data/ban_links.mjs'

// export
export default (href) => {
	for (let i = 0; i < ban_links.length; i++) {
		if (href.search(ban_links[i]) != -1) return false
	}
	return true
}
