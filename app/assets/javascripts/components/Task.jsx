var Task = React.createClass({
	render: function(){
		return(
			<div>			
				<form>
					<input type="checkbox" id="taskCheckBox"/>
					<label for="taskCheckBox">{this.props.task.description}</label>							
				</form>			
				<p>Created: {this.props.task.updated_at}</p>
			</div>	
			)
		}
}
)
				