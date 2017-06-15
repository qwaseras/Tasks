class TasksController < ApplicationController
  def create
  	@task = Task.new(task_params)
  end

  def index
  	@tasks = Task.all
  end
  
  private

  def task_params
  	params.require(:task).permit(:description)
  end
end
