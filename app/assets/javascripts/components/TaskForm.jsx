var TaskForm = React.createClass({
	handleChange: function(e){
		var name = e.target.name;
		obj={};
		obj[name] = e.target.value;
		this.props.onUserInput(obj)
	},
	handleSubmit: function(e){
		e.preventDefault();
		this.props.onFormSubmit();	
	},

	render: function(){
		return(
			<div id="formContainer">
			<form id="taskForm"  onSubmit={this.handleSubmit}>
				<input id="inputField"
					name="description" 
					type="text" 
					placeholder="Type your task" 
					value={this.props.input_description} 
					onChange={this.handleChange}
				/>
				<input id="submitButton" type="submit" className="btn btn-info" value="Add task"/>
			</form>
			</div>
		)

	}
})