import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Apple} from '../models/apple.model';

@Component({
	selector:"template-form",
	standalone:true,
	imports:[FormsModule,CommonModule],
	templateUrl:"./templateform.component.html"
})
export class TemplateForm {
	
	apples:Apple[] = [];
	apple:Apple = new Apple("");
	
	addApple() {
		this.apples.push(this.apple);
		this.apple = new Apple("");
	}
	
	eatApple(idx:number) {
		this.apples.splice(idx,1);
	}
}