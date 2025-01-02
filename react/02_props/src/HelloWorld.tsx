const HelloWorld = (props) => {

	let name:string = "World";
	if(props.name) {
		name = props.name;
	}
	return(
		<>
			<h2>Hello {name}</h2>
		</>
	)

}

export default HelloWorld;