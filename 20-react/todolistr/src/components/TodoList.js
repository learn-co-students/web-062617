import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {


  // at some pt we sent out a fetch to the internet


  // THESE ARE THE SAME THING
  //babel-preset-stage-1 babel-preset-stage-2
  state = {

  }

  render() {
    const listItems = this.props.todos.map((todo, index) => <TodoItem key={index} todo={todo.task}/>)
    // RULE -> AN ARRAY OF ITEMS IN JSX / REACT MUST HAVE A key

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}


export default TodoList
