import { Routes } from '@angular/router';
import {ShoppingList} from './components/shoppinglist.component';
import {ShoppingForm} from './components/shoppingform.component';
import {LoginPage} from './components/loginpage.component';

export const routes: Routes = [
	{path:"",component:LoginPage},
	{path:"list",component:ShoppingList},
	{path:"form",component:ShoppingForm}
];
