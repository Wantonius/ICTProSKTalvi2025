import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector:"secret",
	standalone:true,
	templateUrl:"./secret.component.html"
})
export class Secret {
	
	name:string = "";
	
	constructor(private route:ActivatedRoute) {}

	ngOnInit() {
		this.route.queryParams.subscribe({
			next:(params) => {this.name = params["name"]}
		})
	}
}