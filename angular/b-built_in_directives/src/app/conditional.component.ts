import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector:"conditional",
	standalone:true,
	imports:[CommonModule],
	templateUrl:"./conditional.component.html"
})
export class Conditional {
	show:boolean = true;
}