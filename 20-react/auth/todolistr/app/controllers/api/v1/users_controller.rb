class Api::V1::UsersController < ApplicationController
  before_action :authorized, only: [:me]
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(username: params[:username], password:params[:password])
    if @user.save
      payload = { user_id: @user.id}
      render json: {user: @user, jwt: issue_token(payload)}
      ## send some message for success
    else
      ## send some error message
    end
  end


  def me
    render json: current_user
  end


  def todos
    todos = current_user.todos
    render json: todos
    # returns for us a list of the users todos
  end

end
