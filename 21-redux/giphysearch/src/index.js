import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux' // if its not provider or connect its coming redux
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import gifsReducer from './reducers/gifsReducer'
import videoReducer from './reducers/videoReducer'



const rootReducer = combineReducers({gifs: gifsReducer, videos: videoReducer})


const store = createStore(rootReducer, applyMiddleware(thunk))
// const store = createStore(gifsReducer, applyMiddleware(thunk))

console.log(store.getState())


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
