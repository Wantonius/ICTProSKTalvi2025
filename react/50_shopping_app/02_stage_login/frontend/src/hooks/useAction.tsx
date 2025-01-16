import ShoppingItem from '../models/ShoppingItem';
import User from '../models/User';
import {AppState} from '../types/states';
import {useState,useEffect} from 'react';

//For triggering the useEffect that calls fetch and the backend we need a state that
//holds url and request information

interface UrlRequest {
	request:Request;
	action:string;
}

interface Token {
	token:string;
}

const useAction = () => {
	
	const [urlRequest,setUrlRequest] = useState<UrlRequest>({
		request:new Request("",{}),
		action:""
	})
	
	//Application state containing the database and login information from backend
	
	const [state,setState] = useState<AppState>({
		list:[],
		token:"",
		isLogged:false,
		loading:false,
		error:"",
		user:""
	})
	
	//Helper functions to facilitate state changes
	
	const setError = (error:string) => {
		setState((state) => {
			let tempState:AppState = {
				...state,
				error:error
			}
			saveToStorage(tempState);
			return tempState;
		})
	}
	
	const setLoading = (loading:boolean) => {
		setState((state) => {
			return {
				...state,
				loading:loading,
				error:""
			}
		})
	}
	
	const clearState = (error:string) => {
		setState(
			let tempState:AppState ={
				list:[],
				token:"",
				isLogged:false,
				loading:false,
				error:error,
				user:""
			}
			saveToStorage(tempState);
			return tempState;
		)
	}
	
	const setUser = (user:string) => {
		setState((state) => {
			let tempState:AppState {
				...state,
				user:user
			}
			saveToStorage(tempState);
			return tempState;
		})
	}
	
	//Saving state changes to sessionstorage and retrieving them on reload
	
	const saveToStorage = (state:AppState) => {
		sessionStorage.setItem("state",JSON.stringify(state));
	}
	
	useEffect(() => {
		let temp = sessionStorage.getItem("state");
		if(temp) {
			let state:AppState = JSON.parse(temp);
			setState(state);
			if(state.isLogged) {
				getList(state.token);
			}
		}
	},[])
	
	//Effect gets triggered by changes in request. This is done by API functions which
	//correspond to backend functionalities. So we will have getList,add,remove and edit
	//API functions which trigger the fetch async function with correct parameters for 
	//each call.
	
	useEffect(() => {
		
		const fetchData = async () => {
			if(urlRequest.action === "") {
				return;
			}
			setLoading(true);
			const response = await fetch(urlRequest.request)
			setLoading(false);
			if(!response) {
				console.log("Server sent no response")
				return;
			}
			if(response.ok) {
				switch(urlRequest.action) {
					case "getlist":
						let data = await response.json();
						if(!data) {
							console.log("Failed to parse json");
							return;
						}
						setState((state) => {
							let tempState:AppState = {
								...state,
								list:data
							}
							saveToStorage(tempState);
							return tempState;
						})
						return;
					case "additem":
					case "removeitem":
					case "edititem":
						getList(state.token);
						return;
					case "register":
						setError("Register Success!");
						return;
					case "login":
						let temp = await response.json();
						let token = temp as Token;
						setState((state) => {
							let tempState:AppState = {
								...state,
								token:token.token,
								isLogged:true
							}
							saveToStorage(tempState);
							return tempState;
						})
						getList(token.token);
						return;
					case "logout":
						clearState("");
						return;
					default:
						return;
				}
			} else {
				if(response.status === 403) {
					clearState("Your session has expired. Logging you out!");
					return;
				}
				let errorMessage = "Server responded with a status "+response.status+" "+response.statusText;
				switch(urlRequest.action) {
					case "register":
						if(response.status === 409) {
							errorMessage = "Username already in use";
						}
						setError(errorMessage);
						return;
					case "getlist":
					case "additem":
					case "removeitem":
					case "edititem"
					case "login":
						setError(errorMessage);
						return;
					case "logout":
						clearState("Server responded with an error. Logging you out.");
						return;
					default:
						return;
				}
			}
		}
		
		fetchData();
		
	},[urlRequest])

	//API FUNCTIONS
	
	const getList = (token:string) => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"GET",
				headers:{
					"token":token
				}
			}),
			action:"getlist"
		})
	}
	
	const add = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"POST",
				headers:{
					"Content-type":"application/json",
					"token":state.token
				},
				body:JSON.stringify(item)
			}),
			action:"additem"
		})
	}
	
	const remove = (id:number) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+id,{
				method:"DELETE",
				headers:{
					"token":token
				}
			}),
			action:"removeitem"
		})
	}
	
	const edit = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+item.id,{
				method:"PUT",
				headers:{
					"Content-Type":"application/json",
					"token":token
				},
				body:JSON.stringify(item)
			}),
			action:"edititem"
		})
	}
	
	//LOGIN API
	
	const register = (user:User) => {
		setUrlRequest(
			request: new Request("/register",{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(user)
				}),
			action:"register"
		})
	}

	const login = (user:User) => {
		setUser(user.username);
		setUrlRequest(
			request: new Request("/login",{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(user)
				}),
			action:"login"
		})
	}
	
	const logout = () => {
		setUrlRequest({
			request:new Request("/logout",{
				method:"POST",
				headers:{
					"token":state.token
				}
			}),
			action:"logout"
		})
	}

	
	//We return the state and API functions to be used by components
	
	return {state,getList,add,remove,edit,register,login,logout}
}

export default useAction;