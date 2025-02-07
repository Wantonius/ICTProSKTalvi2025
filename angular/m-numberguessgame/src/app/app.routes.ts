import { Routes } from '@angular/router';
import {GameScreen} from './components/gamescreen.component';
import {StartScreen} from './components/startscreen.component';
export const routes: Routes = [
	{path:"start",component:StartScreen},
	{path:"game",component:GameScreen},
	{path:"",redirectTo:"/start",pathMatch:"full"}
];
