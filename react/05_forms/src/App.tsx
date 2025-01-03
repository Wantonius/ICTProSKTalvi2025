import { useState } from 'react'
import Person from './models/Person';
import ContactForm from './components/ContactForm';

interface State {
	message:string;
}

function App() {
  
	const [state,setState] = useState<State>({
		message:"No greeting yet"
	})
	
	const setGreeting = (person:Person) => {
		setState({
			message:"Hello "+person.firstname+" "+person.lastname
		})
	}

	return (
		<>
			<ContactForm setGreeting={setGreeting}/>
			<h2>{state.message}</h2>
		</>
	)
}

export default App
