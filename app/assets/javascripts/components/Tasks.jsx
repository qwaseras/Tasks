
var Tasks = React.createClass({
	getInitialState: function(){
		return{
			tasks: this.props.tasks,
			description: '',
		}
	},
	handleUserInput: function(obj){
		this.setState(obj)
	},

	handleFormSubmit: function(){
		var task = {
			description: this.state.description, 
			};
		 $.ajax({ 
		 	url: '/tasks',
		 	 type: 'POST', 
		 	 data: { task },
		 	 success: (response) => { console.log('it worked!', response); } 
		 	}).done(function(data){
		 		this.addNewTask(data);
		 	}.bind(this));
	},
	addNewTask: function(task){
		var tasks = React.addons.update(this.state.tasks,{$push: [task]});
		this.setState({tasks: tasks});
	},

	render: function(){
		return (
			<div  className="container col-md-2 col-md-offset-5">
				<TaskList tasks={this.state.tasks} />
				<TaskForm input_description={this.state.description}
				 onUserInput={this.handleUserInput} 
				 onFormSubmit={this.handleFormSubmit}/>
			</div>
		)
	}

});