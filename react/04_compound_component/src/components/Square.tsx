import React from 'react';

interface Props {
	color:string;
}

const Square = (props:Props) => {

	const squareStyle:React.CSSProperties = {
		backgroundColor:props.color,
		height:150
	}
	
	return(
		<div style={squareStyle}></div>
	)
}

export default Square;