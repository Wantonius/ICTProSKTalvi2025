import ShoppingList from './components/ShoppingList';
import ShoppingForm from './components/ShoppingForm';
import Navbar from './components/Navbar';
import {Routes,Route,Navigate} from 'react-router-dom';
import type {PayloadAction, ThunkDispatch} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {getList} from './store/shoppingSlice';
import {useEffect} from 'react';


function App() {
  
	const dispatch:ThunkDispatch<any,any,PayloadAction> = useDispatch();

	useEffect(() => {
		dispatch(getList());
	},[])
	
	return (
		<>
			<Navbar/>
			<Routes>
				<Route path="/" element={<ShoppingList/>}/>
				<Route path="/form" element={<ShoppingForm/>}/>
				<Route path="*" element={<Navigate to="/"/>}/>
			</Routes>
		</>
	)
}

export default App
