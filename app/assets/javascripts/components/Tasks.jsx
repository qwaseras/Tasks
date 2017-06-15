
var Tasks = React.createClass({
	getInitialState: function(){
		return{
			tasks: this.props.tasks,
			description: 'SampleTask',
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
		 	 success: (response) => { console.log('it worked!', response); } });
	},

	render: function(){
		return (
			<div>
				<TaskList tasks={this.state.tasks} />
				<TaskForm input_description={this.state.description}
				 onUserInput={this.handleUserInput} 
				 onFormSubmit={this.handleFormSubmit}/>
			</div>
		)
	}

});