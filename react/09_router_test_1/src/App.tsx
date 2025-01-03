import {Link,Routes,Route} from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Secret from './components/Secret';

function App() {

	return (
		<>
			<ul style={{listStyleType:"none"}}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
			<hr/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/secret" element={<Secret/>}/>
			</Routes>	
		</>
	)
}

export default App
