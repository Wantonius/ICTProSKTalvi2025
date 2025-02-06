import {Component,OnInit} from '@angular/core';
import {Contact} from '../models/contact.model';
import {ContactService} from '../services/contactservice.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
	selector:"contact-list",
	standalone:true,
	imports:[CommonModule,FormsModule],
	templateUrl:"./contactlist.component.html"
})
export class ContactList implements OnInit {
	
	contact:Contact = new Contact("","","","",0);
	contactList:Contact[] = [];
	
	constructor(private contactService:ContactService) {}
	
	
	ngOnInit() {
		this.getList();
	}
	
	getList() {
		this.contactList = this.contactService.getList();
	}
	
	addContact() {
		this.contactService.addContact(this.contact);
		this.contact = new Contact("","","","",0);
		this.getList();
	}
	
	removeContact(id:number) {
		this.contactService.removeContact(id);
		this.getList();
	}
}