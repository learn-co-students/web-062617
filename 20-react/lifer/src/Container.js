import React from 'react'

class Container extends React.Component {



  componentWillMount() {
    console.log("Container Will Mounting")
  }

  componentDidMount() {
    console.log("Container Mounting")
  }


  componentWillReceiveProps(nextProps) {
    console.log("Before", this.props, "After",nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update:", "Next Props", nextProps, "Next State", nextState)
    return true
  }


  componentWillUpdate(nextProps, nextState) {
    console.log("ComponentWillUpdate:", "Next Props", nextProps, "Next State", nextState)

  }


  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate:", "Prev Props", prevProps, "Prev State", prevState)

  }


  componentWillUnmount() {
    console.log("Unmounting")
  }

  render() {
    console.log("Container Rendering")
    return (
      <div>
        <p>Hi {`${this.props.inputValue}`}</p>
      </div>
    )
  }
}

export default Container
