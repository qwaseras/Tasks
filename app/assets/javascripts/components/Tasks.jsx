
var Tasks = React.createClass({
	getInitialState: function(){
		return{
			tasks: this.props.tasks,
			description: '',
			isdone: false,
			overtaskid: 0
		}
	},
	handleUserInput: function(obj){
		this.setState(obj)
	},



	handleFormSubmit: function(){
		var task = {
			description: this.state.description, 
			isdone : this.state.isdone,
			overtaskid: this.state.overtaskid
			};
		 $.ajax({ 
		 	url: '/tasks',
		 	 type: 'POST', 
		 	 data: { task },
		 	 success: (response) => { console.log('task added', response); } 
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
			<div >
				<TaskList tasks={this.state.tasks}
				 onCheckBoxChange = {this.handleUserInput}
				 submitCheckBox = {this.submitCheckBox}
				 />
				<TaskForm input_description={this.state.description}
				 onUserInput={this.handleUserInput} 
				 onFormSubmit={this.handleFormSubmit}/>
			</div>
		)
	}

});