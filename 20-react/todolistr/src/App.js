import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'



class App extends Component {


  state = {
    todos: [
      {task: "Wash Dishes"},
      {task: "Walk Dog"},
      {task: "Brush Teeth"}
    ],
    inputText: ""
  }



  deleteTodo = (todo) => {

    console.log("This", this)
    //
    // const newTodos = this.state.todos.filter((element) => {
    //   return element.task !== todo
    // })

    const indexToFind = this.state.todos.findIndex((element) => {
      return element.task == todo
    })

    const newTodos = [...this.state.todos.slice(0, indexToFind), ...this.state.todos.slice(indexToFind + 1)]


    this.setState({
      todos: newTodos
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)

    console.log("Hey I'm submitting", this.state.inputText)
    const newTask = { task: this.state.inputText}
    this.setState({
      todos: [...this.state.todos, newTask],
      inputText: ""
    })
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    console.log("My event", event.target.value)
    this.setState({ inputText: event.target.value})

  }


  beef(event) {
    event.preventDefault()
    console.log("Printing this", this)
  }

  render() {
    console.log("What is state", this.state)
    return (
      <div className="App">
        <form onSubmit={this.beef}>
          <input type="text" onChange={this.handleChange} value={this.state.inputText}/>
          <input type="submit" value="Submit"/>
        </form>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}



export default App;
