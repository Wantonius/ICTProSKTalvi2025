import React,{useState} from 'react';
import User from '../models/User';
import {useDispatch} from 'react-redux';
import {register,login,registerFailed} from '../actions/loginActions';
import {Action} from '../types/states';
import {ThunkDispatch} from 'redux-thunk';

interface State {
	username:string;
	password:string;
}

const LoginPage = () => {
	
	const dispatch:ThunkDispatch<any,any,Action> = useDispatch();
	
	const [state,setState] = useState<State>({
		username:"",
		password:""
	})
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	//dispatch register
	const onRegister = (event:React.SyntheticEvent) => {
		event.preventDefault();
		if(state.username.length < 4 || state.password.length < 8) {
			dispatch(registerFailed("Username needs to be atleast 4 and password 8 characters long"));
			return;
		}
		let user = new User(state.username,state.password);
		dispatch(register(user));
	}
	//dispatch login
	const onLogin = (event:React.SyntheticEvent) => {
		event.preventDefault();
		if(state.username.length < 4 || state.password.length < 8) {
			dispatch(registerFailed("Username needs to be atleast 4 and password 8 characters long"));
			return;
		}
		let user = new User(state.username,state.password);
		dispatch(login(user));
	}

	return(
		<div style={{"width":"40%","backgroundColor":"lightblue","margin":"auto","textAlign":"center"}}>
			<form className="m-5">
				<label htmlFor="username" className="form-label">Username</label>
				<input type="text"
						name="username"
						id="username"
						className="form-control"
						onChange={onChange}
						value={state.username}/>
				<label htmlFor="password" className="form-label">Password</label>
				<input type="password"
						name="password"
						id="password"
						className="form-control"
						onChange={onChange}
						value={state.password}/>				
				<button onClick={onRegister} style={{"marginRight":5}} className="btn btn-primary">Register</button>
				<button onClick={onLogin} style={{"marginLeft":4}} className="btn btn-primary">Login</button>
			</form>
		</div>
	)
}


export default LoginPage;