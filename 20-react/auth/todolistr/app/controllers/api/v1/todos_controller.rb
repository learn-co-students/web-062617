class Api::V1::TodosController < ApplicationController
  before_action :authorized, only: [:index]
  def index
    user = current_user
    render json: user.todos
  end
end
