import {useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';
import {useDispatch,useSelector} from 'react-redux';
import {Action,AppState} from '../types/states';
import {ThunkDispatch} from 'redux-thunk';
import {remove,edit} from '../actions/shoppingActions';


interface State {
	removeIndex:number;
	editIndex:number;
}

const ShoppingList = () => {
	
	const dispatch:ThunkDispatch<any,any,Action> = useDispatch();
	
	const appStateSelector = (state:AppState) => {
		return {
			token:state.login.token,
			list:state.shopping.list
		}
	}
	
	const appState = useSelector(appStateSelector);
	
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
					editIndex:index
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
	
	const removeItem = (id:string) => {
		dispatch(remove(appState.token,id));
		changeMode("cancel",0);
	}
	
	const editItem = (item:ShoppingItem) => {
		dispatch(edit(appState.token,item));
		changeMode("cancel",0);
	}
	
	const shoppingItems = appState.list.map((item,index) => {
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