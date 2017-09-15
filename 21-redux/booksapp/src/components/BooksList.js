import React from 'react'
import BooksItem from './BooksItem'

const BooksList = (props) => {


  const bookItems = props.books.map((book) => <BooksItem key={book.id} book={book}/>)
  return (
    <ul>
      {bookItems}
    </ul>
  )
}

export default BooksList
