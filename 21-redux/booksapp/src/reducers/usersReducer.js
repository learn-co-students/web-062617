function usersReducer(state = {
  friends: [{
    id: 1, name: "Meryl"
  }, {id: 2, name: "Yomi"}]
}, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return state
    default:
      return state
  }

}

export default usersReducer
