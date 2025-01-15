import ShoppingItem from '../models/ShoppingItem';
import {AppState} from '../types/states';
import {useState,useEffect} from 'react';

//For triggering the useEffect that calls fetch and the backend we need a state that
//holds url and request information

interface UrlRequest {
	request:Request;
	action:string;
}

const useAction = () => {
	
	const [urlRequest,setUrlRequest] = useState<UrlRequest>({
		request:new Request("",{}),
		action:""
	})
	
	//Application state containing the database from backend
	
	const [state,setState] = useState<AppState>({
		list:[]
	})
	
	//Effect gets triggered by changes in request. This is done by API functions which
	//correspond to backend functionalities. So we will have getList,add,remove and edit
	//API functions which trigger the fetch async function with correct parameters for 
	//each call.
	
	useEffect(() => {
		
		const fetchData = async () => {
			if(urlRequest.action === "") {
				return;
			}
			const response = await fetch(urlRequest.request)
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
						setState({
							list:data
						})
						return;
					case "additem":
					case "removeitem":
					case "edititem":
						getList();
						return;
					default:
						return;
				}
			} else {
				console.log("Server responded with a status "+response.status+" "+response.statusText)
			}
		}
		
		fetchData();
		
	},[urlRequest])

	//API FUNCTIONS
	
	const getList = () => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"GET"
			}),
			action:"getlist"
		})
	}
	
	const add = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"POST",
				headers:{
					"Content-type":"application/json"
				},
				body:JSON.stringify(item)
			}),
			action:"additem"
		})
	}
	
	const remove = (id:number) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+id,{
				method:"DELETE"
			}),
			action:"removeitem"
		})
	}
	
	const edit = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+item.id,{
				method:"PUT",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(item)
			}),
			action:"edititem"
		})
	}
	
	//We return the state and API functions to be used by components
	
	return {state,getList,add,remove,edit}
}

export default useAction;