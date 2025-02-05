import {Component,OnInit} from '@angular/core';

@Component({
	selector:"binding-example",
	standalone:true,
	templateUrl:"./bindingexample.component.html"
})
export class BindingExample implements OnInit {
	buttonDisabled:boolean = true;
	
	ngOnInit() {
		setTimeout(() => {
			this.buttonDisabled = false;
		},5000)
	}
}