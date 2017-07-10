require_relative 'environment'

class Runner
  def run
    person = LoginSignup.run
    game = GameStarter.run(person)
    game = PlayGame.run(game)
  end
end

runner = Runner.new
runner.run