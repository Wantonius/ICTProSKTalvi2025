import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
	selector:"apple",
	standalone:true,
	templateUrl:"./apple.component.html"
})
export class Apple {
	@Input() color:string = "Green";
	@Output() colorEvent = new EventEmitter();

	appleEmits() {
		this.colorEvent.emit(this.color);
	}
}