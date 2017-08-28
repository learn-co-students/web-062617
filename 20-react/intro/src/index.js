import React from 'react'
import ReactDOM from 'react-dom'




const FirstComponent = React.createClass({
  render() {
    return (<h1>Hello from fist Component</h1>)
  }
})




class ClassComponent extends React.Component {
  render() {
    return(
        <div>
        <h1>Hello from Class Component</h1>
        <FunctionalComponent/>
        </div>
    )
  }
}

const FunctionalComponent = () => {
  return (<div><h1>Hello from Functional Component</h1></div>)
}






ReactDOM.render(<ClassComponent/>, document.getElementById('main'))
