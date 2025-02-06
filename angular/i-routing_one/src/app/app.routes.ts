import { Routes } from '@angular/router';
import { ContactList} from './components/contactlist.component';
import {ContactForm} from './components/contactform.component';
export const routes: Routes = [
	{path:"",component:ContactList},
	{path:"form",component:ContactForm}
];
