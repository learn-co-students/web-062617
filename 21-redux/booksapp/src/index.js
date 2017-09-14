import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'



function rootReducer(state = {
  books: [
    {id: 1, title:"The Count of Monte Cristo"},
  {id: 2, title:"Three Musketeers"},
  {id: 3, title:"Romeo and Juliet"}],
selectedBook:""}, action) {


  switch (action.type) {
    case "ADD_BOOK":
      return Object.assign({}, state, {books: [...state.books, action.payload]})
    case "REMOVE_BOOK":
      const indexToFind = state.books.findIndex((book) => book.id == action.payload.id)
      const newArray = [...state.books.slice(0, indexToFind), ...state.books.slice(indexToFind + 1)]
      return Object.assign({}, state, {books: newArray})
    default:
      return state
  }
  // make some decision and return a value

}

/// Our reducers are used to create our store
/// without tellers a bank vault cant work

const store = createStore(rootReducer)
console.log(store)

function addBook(book) {
  return {
    type:"ADD_BOOK",
    payload: book
  }
}

function removeBook(book) {
  return {
    type:"REMOVE_BOOK",
    payload: book
  }
}

store.dispatch(addBook({id:4, title: "Man in the Iron Mask"}))

console.log(store.getState())
store.dispatch(removeBook({id:2, title: "Three Musketeers"}))
console.log(store.getState())





//reducers
//store
//actions






ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
