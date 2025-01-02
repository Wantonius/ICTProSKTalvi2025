import React,{useState} from 'react';
import Label from './Label';
import Square from './Square';

interface State {
	color:string;
}

const Card = () => {
	
	const [state,setState] = useState<State>({
		color:"red"
	})
	
	const onColorChange = () => {
		let color:string = "#";
		const letters:string = "ABCDEF0123456789"
		for (let i=0;i<6;i++) {
			let temp = Math.floor(Math.random()*16);
			color = color + letters[temp];
		}
		setState({
			color:color
		})
	}
	
	const cardStyle:React.CSSProperties = {
		height:200,
		width:150,
		backgroundColor:"#FFF",
		filter:"drop-shadow(0px 5px 5px #666)"
	}
	
	return(
		<div style={cardStyle}>
			<Square color={state.color}/>
			<Label color={state.color} onColorChange={onColorChange}/>
		</div>	
	)

}

export default Card;