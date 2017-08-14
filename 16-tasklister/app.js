// Wait for the entire document to load before executing code / attaching listeners
document.addEventListener('DOMContentLoaded', function() {

  // Render main app template (defined in App class definition)
  App.render('main', App.template())

  // Grab the DOM elements you will attach listeners to
  const addListForm = document.getElementById('list-form')
  const taskFormContainerEl = document.body     // delegated to other elements
  const listDeleteContainerEl = document.body   // delegated to other elements
  const taskDeleteContainerEl = document.body   // delegated to other elements

  // Attach event listener to wait for event to fire, then run callback code
  addListForm.addEventListener('submit', addListHandler)
  taskFormContainerEl.addEventListener('submit', addTaskHandler)
  listDeleteContainerEl.addEventListener('click', deleteListHandler)
  taskDeleteContainerEl.addEventListener('click', deleteTaskHandler)
})

// This is a parent too all other components
class App {

  // Defines the app structure (see that it's missing from `index.html`)
  static template() {
    return `
      <h1>Task Lister</h1>
      <div id="list-form-container">${ListForm.render()}</div>
      <div id="task-form-container"></div>
      <div id="lists-container"></div>
      `
  }

  // DRY's up the rendering code by extracting logic here
  static render(selector, template) {
    const container = document.querySelector(selector)
    container.innerHTML = template
  }
}
