import {useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';

interface Props {
	list:ShoppingItem[];
	remove(id:number):void;
	edit(item:ShoppingItem):void;
}

interface State {
	removeIndex:number;
	editIndex:number;
}

const ShoppingList = (props:Props) => {
	
	const [state,setState] = useState<State>({
		removeIndex:-1,
		editIndex:-1
	})
	
	const changeMode = (mode:string,index:number) => {
		switch(mode) {
			case "remove":{
				setState({
					removeIndex:index,
					editIndex:-1
				})
				return;
			}
			case "edit":{
				setState({
					removeIndex:-1,
					editIndex:number
				})
				return;
			}
			case "cancel":{
				setState({
					removeIndex:-1,
					editIndex:-1
				})
				return;
			}
			default:{
				return;
			}
		}
	}
	
	const removeItem = (id:number) => {
		props.remove(id);
		changeMode("cancel",0);
	}
	
	const editItem = (item:ShoppingItem) => {
		props.edit(item);
		changeMode("cancel",0);
	}
	
	const shoppingItems = props.list.map((item,index) => {
		if(state.removeIndex === index) {
			return(
				<RemoveRow key={item.id} item={item} removeItem={removeItem} changeMode={changeMode}/>
			)
		}
		if(state.editIndex === index) {
			return (
				<EditRow key={item.id} item={item} editItem={editItem} changeMode={changeMode}/>
			)
		}
		return(
			<Row key={item.id} item={item} index={index} changeMode={changeMode}/>
		)
	})
	
	return(
		<table className="table table-striped">
			<thead>
				<tr>
					<th>Type</th>
					<th>Count</th>
					<th>Price</th>
					<th>Remove</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
			{shoppingItems}
			</tbody>
		</table>
	)
	
}

export default ShoppingList;