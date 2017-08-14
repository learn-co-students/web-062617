// View-based class which just contains some HTML for rendering
class ListForm {
  static render() {
    return `
      <form id="list-form">
        <div>
          <label for="list-title">Add a list</label>
          <input type="text" id="list-title" placeholder="List title">
        </div>
        <input type="submit" value="add (+)">
      </form>
      `
  }
}
