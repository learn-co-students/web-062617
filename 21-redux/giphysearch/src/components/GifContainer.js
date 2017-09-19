import React from 'react'
import { connect } from 'react-redux'
import { fetchGifs } from '../actions/gifs'
import GifsList from './GifList'
import GifSearch from './GifSearch'
import { bindActionCreators } from 'redux'



class GifContainer extends React.Component {
  componentDidMount() {

    this.props.fetchGifs("cats")
  }

  render() {

    return (
      <div>
        <GifSearch/>
        <GifsList gifs={this.props.gifs}/>
      </div>
    )
  }
}






function mapStateToProps(state) {
  return {
    gifs:state.gifs.list
  }
}


function mapDispatchToProps(dispatch) {
  // return {
  //   fetchGifs: (search) => {
  //     dispatch(fetchGifs(search))
  //   }
  // }

  return bindActionCreators({fetchGifs}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GifContainer)
