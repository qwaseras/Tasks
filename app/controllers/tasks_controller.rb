class TasksController < ApplicationController

  def index
  	@tasks = Task.all
  end

   def create
  	@task = Task.new(task_params)

  	if @task.save
  		render json: @task
  	else
  		render json: @task.errors, status: :unprocessable_entity
  	end
  end

  def update
  	task = Task.find(params["id"])
    task.update_attributes(task_params)
  end

  private
  def task_params
  	params.require(:task).permit(:description, :isdone, :overtaskid)
  end
end
