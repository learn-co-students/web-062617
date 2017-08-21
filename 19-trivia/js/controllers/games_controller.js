// Controller's job
  // Get data from user
  // Update model / get information
  // Render

class GamesController {
  static handleGameSelection(event) {
    let difficulty = this.dataset.difficulty;

    function displayQuestions(data) {
      const game = new Game(data.results)
      const template = game.template()
      App.render(template, '#main-page')
    }

    GameAdapter
      .getQuestions(difficulty)
      .then(displayQuestions)
  }
}
