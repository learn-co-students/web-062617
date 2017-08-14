document.addEventListener('DOMContentLoaded', function() {
  // Grab the add-list form element
  const addListForm = document.getElementById('list-form')

  // Add an event listener to handle the add-list form
  addListForm.addEventListener('submit', function(event) {
    event.preventDefault()

    // 1. Grab some user input
    let listTitleEl = document.getElementById('list-title')
    let listTitle = listTitleEl.value

    // 2. Do something with user input
    new List(listTitle)

    // 3. Render new/updated view
    const allListsTemplate = List.renderAll()
    const allListsContainerEl = document.getElementById('all-lists')
    allListsContainerEl.innerHTML = allListsTemplate

    const taskFormTemplate = TaskForm.render()
    const taskFormContainerEl = document.getElementById('task-form-container')
    taskFormContainerEl.innerHTML = taskFormTemplate
  })

  // Event delegation
  const taskFormContainerEl = document.getElementById('task-form-container')
  // Attach an event listener to an element that exists when the page is loaded
  taskFormContainerEl.addEventListener('submit', function(event) {
    // Then create a conditional which checks the source of the submit event
    if (event.target.id === 'task-form') {
      // Only do this code here if the submit event came from the task-form
      // And here, we would create a new task
    }
  })
})

const Task = (function createTaskClass() {
  const all = []
  let id = 0

  return class Task {
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
        ${this.description}: ${this.priority}
      </li>
      `
    }
  }
})()

const List = (function createListClass() {
  const all = []
  let id = 0

  return class List {
    constructor(name) {
      this.id = ++id
      this.name = name
      all.push(this)
    }

    render() {
      return `
      <div>
        <h4>${this.name}</h4>
      </div>
      `
    }

    static all() {
      return all
    }

    static renderAll() {
      const listsHTML = this.all().map(list => list.render()).join("")

      return `
      <div>
        ${listsHTML}
      </div>
      `
    }
  }
})()

// View-based class: how to render an element / group of elements
class TaskForm {
  static render() {
    const lists = List.all()
      .map(list => `<option value=${list.id}>${list.name}</option>`)
      .join('')

    return `
    <form id="task-form">
      <select id="task-list">${lists}</select>
      <input id="task-description" type="text" placeholder="Description">
      <input id="task-priority" type="text" placeholder="Priority">
      <button type="submit">Add task</button>
    </form>
    `
  }
}
