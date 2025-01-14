import useAction from './hooks/useAction';
import ShoppingForm from './components/ShoppingForm';
import {useEffect} from 'react';

function App() {

	const {add,getList} = useAction();
	
	useEffect(() => {
		getList();
	},[])

	return (
		<>
			<ShoppingForm add={add}/>
		</>
	)
}

export default App
