import React from 'react'

// ALL A FUNCTIONAL COMPONENT DOES IS
// TAKE A VALUE
// DISPLAY A VALUE

// const TodoItem = (props) => <li>{props.todo}</li>



class TodoItem extends React.Component {


  constructor() {
    super()


    // someValue = someValue + someMoreStuff
    // sum = sum + 1




   //
  this.someFunction = this.someFunction.bind(this)

  }


  handleClick = (event) => {

    this.props.onDelete(this.props.todo)

  }



  someFunction() {
    console.log("Hey This TODO IS", this)

  }

  /*



  */


  render() {
    return (
      <li onClick={this.handleClick}>{this.props.todo}</li>
    )
  }
}

export default TodoItem
