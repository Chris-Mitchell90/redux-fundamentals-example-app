// import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './features/todos/todosSlice';
import filtersReducer from './features/filters/filtersSlice';
// import ThunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { rootReducer } from "./reducer";
// import { alwaysReturnHelloMiddleware, delayedMessageMiddleware, loggerMiddleware, print1, print2, print3 } from './exampleAddons/middleware';
// import { sayHiOnDispatch, includeMeaningOfLife } from "./exampleAddons/enhancers";

// const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

// export const store = createStore(rootReducer, composedEnhancer);

export const store = configureStore({
	reducer: {
		// Define a top-level state field named `todos`, handled by `todosReducer`
		todos: todosReducer,
		filters: filtersReducer
	}
})
// let preloadedState;
// const persistedTodosString = localStorage.getItem('todos');

// if (persistedTodosString) {
// 	preloadedState = {
// 		todos: JSON.parse(persistedTodosString)
// 	};
// };

// const middlewareEnhancer = applyMiddleware(print1, print2, print3, alwaysReturnHelloMiddleware, delayedMessageMiddleware, loggerMiddleware);

//EXAMPLE of async MIDDLEWARE

// const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware)
// const store = createStore(rootReducer, middlewareEnhancer)

// Write a function that has `dispatch` and `getState` as arguments
// const fetchSomeData = (dispatch, getState) => {
// 	// Make an async HTTP request
// 	client.get('todos').then(todos => {
// 		// Dispatch an action with the todos we received
// 		dispatch({ type: 'todos/todosLoaded', payload: todos })
// 		// Check the updated store state after dispatching
// 		const allTodos = getState().todos
// 		console.log('Number of todos after loading: ', allTodos.length)
// 	})
// }

// Pass the _function_ we wrote to `dispatch`
// store.dispatch(fetchSomeData)
// logs: 'Number of todos after loading: ###'

// const composedEnhancer = composeWithDevTools(applyMiddleware(print1, print2, print3, alwaysReturnHelloMiddleware, delayedMessageMiddleware, loggerMiddleware));



