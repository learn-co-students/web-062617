import React from 'react'

class EmptyState extends React.Component {
  render() {
    console.log("Rendering")
    return (
      <p>Hello from Empty</p>
    )
  }


  componentWillUnmount() {
    console.log("Empty state unmounting")
  }
}

export default EmptyState
