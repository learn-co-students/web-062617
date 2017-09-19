
function gifsReducer(state = { list: []}, action) {
  switch (action.type) {
    case "FETCHED_GIFS":
      return Object.assign({}, state, {list: action.payload})
    case "DELETE_GIF":
      const filteredGifs = state.list.filter((gif) => gif.slug !== action.payload.slug)
      return Object.assign({}, state, {list: filteredGifs})
    default:
      return state
  }

}


export default gifsReducer
