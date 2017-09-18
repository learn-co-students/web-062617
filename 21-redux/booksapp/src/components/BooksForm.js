import React from 'react'
import { connect } from 'react-redux'
import * as BookActions from '../actions/books'
import { bindActionCreators } from 'redux'

class BooksForm extends React.Component {
  state = {
    book: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addBook(this.state.book)
    this.setState({
      book:""
    })
      // do some stuff
  }
  handleInputChange = (event) => {
    this.setState({
      book: event.target.value
    })
  }
  render() {
    console.log("NEW PROPS", this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInputChange} value={this.state.book} />
        <input type="submit" value="Submit"/>
      </form>

    )

  }
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators(BookActions, dispatch)
}

export default connect(null,mapDispatchToProps)(BooksForm)
