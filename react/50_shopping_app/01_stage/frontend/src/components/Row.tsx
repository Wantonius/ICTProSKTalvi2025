import ShoppingItem from '../models/ShoppingItem';

interface Props {
	item:ShoppingItem;
	index:number;
	changeMode(mode:string,index:number):void;
}

const Row = (props:Props) => {
	
	return(
		<tr>
			<td>{props.item.type}</td>
			<td>{props.item.count}</td>
			<td>{props.item.price}</td>
			<td><button className="btn btn-danger" onClick={() => props.changeMode("remove",props.index)}>Remove</button></td>
			<td><button className="btn btn-secondary" onClick={() => props.changeMode("edit",props.index)}>Edit</button></td>
		</tr>
	)
}

export default Row;