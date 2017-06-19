var TaskList = React.createClass({
	render: function(){
		return(
			<div>
			{this.props.tasks.map(function(task){
					return(	
							<Task key={task.id} task={task} />

					)
					}
				)}
				</div>
		)
	}
})