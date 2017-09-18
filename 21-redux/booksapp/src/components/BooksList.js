import React from 'react'
import BooksItem from './BooksItem'

const BooksList = (props) => {


  const bookItems = props.books.map((book) => <BooksItem key={book.id} book={book.volumeInfo.title}/>)
  return (
    <ul>
      {bookItems}
    </ul>
  )
}

export default BooksList
