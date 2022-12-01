// import
import close_browser from '../browser/close_browser.mjs'
// actions
import stack from '../actions/stack.mjs'
import scroll from '../actions/scroll.mjs'
import click_to_organic_link from '../actions/click_to_organic_link.mjs'
import click_to_direct_links from '../actions/click_to_direct_links.mjs'
import change_query from '../actions/change_query.mjs'
import reload_page from '../actions/reload_page.mjs'
import click_to_link from '../actions/click_to_link.mjs'
import focus_to_organic_link from '../actions/focus_to_organic_link.mjs'
import focus_to_link from '../actions/focus_to_link.mjs'
import open_new_yandex_page from '../actions/open_new_yandex_page.mjs'

// export
export default [
	// close browser
	{
		rank: {
			y_page: 10,
			not_y_page: 5,
		},
		func: close_browser,
		name: 'close_browser',
	},
	{
		rank: {
			y_page: 5,
			not_y_page: 0,
		},
		func: click_to_direct_links,
		name: 'click_to_direct_links',
	},
	{
		rank: {
			y_page: 50,
			not_y_page: 0,
		},
		func: click_to_organic_link,
		name: 'click_to_organic_link',
	},
	{
		rank: {
			y_page: 20,
			not_y_page: 30,
		},
		func: click_to_link,
		name: 'click_to_link',
	},
	{
		rank: {
			y_page: 20,
			not_y_page: 0,
		},
		func: focus_to_organic_link,
		name: 'focus_to_organic_link',
	},
	{
		rank: {
			y_page: 20,
			not_y_page: 20,
		},
		func: focus_to_link,
		name: 'focus_to_link',
	},
	{
		rank: {
			y_page: 20,
			not_y_page: 20,
		},
		func: stack,
		name: 'stack',
	},
	{
		rank: {
			y_page: 20,
			not_y_page: 20,
		},
		func: scroll,
		name: 'scroll',
	},
	{
		rank: {
			y_page: 10,
			not_y_page: 0,
		},
		func: change_query,
		name: 'change_query',
	},
	{
		rank: {
			y_page: 5,
			not_y_page: 0,
		},
		func: open_new_yandex_page,
		name: 'open_new_yandex_page',
	},
	{
		rank: {
			y_page: 5,
			not_y_page: 10,
		},
		func: reload_page,
		name: 'reload_page',
	},
]
