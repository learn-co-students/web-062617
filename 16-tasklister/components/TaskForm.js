// View-based class which just contains some HTML for rendering
class TaskForm {
  static render() {
    const listOptions = List.all()
      .map(list => `<option value=${list.id}>${list.name}</option>`)
      .join('')

    return `
      <form id="task-form">
        <div>
          <label for="task-list">Select task list:</label>
          <select id="task-list">${listOptions}</select>
        </div>
        <div>
          <label for="task-description">Add task description:</label>
          <input id="task-description" type="text" placeholder="Description">
        </div>
        <div>
          <label for="task-priority">Add task priority:</label>
          <input id="task-priority" type="text" placeholder="Priority">
        </div>
        <button type="submit">Add task</button>
      </form>
      `
  }
}
