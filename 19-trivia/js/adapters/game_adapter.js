// Adapter's job
  // Make requests
  // Keep information about the API

class GameAdapter {
  static getQuestions(difficulty) {
    return fetch(this.API_BASE_URL + `&difficulty=${difficulty}`)
      .then(function(response) {
        return response.json()
      })
  }
}

GameAdapter.API_BASE_URL = 'https://opentdb.com/api.php?amount=10&type=boolean'
