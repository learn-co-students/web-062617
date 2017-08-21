// Model's job
  // Create instances
  // Hold state for class and instances

function getQuestionClass() {
  let question_id = 0

  return class Question {
    static build(questions) {
      return questions.map(function(question) {
        return new Question(
          question.question,
          question.category,
          question.difficulty,
          question.correct_answer,
        )
      })
    }

    static find(id) {
      return App.store.questions.filter(function(question) {
        return question.id === id
      })[0]
    }

    constructor(text, category, difficulty, correctAnswer) {
      this.id = ++question_id
      this.text = text
      this.category = category
      this.difficulty = difficulty
      this.answer = correctAnswer === 'True' ? true : false
      this.isAnswered = false
      App.store.questions.push(this)
    }

    el() {
      return $(`#question-${this.id}`)
    }

    setAnswer(val) {
      this.isCorrect = val
      this.isAnswered = true
    }

    template() {
      const disabled = this.isAnswered ? 'disabled' : ''
      return `
        <div class="question" id="question-${this.id}" data-correct-answer="${this.isCorrect}">
          <h2 class="question-title">${this.text}</h2>
          <h3 class="question-category">${this.category}</h3>
          <h4 class="question-difficulty">${this.difficulty}</h4>

          <button class="question-answer question-true" ${disabled} data-id="${this.id}" data-val="1">True</button>
          <button class="question-answer question-false" ${disabled} data-id="${this.id}" data-val="0">False</button>
        </div>
      `
    }
  }
}

let Question = getQuestionClass()
