function booksReducer(state = {
  list:[{id: 1, title: "The Lion, The Witch And The Wardrobe"},
          {id: 2, title:"Jon Snow Rocks"}]}, action) {



  switch (action.type) {
    case "ADD_BOOK":

      const newBook = {id: state.list.length + 1, title: action.payload}
      return Object.assign({}, state, {list: [...state.list, newBook]})
    case "REMOVE_BOOK":
      const filteredArray = state.list.filter((book) => book.title !== action.payload)
      return Object.assign({}, state, {list: filteredArray})
    default:
      return state
  }

}


export default booksReducer
