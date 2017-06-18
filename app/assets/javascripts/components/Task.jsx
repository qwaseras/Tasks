var Task = React.createClass({
	getInitialState: function(){
		console.log(`${this.props.task.isdone}`);
		return{
			task: this.props.task,
			isdone: this.props.task.isdone
			
		}
	},
	handleChange: function(e){
		obj={};
		obj["isdone"] = !this.state.isdone;
			
		this.handleUserInput(obj);
		this.submitCheckBox();
	},

	handleUserInput: function(obj){
		this.setState(obj)
	},

	submitCheckBox: function(obj){
		var task = {
			isdone: this.state.isdone
		}
		$.ajax({ 
		 	url: `/tasks/${this.state.task.id}`,
		 	 type: 'PUT', 
		 	 data: { task: task },
		 	 success: () => { console.log('updated!'); } 
		 	});
		 	
	},
	render: function(){
		return(
			<div>			
				<form >
					<label className="custom-control custom-checkbox">
					  <input type="checkbox" 
					  		className="custom-control-input"
					  		checked = {this.state.task.isdone}
					  		onChange = {this.handleChange}/>
					  <span className="custom-control-indicator">
					  </span>
					  <span className="custom-control-description">{this.props.task.description}</span>
					</label>
				</form>			
				<p  className="text-muted"><small>Created: {this.props.task.updated_at} </small></p>
			</div>	
			)
		}
}
)
				