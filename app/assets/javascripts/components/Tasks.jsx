var Tasks = React.createClass({
	render: function(){
		return (
			<div>
				{this.props.tasks.map(function(task){
					return(	
						<Task key={task.id} task={task} />
					)
					}
				)}	
				<TaskForm />
			</div>
		)
	}

});