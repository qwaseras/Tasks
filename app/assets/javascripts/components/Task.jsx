var Task = React.createClass({
	render: function(){
		return(
			<div>			
				<form >
					<label className="custom-control custom-checkbox">
					  <input type="checkbox" 
					  		className="custom-control-input"
					  		checked = {this.props.task.isdone}/>
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
				