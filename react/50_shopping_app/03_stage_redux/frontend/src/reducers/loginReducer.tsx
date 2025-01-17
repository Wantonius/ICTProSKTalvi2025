import {LoginState,Action} from '../types/states';
import * as actionConstants from '../types/actionConstants';
import {Reducer} from 'redux';

const getInitialState = ():LoginState => {
	let state = sessionStorage.getItem("loginstate");
	if(state){
		return JSON.parse(state);
	} else {
		return {
			isLogged:false,
			token:"",
			loading:false,
			error:"",
			user:""
		}
	}
}

const initialState = getInitialState();

const saveToStorage = (state:LoginState) => {
	sessionStorage.setItem("loginstate",JSON.stringify(state));
}

const loginReducer:Reducer<LoginState,Action> = (state = initialState,action):LoginState  => {
	console.log("loginReducer, action",action);
	let tempState:LoginState = {
		...state
	}
	switch(action.type) {
		case actionConstants.LOADING:
			return {
				...state,
				error:"",
				loading:true
			}
		case actionConstants.STOP_LOADING:
			return {
				...state,
				loading:false
			}
		case actionConstants.REGISTER_SUCCESS:
			tempState = {
				...state,
				error:"Register success"
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.LOGIN_SUCCESS:
			let token = "";
			if(action.payload) {
				token = action.payload as string;
			}
			tempState = {
				...state,
				isLogged:true,
				token:token
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.REGISTER_FAILED:
		case actionConstants.LOGIN_FAILED:
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
			tempState = {
				loading:false,
				isLogged:false,
				token:"",
				error:"",
				user:""
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.LOGOUT_FAILED:
			let error2 = "";
			if(action.payload) {
				error2 = action.payload as string;
			}
			tempState = {
				loading:false,
				isLogged:false,
				token:"",
				error:error2,
				user:""
			}
			saveToStorage(tempState);
			return tempState;		
		case actionConstants.SET_USER:
			let user = "";
			if(action.payload) {
				user = action.payload as string;
			}
			tempState = {
				...state,
				user:user
			}
			saveToStorage(tempState);
			return tempState;
		default:
			return state;
	}
}

export default loginReducer;