// Model's job
  // Create instances
  // Hold state for class and instances

function getGameClass() {
  let game_id = 0

  return class Game {
    constructor(results) {
      this.id = ++game_id
      this.questions = Question.build(results)
      App.store.games.push(this)
    }

    el() {
      return $(`#game-${this.id}`)
    }

    template() {
      return `
        <div id="game-${this.id}">
          <h1>Game ${this.id}</h1>
          ${this.questions.map(question => question.template()).join("\n")}
          <button class="game" data-difficulty="easy">Start easy Game</button>
          <button class="game" data-difficulty="medium">Start medium Game</button>
          <button class="game" data-difficulty="hard">Start hard Game</button>
        </div>
      `
    }
  }
}

let Game = getGameClass()
