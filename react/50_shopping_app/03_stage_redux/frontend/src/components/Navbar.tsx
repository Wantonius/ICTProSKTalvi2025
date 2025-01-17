import {Link} from 'react-router';
import {logout} from '../actions/loginActions';
import {ThunkDispatch} from 'redux-thunk';
import {AppState,Action} from '../types/states';
import {useDispatch,useSelector} from 'react-redux';

const Navbar = () => {
	
	const dispatch:ThunkDispatch<any,any,Action> = useDispatch();
	
	const stateSelector = (state:AppState) => {
		return {
			isLogged:state.login.isLogged,
			user:state.login.user,
			token:state.login.token
		}
	}
	
	const state = useSelector(stateSelector);
	
	if(state.isLogged) {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<p className="navbar-brand" style={{marginLeft:10}}>Shopping App</p>
				<ul className="navbar-nav">
					<li className="nav-item" style={{marginLeft:10}}>
						<Link to="/" className="nav-link">Shopping List</Link>
					</li>
					<li className="nav-item" style={{marginLeft:10}}>
						<Link to="/form" className="nav-link">Add new item</Link>
					</li>
					<li className="nav-item" style={{marginLeft:10}}>
						<p style={{color:"blue"}} className="nav-link">Logged in as {state.user}</p>
					</li>
					<li className="nav-item" style={{marginLeft:10}}>
						<Link to="/" onClick={() => dispatch(logout(state.token))} className="nav-link">Logout</Link>
					</li>
				</ul>
			</nav>
		
		)
	} else {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<p className="navbar-brand" style={{marginLeft:10}}>Shopping App</p>
			</nav>
		)
	}	
}

export default Navbar;