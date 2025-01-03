import {useReducer} from 'react';
import Contact from './models/Contect';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Navbar from './components/Navbar';
import {Routes,Route,Navigate} from 'react-router';

interface State {
	list:Contact[];
	id:number;
}

interface Action {
	type:string;
	payload:Contact | number;
}

const initialState:State = {
	list:[],
	id:100
}

const contactReducer = (state:State,action:Action):State => {
	switch(action.type) {
		case "ADD_CONTACT": {
			let tempContact = action.payload as Contact;
			tempContact.id = state.id;
			return {
				list:state.list.concat(tempContact),
				id:state.id+1
			}
		}
		case "REMOVE_CONTACT": {
			let tempId = action.payload as number;
			let tempList = state.list.filter(contact => contact.id !== tempId);
			return {
				...state,
				list:tempList
			}
		}
		default: {
			return state
		}
	}
}

function App() {
	
	const [state,dispatch] = useReducer(contactReducer,initialState);
	
	const addContact = (contact:Contact) => {
		dispatch({
			type:"ADD_CONTACT",
			payload:contact
		})
	}
	
	const removeContact = (id:number) => {
		dispatch({
			type:"REMOVE_CONTACT",
			payload:id
		})
	}

	return (
		<>
			<Navbar/>
			<hr/>
			<Routes>
				<Route path="/" element={<ContactList list={state.list} removeContact={removeContact}/>}/>
				<Route path="/form" element={<ContactForm addContact={addContact}/>}/>
				<Route path="*" element={<Navigate to="/"/>}/>
			</Routes>	
		</>
	)
}

export default App
