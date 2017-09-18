import React from 'react'
import BooksList from './BooksList'
import { connect } from 'react-redux'
import BooksForm from './BooksForm'

class BooksContainer extends React.Component {

  render() {
    console.log(this.props)

    return (
      <div>
        <BooksForm />
        <BooksList books={this.props.books}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state)
  return {
     books: state.books.list
  }
}

export default connect(mapStateToProps)(BooksContainer)
