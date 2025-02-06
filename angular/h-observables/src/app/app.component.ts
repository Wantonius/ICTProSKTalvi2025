import { Component } from '@angular/core';
import {ObservableService} from './observableservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'h-observables';
  
	message:string = "";
  
	constructor(private obsservice:ObservableService) {}

	startObserving() {
		this.obsservice.getObservable().subscribe({
			next:(value) => {this.message = "Observable value:"+value},
			error:(error) => {this.message = "Error occured:"+error},
			complete:() => {this.message = "Done"}
		})
	}
	
}
