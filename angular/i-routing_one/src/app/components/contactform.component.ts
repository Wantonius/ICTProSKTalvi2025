import {Component} from '@angular/core';
import {Contact} from '../models/contact.model';
import {FormsModule} from '@angular/forms';
import {ContactService} from '../services/contactservice.service';

@Component({
	selector:"contact-form",
	standalone:true,
	imports:[FormsModule],
	templateUrl:"./contactform.component.html"
})
export class ContactForm {
	
	contact:Contact = new Contact("","","","",0);
	
	constructor(private contactService:ContactService) {}
	
	addContact() {
		this.contactService.addContact(this.contact);
		this.contact = new Contact("","","","",0);
	}
}