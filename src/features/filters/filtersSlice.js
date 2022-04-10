import { createSlice } from '@reduxjs/toolkit';

export const StatusFilters = {
	All: 'all',
	Active: 'active',
	Completed: 'completed',
}

const initialState = {
	status: StatusFilters.All,
	colors: []
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		statusFilterChanged(state, action) {
			state.status = action.payload
		},
		colorFilterChanged: {
			reducer(state, action) {
				let { color, changeType } = action.payload
				const { colors } = state
				switch (changeType) {
					case 'added': {
						if (!colors.includes(color)) {
							colors.push(color)
						}
						break
					}
					case 'removed': {
						state.colors = colors.filter(
							(existingColor) => existingColor !== color
						)
					}
					default:
						return
				}
			},
			prepare(color, changeType) {
				return {
					payload: { color, changeType },
				}
			},
		},
	},
})

export const { colorFilterChanged, statusFilterChanged } = filtersSlice.actions

export default filtersSlice.reducer

// export default function filtersReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case 'filters/statusFilterChanged': {
// 			return {
// 				...state, status: action.payload
// 			}
// 		}
// 		case 'filters/colorFilterChanged': {
// 			let { color, changeType } = action.payload
// 			const { colors } = state

// 			switch (changeType) {
// 				case 'added': {
// 					if (colors.includes(color)) {
// 						// This color already is set as a filter. Don't change the state.
// 						return state
// 					}

// 					return {
// 						...state,
// 						colors: state.colors.concat(color),
// 					}
// 				}
// 				case 'removed': {
// 					return {
// 						...state,
// 						colors: state.colors.filter(
// 							(existingColor) => existingColor !== color
// 						),
// 					}
// 				}
// 				default:
// 					return state
// 			}
// 		}
// 		default:
// 			return state;
// 	}
// }

// export const statusFilterChanged = (status) => ({
// 	type: 'filters/statusFilterChanged',
// 	payload: status,
// });

// export const colorFilterChanged = (color, changeType) => {
// 	return {
// 		type: 'filters/colorfilterchanged',
// 		payload: { color, changeType }
// 	}
// }