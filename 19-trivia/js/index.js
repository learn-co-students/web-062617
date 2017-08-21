class App {
  static render(template, selector) {
    $(selector).empty()
    $(selector).html(template)
  }

  static init() {
    $('body').on('click', '.game', GamesController.handleGameSelection)
    $('body').on('click', '.question-answer', QuestionsController.handleAnswerSelection)
  }
}

App.store = {games: [], questions: []}

$(App.init)
