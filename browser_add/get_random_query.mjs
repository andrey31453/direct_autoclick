// import
import querys from '../data/querys.mjs'

// export
export default () => {
	const random_query_number = Math.round((querys.length - 1) * Math.random())

	return querys[random_query_number]
}
