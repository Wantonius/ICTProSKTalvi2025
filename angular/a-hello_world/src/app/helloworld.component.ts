import {Component,Input} from '@angular/core';

@Component({
	selector:"hello-world",
	templateUrl:"./helloworld.component.html",
	standalone:true
})
export class HelloWorld {
	@Input() name = "World";
}