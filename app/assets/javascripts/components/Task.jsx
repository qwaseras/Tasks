var Task = React.createClass({
	getInitialState: function(){
		console.log(`${this.props.task.isdone}`);
		return{
			task: this.props.task,
			isdone: this.props.task.isdone	
		}
	},
	handleChange: function(e){
		this.setState({isdone: e.target.checked})//i think when we call onChange, e.target.checked stores old state of 'checked', thats why i put !this.state.isdone below
		this.submitCheckBox();
	},



	submitCheckBox: function(obj){
		var task = {
			isdone: !this.state.isdone, //here
			description: this.state.task.description
		};
		$.ajax({ 
		 	url: `/tasks/${this.state.task.id}`,
		 	 type: 'PUT', 
		 	 data: {  task },
		 	 success: () => { console.log(' checkbox with id #' + this.state.task.id
			  											+ ' updated! - ' + task["isdone"]); } 
		 	});		 	
	},

	render: function(){
		return(
			<div>			
				<form >
					<label className="custom-control custom-checkbox">
					  <input type="checkbox" 
					  		className="custom-control-input"
					  		defaultChecked = {this.state.isdone}
					  		onChange = {this.handleChange}/>
					  <span className="custom-control-indicator">
					  </span>
					  {
						  !this.state.isdone ?
						<span className="custom-control-description">{this.props.task.description}</span> :
						<span className="custom-control-description"><del>{this.props.task.description}</del></span>
					  }
					</label>
				</form>			
				<p  className="text-muted"><small>Created: {this.props.task.updated_at} </small></p>
			</div>	
			)
		}
}
)
				