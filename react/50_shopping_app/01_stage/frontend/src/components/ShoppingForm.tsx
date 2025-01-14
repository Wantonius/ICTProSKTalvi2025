import React,{useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';

interface State {
	type:string;
	count:number;
	price:number;
}

interface Props {
	add(item:ShoppingItem):void;
}

const ShoppingForm = (props:Props) => {
	
	const [state,setState] = useState<State>({
		type:"",
		count:0,
		price:0
	})
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onSubmit = (event:React.SyntheticEvent) => {
		event.preventDefault();
		let item = new ShoppingItem(state.type,state.count,state.price,0);
		props.add(item);
		setState({
			type:"",
			count:0,
			price:0
		})
	}
	return(
		<div style={{"width":"40%","backgroundColor":"pink","margin":"auto","textAlign":"center"}}>
			<form onSubmit={onSubmit} className="m-5">
				<label htmlFor="type" className="form-label">Type</label>
				<input type="text"
						name="type"
						id="type"
						onChange={onChange}
						value={state.type}/>
				<label htmlFor="count" className="form-label">Count</label>
				<input type="number"
						name="count"
						id="count"
						onChange={onChange}
						value={state.count}/>
				<label htmlFor="price" className="form-label">Price</label>
				<input type="number"
						name="price"
						id="price"
						step="0.01"
						onChange={onChange}
						value={state.price}/>
				<input type="submit" value="Add"/>
			</form>
		</div>
	)
}

export default ShoppingForm;