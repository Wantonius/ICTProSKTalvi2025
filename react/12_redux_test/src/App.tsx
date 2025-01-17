import {useDispatch,useSelector} from 'react-redux';
import {State} from './reducers/countReducer';

function App() {

	const dispatch = useDispatch();
	
	const countSelector = (state:State) => {
		console.log("In App.tsx selector. Current state",state)
		return state.count
	}
	let count = useSelector(countSelector);
	
	return (
		<>
			<h2>Current count:{count}</h2>
			<button onClick={() => {
				console.log("In App.tsx. Action INCREMENT");
				dispatch({
					type:"INCREMENT"
				})
			}}>+</button>
			<button onClick={() => {
				console.log("In App.tsx. Action DECREMENT");
				dispatch({
					type:"DECREMENT"
				})
			}}>-</button>
		</>
	)
}

export default App
