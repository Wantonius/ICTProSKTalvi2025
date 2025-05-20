import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router,RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
@Component({
	selector:"navbar",
	standalone:true,
	imports:[CommonModule],	
	templateUrl:"./navbar.component.html"
})
export class Navbar {
	
	constructor(private login:LoginService, private router:Router) {}

	isUserLogged() {
		return this.login.isUserLogged()
	}
	
	logout() {
		this.login.logout().subscribe({
			next:(data) => console.log(data),
			error:(error) => {
				this.login.setLoginState(false,"");
				this.router.navigate(["/"])
			},
			complete:() => {
				this.login.setLoginState(false,"");
				this.router.navigate(["/"]);
			}
		})
	}
}