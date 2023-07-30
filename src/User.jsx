
export  function User(props) {
    if (props.isGas===true) {
	return (
		<div>
			{props.name} {props.age}
		</div>
	)}
}