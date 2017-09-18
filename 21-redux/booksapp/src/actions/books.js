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


export function fetchBooks() {
  return function (dispatch) {
    dispatch({type:"FETCHING_BOOKS"})
    fetch('https://www.googleapis.com/books/v1/volumes?q=subject:suspense&maxResults=40')
      .then((res) => res.json())
      .then(books => {
        dispatch({type:"FETCHED_BOOKS", payload: books.items})
      })
  }
}
