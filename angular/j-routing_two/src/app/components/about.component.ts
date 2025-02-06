import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
	selector:"about",
	standalone:true,
	imports:[FormsModule],
	templateUrl:"./about.component.html"
})
export class About {
	
	name:string = "";
	
	constructor(private router:Router) {}
	
	goToSecretPage() {
		if(this.name) {
			this.router.navigate(["/secret"],{queryParams:{name:this.name}});
		}
	}
}