import React,{useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';

interface Props {
	item:ShoppingItem;
	editItem(item:ShoppingItem):void;
	changeMode(mode:string,index:number):void;
}

interface State {
	type:string;
	count:number;
	price:number;
}

const EditRow = (props:Props) => {
	
	const [state,setState] = useState<State>({
		type:props.item.type,
		count:props.item.count,
		price:props.item.price
	})
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const editItem = () => {
		let item = new ShoppingItem(state.type,state.count,state.price,props.item.id);
		props.editItem(item);
	}
	return (
		<tr>
			<td>
				<input type="text"
						name="type"
						id="type"
						className="form-control"
						onChange={onChange}
						value={state.type}/>
			</td>
			<td>
				<input type="number"
						name="count"
						id="count"
						className="form-control"
						onChange={onChange}
						value={state.count}/>
			</td>
			<td>
				<input type="number"
						name="price"
						id="price"
						className="form-control"
						step="0.01"
						onChange={onChange}
						value={state.price}/>
			</td>
			<td><button className="btn btn-success" onClick={editItem}>Save</button></td>
			<td><button className="btn btn-danger" onClick={() => props.changeMode("cancel",0)}>Cancel</button></td>
		</tr>
	)
}

export default EditRow;