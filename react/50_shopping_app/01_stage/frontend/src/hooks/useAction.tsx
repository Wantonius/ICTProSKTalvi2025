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
}

export default useAction;