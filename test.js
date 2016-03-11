var test = require('tape')
var makeReducer = require('./')

test('stupid basic test', t => {
	var reducer = makeReducer({
		ADD: (state, action) => state + action.payload
	})

	t.equal(6, reducer(2, { type: 'ADD', payload: 4 }))
	t.equal(1, reducer(1, { type: 'NOTHING' }))

	t.end()
})
