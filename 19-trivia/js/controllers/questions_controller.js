// Controller's job
  // Get data from user
  // Update model / get information
  // Render

class QuestionsController {
  static handleAnswerSelection(event) {
    // Get the true/false value of the answer clicked
    const answerVal = !!this.dataset.val
    // Find the question by the id passed to the answer button
    const questionId = parseInt(this.dataset.id)
    const question = Question.find(questionId)
    // Figure out if the answer is correct and set on question
    const isCorrectAnswer = question.answer === answerVal
    question.setAnswer(isCorrectAnswer)

    // Rerender
    const questionTemplate = question.template()
    App.render(questionTemplate, `#question-${question.id}`)
  }
}
