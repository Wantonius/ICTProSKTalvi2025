import {Component} from '@angular/core';
import {ReactiveFormsModule,FormControl,FormGroup} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
	selector:"reactive-form",
	standalone:true,
	imports:[ReactiveFormsModule,CommonModule],
	templateUrl:"./reactiveform.component.html"
})
export class ReactiveForm {
	
	contactForm = new FormGroup({
		"firstname":new FormControl(),
		"lastname":new FormControl(),
		"email":new FormControl(),
		"phone":new FormControl()
	})
	
	list:any = [];
	
	onSubmit() {
		this.list.push(this.contactForm.value);
		this.contactForm.reset()
	}
	
	removeContact(idx:number) {
		this.list.splice(idx,1);
	}
}