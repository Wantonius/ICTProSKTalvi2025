import ShoppingItem from '../models/ShoppingItem';
import {Reducer} from 'redux';

export interface LoginState {
	token:string;
	isLogged:boolean;
	loading:boolean;
	error:string;
	user:string;
}

export interface ShoppingState {
	list:ShoppingItem[];
	error:string;
}

export interface AppState {
	login:LoginState;
	shopping:ShoppingState;
}

export interface Action {
	type:string;
	payload?: ShoppingItem[] | string;
}

export interface RootReducer {
	login:Reducer<LoginState,Action>;
	shopping:Reducer<ShoppingState,Action>;
}