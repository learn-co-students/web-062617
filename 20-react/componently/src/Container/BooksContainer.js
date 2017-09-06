import React from 'react'
import BookItem from '../Components/BookItem'

class BooksContainer extends React.Component {



  constructor(props) {
    super(props)
    this.state = {
      books: [
        {title: "Count of Monte Cristo", author: "Dumas"},
        {title: "Three Musketeers", author: "Dumas"},
        {title: "Romeo & Juliet", author: "Will"}
      ]
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }


  addBook = (book) => {
    // do some book stuff
  }

  componentDidMount() {
    // fetch('https://www.googleapis.com/books/v1/volumes?q=subject:suspense&maxResults=40')
    //   .then(res => res.json())
    //   .then(books => {
    //     this.setState({
    //       books: books
    //     })
    //   })
  }

  handleButtonClick = () => {



    const booksToSort = [...this.state.books]
    const sortedBooks = booksToSort.sort((a, b) => {
      return a.title > b.title
    })
    this.setState({
      books: sortedBooks

    })

  }
  render () {

    const bookItems = this.state.books.map((book, index) => <BookItem addBook={this.addBook} key={index} book={book}/>)
    return (
      <div>
      <ul>
        {bookItems}
      </ul>
        <BooksDetail>
          <p>Hey Im inside of BooksDetail</p>
        </BooksDetail>
        <button onClick={this.handleButtonClick}>Sort Books</button>
      </div>
    )
  }
}

// i am a separate component in a separate file


const BooksDetail = (props) => {
  console.log("booksDetail Props",props)
  return (
    <div>
      <p>Hey Im above children</p>
    {props.children}
    <p>Hey im below children</p>
    </div>

  )
}

export default BooksContainer
