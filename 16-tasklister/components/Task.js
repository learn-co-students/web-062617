const Task = (function createTaskClass() {

  // Private "class" variables
  let all = []
  let id = 0

  // Returning class from Immediately Invoked Function Expression
  return class Task {

    // Static methods below this line
    static find(taskId) { return all.find(task => task.id === taskId) }

    static all() { return all }

    // Prototype methods below this line
    delete() { all = all.filter(task => task.id !== this.id) }

    constructor(description, priority, listId) {
      this.id = ++id
      this.description = description
      this.priority = priority
      this.listId = listId
      all.push(this)
    }

    render() {
      return `
        <li id=${this.id}>
          <h3>${this.description}</h3>
          <small>${this.priority}</small>
          <button class="delete-task" data-task-id="${this.id}">
            Delete Task
          </button>
        </li>`
    }
  }
})()
