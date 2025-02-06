import { Component } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';
import {AppMenu} from './menu.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[AppMenu],
  styleUrl: './app.component.css',
  animations:[
  trigger("slideInOut",[
	state("in",style({
		transform:'translate3d(0,0,0)'
	})),
	state("out",style({
		transform:'translate3d(100%,0,0)'
	})),
	transition("in => out",animate("400ms ease-in-out")),
	transition("out => in",animate("400ms ease-in-out"))
  ])
  ]
})
export class AppComponent {
  
  menuState:string = "out";
  
  toggleMenu() {
	  this.menuState = this.menuState === "out" ? "in":"out";
  }
}
