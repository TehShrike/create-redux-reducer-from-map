module.exports = function makeReducer(mapOfFunctions, initialState) {
	return function(state, action) {
		if (typeof state === 'undefined' && typeof initialState !== 'undefined') {
			return initialState
		} else if (mapOfFunctions[action.type]) {
			return mapOfFunctions[action.type](state, action)
		} else {
			return state
		}
	}
}
