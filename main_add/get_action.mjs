// import
import chose_action from '../main_add/chose_action.mjs'
import functions from '../main_add/functions.mjs'

// export
export default (page_type) => {
	const action_number = chose_action(page_type)
	console.log('action name: ', functions[action_number].name)

	return functions[action_number].func
}
