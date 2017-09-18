function booksReducer(state = {
  list:[{id: 1, volumeInfo:{title: "The Lion, The Witch And The Wardrobe"}},
          {id: 2, volumeInfo:{title:"Jon Snow Rocks"}}],
  isLoading:false}, action) {



  switch (action.type) {
    case "ADD_BOOK":

      const newBook = {id: state.list.length + 1, title: action.payload}
      return Object.assign({}, state, {list: [...state.list, newBook]})
    case "REMOVE_BOOK":
      const filteredArray = state.list.filter((book) => book.title !== action.payload)
      return Object.assign({}, state, {list: filteredArray})
    case "FETCHING_BOOKS":
      return Object.assign({}, state, {isLoading: true})
    case "FETCHED_BOOKS":
      return Object.assign({}, state, {list: action.payload, isLoading: false})
    default:
      return state
  }

}


export default booksReducer
