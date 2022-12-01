// import
import keyboard_down from './keyboard_down.mjs'
import keyboard_press from './keyboard_press.mjs'
import keyboard_up from './keyboard_up.mjs'

// export
export default async (page) => {
	await keyboard_down(page, 'Control')
	await keyboard_press(page, 'KeyA')
	await keyboard_up(page, 'Control')

	await keyboard_press(page, 'Backspace')
	await keyboard_press(page, 'Delete')
}
