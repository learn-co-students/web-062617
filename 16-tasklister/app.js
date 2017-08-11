// Listen for an event when the page is finished loading
document.addEventListener('DOMContentLoaded', function() {
  // console.log('I\'m on the page')
  let formEl = document.getElementById('add-form')
  formEl.addEventListener('submit', function(event) {
    event.preventDefault()

    let listName = document.getElementById('add-list')
    // console.log(listName.value)
    new List(listName.value)

    const allListsHTML = List.renderAll()
    const allLists = document.getElementById('all-lists')
    allLists.innerHTML = allListsHTML
    // Insert allListsHTML into the DOM
  })
})

// List class
  // Instance has a name property
  // Class method: all()
  // Private class variable: all = []

const List = (function createListClass() {
  const all = []

  return class List {
    constructor(name) {
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
