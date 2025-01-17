import {Reducer} from 'redux';

export interface State {
	count:number;
}

export interface Action {
	type:string;
}

const initialState:State = {
	count:0
}

const countReducer:Reducer<State,Action> = (state = initialState,action) => {
	console.log("In countReducer, action:",action);
	console.log("In countReducer, old state:",state);
	switch(action.type) {
		case "INCREMENT":
			return {
				count:state.count+1
			}
		case "DECREMENT":
			return {
				count:state.count-1
			}
		default:
			return state;
	}
}

export default countReducer;