import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import booksReducer from './reducers/booksReducer'
import authorsReducer from './reducers/authorsReducer'
import usersReducer from './reducers/usersReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({books: booksReducer, authors:authorsReducer, users: usersReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
//const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
