export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}

export const loggerMiddleware = storeAPI => next => action => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", storeAPI.getState());
  return result
}

export const alwaysReturnHelloMiddleware = storeAPI => next => action => {
  const originalResult = next(action);
// Ignore the original result, return something else
return 'Hello!'
}

export const delayedMessageMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload)
    }, 1000)
  }
  return next(action)
};

//specific use case
export const fetchtodosMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/fetchTodos') {
    client.get('todos').then(todos => {
      storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos })
    })
  }
  return next(action)
};

//better example of something that can be re-used
const asyncFunctionMiddleware = storeAPI => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action)
}