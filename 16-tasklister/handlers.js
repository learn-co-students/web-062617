function addListHandler(event) {

  // 0. Prevent default event or event propogation here (optional)
  event.preventDefault()

  // 1. Get input from user
  let listTitleEl = document.getElementById('list-title')
  let listTitle = listTitleEl.value

  // 2. Do something with user input
  new List(listTitle)

  // 3. Re-render the view to reflect changes
  listTitleEl.value = ''
  const listsContainerTemplate = List.renderContainer()
  const taskFormTemplate = TaskForm.render()
  App.render('#lists-container', listsContainerTemplate)
  App.render('#task-form-container', taskFormTemplate)
}

function addTaskHandler(event) {

  // Only run code triggered by this event if the event target is what you expect
  // This is called event delegation and allows us to "attach" events to
  // elements which are not on the page when the page is created
  if (event.target.id === 'task-form') {

    // 0.
    event.preventDefault()

    // 1.
    let taskDescriptionEl = document.getElementById('task-description')
    let taskDescription = taskDescriptionEl.value
    let taskPriorityEl = document.getElementById('task-priority')
    let taskPriority = taskPriorityEl.value
    let taskListEl = document.getElementById('task-list')
    let taskList = parseInt(taskListEl.value)

    // 2.
    new Task(taskDescription, taskPriority, taskList)

    // 3.
    taskDescriptionEl.value = ''
    taskPriorityEl.value = ''
    const listsContainerTemplate = List.renderContainer()
    App.render('#lists-container', listsContainerTemplate)
  }
}

function deleteTaskHandler(event) {

  // Event delegation
  if (event.target.classList.contains('delete-task')) {

    // 1.
    const taskId = parseInt(event.target.dataset.taskId)

    // 2.
    Task.find(taskId).delete()

    // 3.
    const listsContainerTemplate = List.renderContainer()
    App.render('#lists-container', listsContainerTemplate)
  }
}

function deleteListHandler(event) {

  // Event delegation
  if (event.target.classList.contains('delete-list')) {

    // 1.
    const listId = parseInt(event.target.dataset.listId)

    // 2.
    List.find(listId).delete()

    // 3.
    const listsContainerTemplate = List.renderContainer()
    App.render('#lists-container', listsContainerTemplate)
  }
}
