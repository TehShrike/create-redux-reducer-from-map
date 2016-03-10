My own personal preference for building reducers for Redux.

```js

var makeReducer = require('create-redux-reducer-from-map')

const arithmeticReducer = makeReducer({
	ADD: (state, action) => state + action.payload,
	SUBTRACT: (state, action) => state - action.payload
}, 0)


```

# makeReducer(mapOfFunctions[, initialState])

Returns a reducer appropriate for Redux.  Takes an map of action types to functions taking `(state, action)`.

# License

[WTFPL](http://wtfpl2.com/)
