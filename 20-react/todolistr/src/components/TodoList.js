import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {


  // at some pt we sent out a fetch to the internet


  // THESE ARE THE SAME THING
  //babel-preset-stage-1 babel-preset-stage-2
  state = {

  }


  onDelete = (someValue) => {
    this.props.deleteTodo(someValue)
    console.log(`Deleting ${someValue} from list`)
  }


  render() {

    console.log(this.props)

    const listItems = this.props.todos.map((todo, index) => <TodoItem onDelete={this.onDelete} key={index} todo={todo.task}/>)
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
