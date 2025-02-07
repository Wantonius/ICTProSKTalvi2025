import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {BackendMessage} from '../models/backendmessage.model';
import {User} from '../models/user.model';
import {LoginState} from '../models/loginstate.model';

@Injectable({
	providedIn:"root"
})
export class LoginService {
	
	private token:string = "";
	private isLogged:boolean = false;
	
	constructor(private http:HttpClient) {
		let temp = sessionStorage.getItem("loginstate");
		if(temp) {
			let state:LoginState = JSON.parse(temp)
			this.isLogged = state.isLogged;
			this.token = state.token
		}
	}
	
	register(user:User) {
		const httpOptions = {
			headers:new HttpHeaders({
				"Content-Type":"application/json"
			})
		}
		return this.http.post<BackendMessage>("/register",user,httpOptions);
	}
	
	login(user:User) {
		const httpOptions = {
			headers:new HttpHeaders({
				"Content-Type":"application/json"
			})
		}
		return this.http.post<BackendMessage>("/login",user,httpOptions);
	}

	logout() {
		const httpOptions = {
			headers:new HttpHeaders({
				"token":this.token
			})
		}
		return this.http.post<BackendMessage>("/logout",{},httpOptions);
	}
	
	getToken() {
		return this.token;
	}
	
	isUserLogged() {
		return this.isLogged;
	}
	
	setLoginState(login:boolean, token:string) {
		this.token = token;
		this.isLogged = login;
		sessionStorage.setItem("loginstate",JSON.stringify({
			isLogged:login,
			token:token
		}))
	}
}