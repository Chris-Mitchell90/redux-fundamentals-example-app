import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux';
import App from './App'
import './api/server'
import { store } from './store';
import { fetchTodos } from './features/todos/todosSlice';

store.dispatch(fetchTodos())

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
// // log: 'Hi!'
// const dispatchResult = store.dispatch({ type: 'some/action' });
// console.log(dispatchResult, 'dispatch');
// console.log('State after dispatch: ', store.getState());

// console.log('Dispatching action')
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// console.log('Dispatch complete')

// console.log('initial', store.getState())

// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// );

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' });
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' });

// store.dispatch({ type: 'todos/todoToggled', payload: 0 });
// store.dispatch({ type: 'todos/todoToggled', payload: 1 });

// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' });

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'added' }
// });

// unsubscribe();

// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
