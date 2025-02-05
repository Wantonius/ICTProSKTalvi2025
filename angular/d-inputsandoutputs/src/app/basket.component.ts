import {Component} from '@angular/core';
import {Apple} from './apple.component';

@Component({
	selector:"basket",
	standalone:true,
	imports:[Apple],
	templateUrl:"./basket.component.html"
})
export class Basket {
	message:string = "";

	getMessage(message:string) {
		if(message === "Brown") {
			this.message = "This apple is rotten";
		} else {
			this.message = "This apple color is "+message;
		}
	}
}