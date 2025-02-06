import { Routes } from '@angular/router';
import {Home} from './components/home.component';
import {About} from './components/about.component';
import {Secret} from './components/secret.component';
export const routes: Routes = [
	{path:"",component:Home},
	{path:"about",component:About},
	{path:"secret",component:Secret}
	];
