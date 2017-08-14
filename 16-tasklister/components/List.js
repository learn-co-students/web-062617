const List = (function createListClass() {

  // Private "class" variables
  let all = []
  let id = 0

  // Returning class from Immediately Invoked Function Expression
  return class List {

    // Static methods below this line
    static all() { return all }

    static find(listId) { return all.find(list => list.id === listId) }

    static renderContainer() {
      const listsHTML = this.all().map(list => list.render()).join("")
      return `<div>${listsHTML}</div>`
    }

    // Prototype methods below this line
    tasks() { return Task.all().filter(task => task.listId === this.id) }

    delete() { all = all.filter(list => list.id !== this.id) }

    constructor(name) {
      this.id = ++id
      this.name = name
      all.push(this)
    }

    render() {
      const taskListItems = this.tasks().map(task => task.render()).join('')
      return `
        <div>
          <h4>${this.name}</h4>
          <button class="delete-list" data-list-id="${this.id}">
            Delete List
          </button>
          <ul>${taskListItems}</ul>
        </div>
        `
    }
  }
})()
