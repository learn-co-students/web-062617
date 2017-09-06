import React from 'react'


class Container extends React.Component {

  componentWillMount() {
    console.log("Container Will mount")
  }

  componentDidMount() {
    console.log("Container did Mount")
  }



  componentWillReceiveProps(nextProps) {
    console.log("Before", this.props, "After", nextProps)
  }


  render() {
    console.log("Container: Rendering", this.props)
    return (
      <p>Hello Im {this.props.inputValue}</p>
    )
  }
}

export default Container
