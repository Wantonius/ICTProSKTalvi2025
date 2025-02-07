import {Component,OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {User} from '../models/user.model';
import {FormsModule} from '@angular/forms';

@Component({
	selector:"loginpage",
	standalone:true,
	imports:[FormsModule],
	templateUrl:"./loginpage.component.html",
	styleUrls:["./loginpage.component.css"]
})
export class LoginPage implements OnInit {
	
	user:User = new User("","");
	message:string = "";
	
	constructor(private loginService:LoginService) {}
	
	ngOnInit() {
		
	}
	
	register() {
		this.loginService.register(this.user).subscribe({
			next:(data) => this.message = data.message,
			error:(error) => {
				if(error.status === 409) {
					this.message = "Username already in use"
				} else {
					this.message = error.message;
				}
			},
			complete:() => console.log("Register done")
		})
	}

	login() {
		this.loginService.login(this.user).subscribe({
			next:(data) => {
				this.message = "Login success";
				this.loginService.setLoginState(true,data.token)
				//router here
			},
			error:(error) => this.message = error.message,
			complete:() => console.log("Login done")
		})
	}	
	
}