import React from 'react'

class UltraTest extends React.Component {

  render() {
    console.log("UltraTest Props",this.props.match.params.id)
    return (
      <p>{this.props.match.params.id}</p>
    )
  }
}


export default UltraTest
