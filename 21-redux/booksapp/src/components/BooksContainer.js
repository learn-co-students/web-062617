import React from 'react'
import BooksList from './BooksList'
import { connect } from 'react-redux'
import BooksForm from './BooksForm'
import * as BookActions from '../actions/books'
import { bindActionCreators } from 'redux'

class BooksContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

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

function mapDispatchToProps(dispatch) {

  return bindActionCreators(BookActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
