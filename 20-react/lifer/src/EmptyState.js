import React from 'react'


class EmptyState extends React.Component {



  render() {
    console.log("Rendering Empty State")

    return (<p>No Inputs</p>)

  }


  componentWillUnmount() {
    console.log("Empty State Unmounting")
  }
}


export default EmptyState
