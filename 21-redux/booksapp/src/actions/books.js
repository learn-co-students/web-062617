export function addBook(book) {
  return {
    type: "ADD_BOOK",
    payload: book
  }
}


export function removeBook(title) {
  return {
    type:"REMOVE_BOOK",
    payload: title
  }
}
