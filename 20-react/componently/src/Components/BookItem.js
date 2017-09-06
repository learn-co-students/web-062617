import React from 'react'


class BookItem extends React.Component {

  handleClick = (event) => {
    console.log("I was clicked", event.target)
    console.log(this.props.book)
    this.props.addBook()
    /// needs to know from its parent what do when a book is clicked
    /// this.props.addBook()
  }


  render () {
    return (
      <li onClick={this.handleClick}>{this.props.book.title} - {this.props.book.author}</li>
    )
  }
}




export default BookItem
