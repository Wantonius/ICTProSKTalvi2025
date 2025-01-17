import {ShoppingState,Action} from '../types/states';
import * as actionConstants from '../types/actionConstants';
import {Reducer} from 'redux';
import ShoppingItem from '../models/ShoppingItem';

const getInitialState = ():ShoppingState => {
	let state = sessionStorage.getItem("shoppingstate");
	if(state) {
		return JSON.parse(state);
	} else {
		return {
			list:[],
			error:""
		}
	}
}

const initialState = getInitialState();

const saveToStorage = (state:ShoppingState) => {
	sessionStorage.setItem("shoppingstate",JSON.stringify(state));
}

const shoppingReducer:Reducer<ShoppingState,Action> = (state = initialState,action):ShoppingState => {
	console.log("shoppingReducer, action",action);
	let tempState = {
		...state
	}
	switch(action.type) {
		case actionConstants.LOADING: {
			return {
				...state,
				error:""
			}			
		}
		case actionConstants.FETCH_LIST_SUCCESS:
			let list = [];
			if(action.payload) {
				list = action.payload as ShoppingItem[]
			}
			tempState = {
				...state,
				list:list
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.ADD_ITEM_SUCCESS:
		case actionConstants.REMOVE_ITEM_SUCCESS:
		case actionConstants.EDIT_ITEM_SUCCESS:
			return state;
		case actionConstants.FETCH_LIST_FAILED:
		case actionConstants.ADD_ITEM_FAILED:
		case actionConstants.REMOVE_ITEM_FAILED:
		case actionConstants.EDIT_ITEM_FAILED:
			let error = "";
			if(action.payload) {
				error = action.payload as string;
			}
			tempState = {
				...state,
				error:error
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.LOGOUT_SUCCESS:
		case actionConstants.LOGOUT_FAILED:
			tempState = {
				list:[],
				error:""
			}
			saveToStorage(tempState);
			return tempState;
		default:
			return tempState;
	}
}

export default shoppingReducer;