var TaskList = React.createClass({

	// getRootTasks: function(tasks){
	// 	rootTasks = [];
	// 	tasks.forEach(function(task) {
	// 		if (task.overtaskid == 0) {
	// 			rootTasks.push(task);
	// 		}
	// 	}, this);
	// 	return(
	// 		rootTasks
	// 	)
	// },

	// taskRender: function(rootTask,){
	// 	subTasks = [];
	// 	this.props.tasks.forEach(function(subTask) {
	// 		if (subTask.overtaskid == rootTask.id) {
	// 			subTasks.push(subTask);
	// 		}
	// 	}, this);		
		
	// 	return(
	// 	<Task key = {rootTask.id} task ={rootTask} />
	// 		subTasks.forEach(function(subTask) {
	// 			taskRender(subTask)
	// 		}, this)
	// 	)
	// },
	
	// render: function(){
	// 	return(
	// 		<div>
	// 			{this.getRootTasks(this.props.tasks).map(function(rootTask){
	// 				return(
	// 					this.taskRender(rootTask)
	// 				)
	// 			})}
	// 		</div>		
	// 	)
	// }
	render: function(){
		return(
			<div>
			{this.props.tasks.map(function(task, index){
					return(	
							<Task key={index} task={task} />
					)
					}
				)}
				</div>
		)
	}
})