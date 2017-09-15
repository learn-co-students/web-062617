function booksReducer(state = {
  books:[{id: 1, title: "The Lion, The Witch And The Wardrobe"},
          {id: 2, title:"Jon Snow Rocks"}]}, action) {



  switch (action.type) {
    case "ADD_BOOK":
      const newBook = {id: state.books.length + 1, title: action.payload}
      return Object.assign({}, state, {books: [...state.books, newBook]})
    case "REMOVE_BOOK":
      const filteredArray = state.books.filter((book) => book.title !== action.payload)
      return Object.assign({}, state, {books: filteredArray})
    default:
      return state
  }

}


export default booksReducer
