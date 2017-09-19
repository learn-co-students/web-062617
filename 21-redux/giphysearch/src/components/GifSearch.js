import React from 'react'
import { connect } from 'react-redux'
import { fetchGifs } from '../actions/gifs'


class GifSearch extends React.Component {

  state = {
    searchTerm: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.searchGifs(this.state.searchTerm)
    this.setState({
      searchTerm:""
    })

  }


  handleInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })


  }


  render() {
    console.log("SEARCH GIF PROPS",this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInputChange} value={this.state.searchTerm}/>
        <input type="submit" value="Search"/>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    searchGifs: (searchTerm) => {
      dispatch(fetchGifs(searchTerm))

    }
  }
}

export default connect(null,mapDispatchToProps)(GifSearch)
